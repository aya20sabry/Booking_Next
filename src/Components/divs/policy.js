"use client";
import SubHeading from "../Headings/SubHeading";
import TableRow from "./tableRow";
import {
  HiArrowLeftEndOnRectangle,
  HiArrowRightEndOnRectangle,
} from "react-icons/hi2";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoPawOutline } from "react-icons/io5";
import { LiaSmokingSolid } from "react-icons/lia";
import { BiParty } from "react-icons/bi";
import PaymentMethods from "./paymentMethods";
import { CiCreditCard2 } from "react-icons/ci";
import { useTranslations, useLocale } from "next-intl";

function Policy({ hotel }) {
  const t = useTranslations("Hotel");
  const locale = useLocale();
  return (
    <>
      <SubHeading
        title={t("policies")}
        description={`${hotel?.name[locale]} ${t("takes_special_requests")}`}
      />
      <section className="mx-auto max-w-6xl mt-4 sm:mt-6 px-4 sm:px-6 lg:px-8">
        <div className="border border-[#E0E0E0] rounded-md p-2 sm:p-4 w-full">
          <TableRow
            icon={HiArrowRightEndOnRectangle}
            title={t("check_in")}
            description={`${t("check_in_usually_be_at")} ${
              hotel?.HouseRules?.CheckInTime
            } `}
          />
          <TableRow
            icon={HiArrowLeftEndOnRectangle}
            title={t("check_out")}
            description={`${t("check_out_usually_be_at")} ${
              hotel?.HouseRules?.CheckOutTime
            } `}
          />
          <TableRow
            icon={IoIosInformationCircleOutline}
            title={t("cancellation_prepayment")}
            description={
              t("cancellation_prepayment_description") +
              ` ${hotel?.HouseRules?.Cancellation?.DeadlineDays} ${t(
                "days"
              )} ${t("before_check_in")}`
            }
          />
          <TableRow
            icon={IoPawOutline}
            title={t("pets")}
            description={
              hotel?.HouseRules?.NoPets
                ? t("pets_not_allowed")
                : t("pets_allowed")
            }
          />
          <TableRow
            icon={LiaSmokingSolid}
            title={t("smoking")}
            description={
              hotel?.HouseRules?.NoSmoking
                ? t("smoking_not_allowed")
                : t("smoking_allowed")
            }
          />
          <TableRow
            icon={BiParty}
            title={t("parties")}
            description={
              hotel?.HouseRules?.NoParties
                ? t("parties_not_allowed")
                : t("parties_allowed")
            }
          />
          <PaymentMethods
            icon={CiCreditCard2}
            title={t("accepted_payment_methods")}
          />
        </div>
      </section>
    </>
  );
}

export default Policy;
