import { IoChatbubblesOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { useTranslations, useLocale } from "next-intl";
import { FaAngleLeft } from "react-icons/fa";

const FAQItem = ({ question }) => {
  const t = useTranslations("Hotel");
  const locale = useLocale();
  return (
    <div className="flex items-start justify-start p-3 border-b last:border-b-0">
      <IoChatbubblesOutline className="  text-gray-500 text-xl" />
      <div className="flex items-start">
        <span className="text-xs ml-2">{question}</span>
      </div>
      {locale === "ar" ? (
        <FaAngleLeft className="w-5 h-5 text-gray-400 ml-auto" />
      ) : (
        <FaAngleRight className="w-5 h-5 text-gray-400 ml-auto" />
      )}
    </div>
  );
};

export default FAQItem;
