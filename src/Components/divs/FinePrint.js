"use client";
import SubHeading from "../Headings/SubHeading";
import { useTranslations, useLocale } from "next-intl";

function FinePrint({ hotel }) {
  const t = useTranslations("Hotel");
  const locale = useLocale();
  return (
    <>
      <SubHeading
        title={t("fine_print")}
        description={t("fine_print_description")}
      />
      <div className="border border-[#E0E0E0] rounded-md p-4 w-full mt-6">
        <p className="text-sm">
          {hotel?.HouseRules?.Cancellation.Policy[locale]}
        </p>
      </div>
    </>
  );
}

export default FinePrint;
