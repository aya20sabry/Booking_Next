import React from "react";
import { FaCheck } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
const ProgressSteps = ({ step, handleStep }) => {
  const t = useTranslations("steps");
  const locale = useLocale();
  return (
    <div className="flex items-center w-full max-w-5xl mx-auto">
      <div className="flex items-center text-blue-600 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-8 w-8 py-3 border-2 bg-blue-600 border-blue-600 flex items-center justify-center">
          <span className="text-white font-bold">
            {step <= 1 ? 1 : <FaCheck />}
          </span>
        </div>
        <div
          className={`absolute top-0 ${
            locale === "ar" ? "-mr-10" : "-ml-10"
          } text-center mt-10 w-32 text-xs font-bold uppercase ${
            step === 1 ? "text-blue-600" : "text-gray-500"
          }`}
        >
          {t("your_selection")}
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600"></div>
      <div className="flex items-center text-white relative">
        <div className="rounded-full transition duration-500 ease-in-out h-8 w-8 py-3 border-2 bg-blue-600 border-blue-600 flex items-center justify-center">
          <span className="text-white font-bold">
            {step <= 2 ? 2 : <FaCheck />}
          </span>
        </div>
        <div
          className={`absolute top-0 ${
            locale === "ar" ? "-mr-10" : "-ml-10"
          } text-center mt-10 w-32 text-xs font-bold uppercase ${
            step === 2 ? "text-blue-600" : "text-gray-500"
          }`}
        >
          {t("your_details")}
        </div>
      </div>
      <div
        className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
          step === 3 ? "border-blue-600" : "border-gray-300"
        }`}
      ></div>
      <div className="flex items-center text-gray-500 relative">
        <div
          className={`rounded-full transition duration-500 ease-in-out h-8 w-8 py-3 border-2 ${
            step === 3 ? "bg-blue-600 border-blue-600" : "border-gray-300"
          } flex items-center justify-center`}
        >
          <span className="text-white font-bold">
            {step <= 3 ? 3 : <FaCheck />}
          </span>
        </div>
        <div
          className={`absolute top-0 ${
            locale === "ar" ? "-mr-10" : "-ml-10"
          } text-center mt-10 w-32 text-xs font-bold uppercase ${
            step === 3 ? "text-blue-600" : "text-gray-500"
          }`}
        >
          {t("final_step")}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
