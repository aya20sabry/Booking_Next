"use client";
import { IoWifi } from "react-icons/io5";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsCurrencyExchange, BsInfoCircle } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { useTranslations } from "next-intl";

function BookingSummarySection({
  hotel,
  locale,
  ratingCategory,
  getRatingCategory,
  reviews,
  checkInDate,
  checkOutDate,
  type,
  price,
  formatDate,
  getDateDifference,
  numberOfRooms,
}) {
  const t = useTranslations("Book");

  return (
    <div className="col-span-1">
      <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300">
        <h1 className="text-base font-bold">{hotel?.name[locale]}</h1>
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
          <IoWifi className="text-xl" />
          <span className="text-xs">{t("free_wifi")}</span>
          <GiForkKnifeSpoon className="text-xl" />
          <span className="text-xs">{t("free_breakfast")}</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
        <h1 className="text-base font-bold">{t("your_booking_details")}</h1>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1 flex flex-col gap-2">
            <h1 className="text-sm font-medium">{t("check_in")}</h1>
            <div
              className={`text-sm font-bold border-gray-300 ${
                locale === "ar"
                  ? "text-right border-l-2"
                  : "text-left border-r-2"
              }`}
            >
              {formatDate(checkInDate)}
              <span className="text-sm text-[#595959] font-normal block">
                {t("o_clock")} {hotel?.HouseRules.CheckInTime}
              </span>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <h1 className="text-sm font-medium">{t("check_out")}</h1>
            <div className="text-sm font-bold">
              {formatDate(checkOutDate)}
              <span className="text-sm text-[#595959] font-normal block">
                {t("o_clock")} {hotel?.HouseRules.CheckOutTime}
              </span>
            </div>
          </div>
        </div>
        <div className="text-sm font-semibold border-b border-gray-300 pb-2">
          {t("total_length_of_stay")}:{" "}
          <span className="text-sm font-bold">
            {getDateDifference(checkInDate, checkOutDate)} {t("nights")}
          </span>
        </div>
        <div className="text-sm font-semibold">
          {t("you_selected")}:
          <span className="text-sm font-bold block">
            {numberOfRooms} {t("room")} {t("for")}{" "}
            {type === "Deluxe Double" || type === "Standard Double" ? 2 : 1}{" "}
            {t("adults")}
          </span>
        </div>
        <button className="text-sm font-semibold bg-white text-[#006ce4] p-2 rounded-md w-fit hover:bg-blue-50">
          {t("change_your_selection")}
        </button>
      </div>

      <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
        <h2 className="text-base font-bold mb-4">{t("your_price_summary")}</h2>
        <div className="bg-[#EBF3FF] p-4 rounded-md mb-4">
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
            {t("in_property_currency")}: US${Math.round(price / 48)}
          </p>
        </div>

        <h3 className="font-semibold mb-2">{t("price_information")}</h3>
        <div className="flex flex-col gap-2">
          <p className="text-sm flex items-center">
            <CiMoneyBill className="inline-block text-2xl mx-4" />
            {t("excludes_taxes_and_charges")}
          </p>
          <p className="text-sm flex items-center">
            <BsCurrencyExchange className="inline-block text-4xl mx-4" />
            {t(
              "bear_in_mind_that_your_card_issuer_may_charge_you_a_foreign_transaction_fee"
            )}
          </p>
          <p className="text-sm flex items-center">
            <BsInfoCircle className="inline-block text-5xl mx-4" />
            {t(
              "please_note_that_by_egyptian_law_all_foreign_guests_must_pay_in_a_foreign_currency_not_in_egyptian_currency"
            )}
          </p>
          <p className="text-sm flex items-center">
            <BsInfoCircle className="inline-block text-xl mx-4" />
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
        <p className="text-sm">
          {t("you_will_be_charged_a_prepayment_of_the_total_price_at_any_time")}
        </p>
      </div>
    </div>
  );
}

export default BookingSummarySection;
