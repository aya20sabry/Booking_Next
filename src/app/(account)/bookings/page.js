"use client";

import { useEffect, useState } from "react";
import { format, addDays, isBefore, differenceInDays } from "date-fns";
import { Calendar, MapPin, Hotel, DollarSign, X } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { GetHotelID, GetUserBookings } from "@/API/GET";
import Image from "next/image";
import { DeleteBooking } from "@/API/DELETE";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

function Bookings() {
  const [bookings, setBookings] = useState(null);
  const [hotels, setHotels] = useState({});
  const [userId, setUserId] = useState(null);
  const router = useRouter();
  async function getUserId() {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      return decoded.id;
    }
    return null;
  }
  useEffect(() => {
    async function fetchData() {
      const id = await getUserId();
      setUserId(id);
      try {
        const data = await GetUserBookings(id);
        setBookings(data);

        const hotelPromises = data.map((booking) =>
          GetHotelID(booking.host_id.toString())
        );
        const hotelData = await Promise.all(hotelPromises);

        const hotelMap = {};
        hotelData.forEach((hotel, index) => {
          hotelMap[data[index].host_id] = hotel;
        });

        setHotels(hotelMap);
        console.log("Bookings:", data);
        console.log("Hotels:", hotelMap);
      } catch (error) {
        console.error("Error fetching bookings or hotels:", error);
      }
    }
    fetchData();
  }, []);

  const cancelBooking = (id) => {
    DeleteBooking(id).then(() => {
      setBookings(bookings.filter((booking) => booking._id !== id));
    });
  };

  const isCancellationAllowed = (booking) => {
    const hotel = hotels[booking.host_id];
    if (!hotel) return false;

    const cancellationDeadline = addDays(
      new Date(booking.check_in_date),
      -hotel.HouseRules.Cancellation.DeadlineDays
    );
    return isBefore(new Date(), cancellationDeadline);
  };

  const getCancellationTooltip = (booking) => {
    const hotel = hotels[booking.host_id];
    if (!hotel) return "Cancellation information unavailable";

    const cancellationDeadline = addDays(
      new Date(booking.check_in_date),
      -hotel.HouseRules.Cancellation.DeadlineDays
    );
    const daysUntilDeadline = differenceInDays(
      cancellationDeadline,
      new Date()
    );

    if (isCancellationAllowed(booking)) {
      return `You can cancel your booking until ${format(
        cancellationDeadline,
        "MMM d, yyyy"
      )} (${daysUntilDeadline} days from now)`;
    } else {
      return `Cancellation was available until ${format(
        cancellationDeadline,
        "MMM d, yyyy"
      )}.`;
    }
  };

  const today = new Date().toLocaleDateString();
  const checkInDates = bookings?.map((booking) =>
    new Date(booking.check_in_date).toLocaleDateString()
  );
  console.log(checkInDates);
  console.log(today);
  return (
    <>
      <div className="container mx-auto py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="border border-b-0 border-gray-200 rounded-lg p-4 shadow-md shadow-gray-200 ">
          <h1 className="text-3xl font-bold mb-6">Your Bookings</h1>
          <ScrollArea className="h-[calc(100vh-200px)]">
            <ul className="space-y-4">
              {bookings?.map((booking) => (
                <li
                  key={booking._id}
                  className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/4">
                      <Image
                        src={hotels[booking.host_id]?.images[2]}
                        alt={hotels[booking.host_id]?.name?.en}
                        className="w-full h-48 sm:h-full object-cover"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex-grow p-4 sm:p-6 flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">
                          {booking.hotelName}
                        </h2>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>
                            {hotels[booking.host_id]?.location.Address?.en}
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>
                            {format(booking.check_in_date, "MMM d, yyyy")} -{" "}
                            {format(booking.check_out_date, "MMM d, yyyy")}
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <DollarSign className="w-4 h-4 mr-1" />
                          <span>
                            ${booking.payment.amount.toLocaleString()} total
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      variant="destructive"
                                      disabled={!isCancellationAllowed(booking)}
                                    >
                                      Cancel Booking
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Cancel Booking</DialogTitle>
                                      <DialogDescription>
                                        Are you sure you want to cancel your
                                        booking at{" "}
                                        {hotels[booking.host_id]?.name?.en}?
                                        This action cannot be undone.{" "}
                                        <p className="text-red-500">
                                          Note: Cancellation may incur charges
                                          and you will got your money back after
                                          14 days.
                                        </p>
                                      </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                      <Button
                                        variant="outline"
                                        onClick={() => {}}
                                      >
                                        Keep Booking
                                      </Button>
                                      <Button
                                        variant="destructive"
                                        onClick={() =>
                                          cancelBooking(booking._id)
                                        }
                                      >
                                        Yes, Cancel Booking
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{getCancellationTooltip(booking)}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        {new Date(booking.check_in_date) < new Date() && (
                          <button
                            className="ms-2 bg-[#006ce4] text-white px-4 py-2 rounded-md text-sm font-semibold"
                            onClick={() => {
                              router.push(`/addReview/${booking.host_id}`);
                            }}
                          >
                            Add Review
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {bookings?.length === 0 && (
              <div className="text-center py-10">
                <Hotel className="mx-auto h-12 w-12 text-muted-foreground" />
                <h2 className="mt-2 text-2xl font-semibold">
                  No Bookings Found
                </h2>
                <p className="mt-1 text-muted-foreground">
                  You haven&apos;t made any bookings yet.
                </p>
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </>
  );
}

export default Bookings;
