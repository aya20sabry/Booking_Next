import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaMoneyBill,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

function PaymentMethods({ icon: Icon, title }) {
  const t = useTranslations("Hotel");
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 p-2 sm:p-4 gap-4 sm:gap-0">
        <div className="flex justify-start items-center">
          <Icon className="mx-2 sm:mx-4 text-xl sm:text-2xl" />
          <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
        </div>
        <div className="col-span-1 sm:col-span-3 flex flex-wrap justify-start items-center gap-2">
          <FaCcVisa className="text-[35px] sm:text-[45px] text-blue-600" />
          <FaCcMastercard className="text-[35px] sm:text-[45px] text-[#EB001B]" />
          <FaCcPaypal className="text-[35px] sm:text-[45px] text-[#003087]" />
          <FaMoneyBill className="text-[35px] sm:text-[45px] text-[#008234]" />
        </div>
      </div>
    </>
  );
}

export default PaymentMethods;
