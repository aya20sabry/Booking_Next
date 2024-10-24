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
const testBookingDetails = {
  check_in_date: new Date("2024-10-18T00:00:00.000Z"),
  check_out_date: new Date("2024-10-20T00:00:00.000Z"),
  booking_date: new Date(),
  userID: "650550defc249cd1553613db",
  host_id: "670550defc249cd1553613db",
  members: 2,
  payment: {
    status: "PENDING",
    date: new Date(),
    method: "PayPal",
    amount: 10823.42,
    coin: "EGP",
    payment_id: "PAY-1234567890",
  },
  commission: {
    rate: 0.05,
  },
  room_id: ["660b29ac401ba9c92d116a71"],
  email: "user@example.com",
  numberOfNights: 2,
  numberOfRooms: 1,
  status: "PENDING",
};

function BookPage() {
  const t = useTranslations("Book");
  const locale = useLocale();
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

  const handleBookingSubmit = async () => {
    try {
      console.log("Creating booking with test data:", testBookingDetails);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBookingId("671937b29d1a05735bff2e2e");
      console.log("Booking ID set:", "test_booking_123");
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
            <section className="py-8 ">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
                <div className="col-span-1">
                  <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300">
                    <h1 className="text-base font-bold">
                      {hotel?.name[locale]}
                    </h1>
                    <div className="text-sm">
                      {hotel?.location?.Address[locale]}
                      <span className="text-xs text-[#008234]">
                        {t("excellent_location")}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs rounded bg-[#003b95] text-white p-1 w-fit">
                        {ratingCategory}
                      </span>{" "}
                      <span className="text-xs rounded p-1 w-fit">
                        {getRatingCategory(ratingCategory)}{" "}
                        <span className="text-xs rounded text-[#595959] w-fit">
                          {reviews?.length} . {t("reviews")}
                        </span>
                      </span>
                    </div>
                    <p className="flex gap-2 items-center">
                      <IoWifi className=" text-xl" />
                      <span className="text-xs">{t("free_wifi")}</span>
                      <GiForkKnifeSpoon className=" text-xl" />
                      <span className="text-xs">{t("free_breakfast")}</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                    <h1 className="text-base font-bold">
                      {t("your_booking_details")}
                    </h1>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="col-span-1 flex flex-col gap-2">
                        <h1 className="text-sm font-medium">{t("check_in")}</h1>
                        <div
                          className={`text-sm font-bold  border-gray-300 ${
                            locale === "ar"
                              ? "text-right border-l-2"
                              : "text-left border-r-2"
                          }`}
                        >
                          Fri 18 Oct 2024
                          <span className="text-sm text-[#595959] font-normal block">
                            {t("o_clock")} {hotel?.HouseRules.CheckInTime}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 flex flex-col gap-2">
                        <h1 className="text-sm font-medium">
                          {t("check_out")}
                        </h1>
                        <div className="text-sm font-bold">
                          Wed 20 Nov 2024
                          <span className="text-sm text-[#595959] font-normal block">
                            {t("o_clock")} {hotel?.HouseRules.CheckOutTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold border-b border-gray-300 pb-2">
                      {t("total_length_of_stay")}:
                      <span className="text-sm font-bold">
                        {checkOutDate - checkInDate} {t("nights")}
                      </span>
                    </div>
                    <div className="text-sm font-semibold">
                      {t("you_selected")}:
                      <span className="text-sm font-bold block">
                        1 {t("room")} {t("for")} 2 {t("adults")}
                      </span>
                    </div>
                    <button className="text-sm font-semibold bg-white text-[#006ce4] p-2 rounded-md w-fit hover:bg-blue-50">
                      {t("change_your_selection")}
                    </button>
                  </div>
                  <div className=" flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                    <h2 className="text-base font-bold mb-4">
                      {t("your_price_summary")}
                    </h2>
                    <div className="bg-[#EBF3FF] p-4 rounded-md mb-4 ">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-bold">{t("price")}</span>
                        <div className="text-right">
                          <p className="text-xl font-bold">EGP {price}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {t("additional_charges_may_apply")}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t("in_property_currency")}: US$222.75
                      </p>
                    </div>

                    <h3 className="font-semibold mb-2">
                      {t("price_information")}
                    </h3>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm  flex items-center">
                        <CiMoneyBill className="inline-block text-2xl mx-4" />
                        {t("excludes_taxes_and_charges")}
                      </p>
                      <p className="text-sm  flex items-center">
                        <BsCurrencyExchange className="inline-block text-4xl mx-4" />
                        {t(
                          "bear_in_mind_that_your_card_issuer_may_charge_you_a_foreign_transaction_fee"
                        )}
                      </p>
                      <p className="text-sm  flex items-center">
                        <BsInfoCircle className="inline-block text-5xl mx-4 " />
                        {t(
                          "please_note_that_by_egyptian_law_all_foreign_guests_must_pay_in_a_foreign_currency_not_in_egyptian_currency"
                        )}
                      </p>
                      <p className="text-sm  flex items-center ">
                        <BsInfoCircle className="inline-block text-xl mx-4 " />
                        {t(
                          "egyptian_citizens_are_required_to_pay_in_the_local_currency_according_to_the_exchange_rate_at_the_time_of_payment"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                    <h2 className="text-base font-bold mb-4">
                      {t("your_payment_schedule")}
                    </h2>
                    <p className="text-sm ">
                      {t(
                        "you_will_be_charged_a_prepayment_of_the_total_price_at_any_time"
                      )}
                    </p>
                  </div>
                </div>
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
