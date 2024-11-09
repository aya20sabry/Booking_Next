"use client";
import { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { GetHotelID, GetHotelReviews, GetHotelRooms } from "@/API/GET";
import ProgressSteps from "@/Components/divs/bookingProgress";
import Navbar from "@/Components/Navbar/Navbar";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Loader } from "lucide-react";
import { BsCurrencyExchange, BsInfoCircle } from "react-icons/bs";
import { CiLock, CiMoneyBill } from "react-icons/ci";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GoQuestion } from "react-icons/go";
import { IoWifi } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import BookingSummarySection from "@/Components/sections/BookingSummarySection";

function BookPage() {
  const t = useTranslations("Book");
  const locale = useLocale();
  const params = useParams();
  const id = params.id;
  const searchParams = useSearchParams();
  const [step, setStep] = useState(3);
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingId, setBookingId] = useState(null);
  const [paypalError, setPaypalError] = useState(null);
  const [paypalOrderError, setPaypalOrderError] = useState(null);
  const router = useRouter();
  const hotelId = searchParams.get("hotel");
  const roomId = searchParams.get("room");
  const type = searchParams.get("type");
  const price = searchParams.get("price");
  const name = searchParams.get("name");
  const checkInDate = searchParams.get("checkInDate");
  const checkOutDate = searchParams.get("checkOutDate");
  const numberOfRooms = searchParams.get("numberOfRooms");
  const handleStep = (step) => {
    setStep(step);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [hotelData, roomData, reviewData] = await Promise.all([
          GetHotelID(hotelId),
          GetHotelRooms(hotelId),
          GetHotelReviews(hotelId),
        ]);

        setHotel(hotelData);
        setRooms(roomData);
        setReviews(reviewData);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  console.log(id);
  const handleBookingSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBookingId(id);
      setPaypalOrderError(null);
    } catch (error) {
      console.error("Error creating booking:", error);
      setPaypalOrderError("Failed to create booking. Please try again.");
    }
  };

  function collectRatings(reviews) {
    return reviews?.map((review) => review.rating) || [];
  }

  const ratings = collectRatings(reviews);

  function calculateRatingCategory(ratings) {
    if (!ratings || ratings.length === 0) return 0;
    const totalScore = ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = totalScore / ratings.length;
    return averageRating;
  }

  const ratingCategory = calculateRatingCategory(ratings);

  function getRatingCategory(rating) {
    if (rating >= 8) return "Excellent";
    if (rating >= 7) return "Very good";
    if (rating >= 6) return "Good";
    if (rating >= 5) return "Average";
    return "Poor";
  }
  function formatDate(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day} ${year}`;
  }
  function getDateDifference(checkInDate, checkOutDate) {
    let startDate = new Date(checkInDate);
    let endDate = new Date(checkOutDate);
    const difference = endDate.getDay() - startDate.getDay();
    return difference;
  }
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          currency: "USD",
        }}
      >
        <Navbar />
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="spinner">
              <Loader className="animate-spin text-blue-500 text-4xl" />
            </div>
          </div>
        ) : (
          <>
            <section className="py-8 sm:py-4">
              <ProgressSteps step={step} handleStep={handleStep} />
            </section>
            <section className="py-8">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
                <BookingSummarySection
                  hotel={hotel}
                  locale={locale}
                  ratingCategory={ratingCategory}
                  getRatingCategory={getRatingCategory}
                  reviews={reviews}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  type={type}
                  price={price}
                  formatDate={formatDate}
                  getDateDifference={getDateDifference}
                  numberOfRooms={numberOfRooms}
                />
                <div className="col-span-2">
                  <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">
                        {t("how_do_you_want_to_pay")}
                      </h2>
                      <button className="flex items-center text-sm  font-semibold bg-white text-[#006ce4] p-2 rounded-md w-fit hover:bg-blue-50 ">
                        <GoQuestion className="inline-block text-xl mx-2" />{" "}
                        {t("no_card")}
                      </button>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <button className="mb-2 rounded-full bg-green-500 text-white p-2 flex justify-center items-center  font-semibold">
                        <RiMoneyDollarCircleFill className="mx-2 text-3xl" />{" "}
                        {t("pay_cash_on_arrival")}
                      </button>
                      <button
                        className="text-base font-semibold bg-[#006ce4] text-white p-2 rounded-full mb-4 text-center hover:bg-[#0057B8] flex items-center justify-center"
                        onClick={handleBookingSubmit}
                      >
                        <FaPaypal className="mx-2 text-3xl" />{" "}
                        <FaCreditCard className="mx-2 text-3xl" />{" "}
                        {t("or_press_here")}{" "}
                        {t("to_pay_with_paypal_or_credit_card")}
                      </button>
                      {bookingId && (
                        <PayPalButtons
                          createOrder={(data, actions) => {
                            console.log("Creating PayPal order");
                            return fetch("http://localhost:3000/paypal/pay", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                bookingId: bookingId,
                              }),
                            })
                              .then((response) => {
                                if (!response.ok) {
                                  return response.json().then((err) => {
                                    throw new Error(
                                      err.message ||
                                        "Failed to create PayPal order"
                                    );
                                  });
                                }
                                return response.json();
                              })
                              .then((order) => {
                                console.log("PayPal order created:", order);
                                setPaypalOrderError(null);
                                return order.id;
                              })
                              .catch((error) => {
                                console.error(
                                  "Error creating PayPal order:",
                                  error
                                );
                                setPaypalOrderError(error.message);
                                throw error;
                              });
                          }}
                          onApprove={(data, actions) => {
                            console.log("Payment approved, executing payment");
                            return fetch(
                              `http://localhost:3000/paypal/success?token=${data.orderID}&bookingId=${bookingId}`
                            )
                              .then((response) => response.json())
                              .then((details) => {
                                console.log("Payment successful:", details);
                                if (
                                  details.message ===
                                  "Failed to process payment"
                                ) {
                                  throw new Error(
                                    "Backend failed to process payment"
                                  );
                                }
                                router.push("/payment-success");
                              })
                              .catch((error) => {
                                console.error(
                                  "Error processing payment:",
                                  error
                                );
                                setPaypalError(error);
                              });
                          }}
                          onError={(err) => {
                            setPaypalError(err);
                            console.error("PayPal error:", err);
                          }}
                          style={{
                            layout: "vertical",
                            color: "gold",
                            shape: "pill",
                            label: "paypal",
                          }}
                        />
                      )}

                      {paypalOrderError && (
                        <p className="text-red-500 mb-2">
                          Error: {paypalOrderError}
                        </p>
                      )}
                    </div>
                  </div>

                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={t(
                      "i_consent_to_receiving_marketing_emails_from_booking_com_including_promotions_personalized_recommendations_rewards_travel_experiences_and_updates_about_booking_coms_products_and_services"
                    )}
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                      },
                    }}
                  />

                  <p className="my-4 text-xs">
                    {t(
                      "by_signing_up_you_let_us_tailor_offers_and_content_to_your_interests_by_monitoring_how_you_use_booking_com_through_tracking_technologies_unsubscribe_at_any_time_read_our"
                    )}
                    <span className="text-[#006ce4] underline font-bold">
                      {" "}
                      {t("privacy_policy")}.
                    </span>
                  </p>

                  <p className="my-4 text-sm">
                    {t("your_booking_is_with")} {hotel?.name.en}{" "}
                    {t("directly_and_by")}{" "}
                    {t("completing_this_booking_you_agree_to_the")}{" "}
                    <span className="text-[#006ce4] underline font-bold">
                      {t("booking_conditions")}
                    </span>
                    ,{" "}
                    <span className="text-[#006ce4] underline font-bold">
                      {t("general_terms")}
                    </span>
                    , {t("and")}{" "}
                    <span className="text-[#006ce4] underline font-bold ">
                      {t("privacy_policy")}
                    </span>
                    .
                  </p>

                  <div className="flex justify-end gap-2">
                    <button className="rounded-md border border-[#006CE8] bg-white text-[#006CE8] py-2 px-6 flex justify-center items-center text-base font-semibold hover:bg-blue-50 ">
                      {t("check_your_booking")}
                    </button>
                    <button className="rounded-md bg-[#006CE8] text-white py-4 px-6 flex justify-center items-center text-base font-semibold hover:bg-[#0057B8]">
                      <CiLock className="mr-2 text-3xl" />{" "}
                      {t("complete_booking")}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </PayPalScriptProvider>
    </>
  );
}

export default BookPage;
