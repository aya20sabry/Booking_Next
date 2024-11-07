import { questionsar, questionsen } from "@/Static/Arrays";
import FAQItem from "../divs/FAQItem";
import SubHeading from "../Headings/SubHeading";
import { useTranslations, useLocale } from "next-intl";

const TravelersAsking = () => {
  const t = useTranslations("Hotel");
  const locale = useLocale();
  const leftQuestions =
    locale === "ar"
      ? questionsar.slice(0, Math.ceil(questionsar.length / 2))
      : questionsen.slice(0, Math.ceil(questionsen.length / 2));
  const rightQuestions =
    locale === "ar"
      ? questionsar.slice(Math.ceil(questionsar.length / 2))
      : questionsen.slice(Math.ceil(questionsen.length / 2));

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-4">
        <SubHeading title={t("travelers_are_asking")} />
      </div>
      <div className="flex flex-wrap -mx-2 ">
        <div className="w-full md:w-2/3 px-2 ">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <div className="border rounded-lg overflow-hidden">
                {leftQuestions.map((question, index) => (
                  <FAQItem key={index} question={question} />
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="border rounded-lg overflow-hidden">
                {rightQuestions.map((question, index) => (
                  <FAQItem key={index} question={question} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  md:w-1/3 px-2 mt-4 md:mt-0 ">
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center h-full">
            <h3 className="text-xl font-bold mb-2">{t("still_looking")}</h3>
            <button className=" border border-blue-600 text-blue-600 px-3 py-2 rounded m-4 text-sm">
              {t("ask_a_question")}
            </button>
            <p className="text-sm text-black">
              {t("we_have_an_instant_answer_to_most_questions")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelersAsking;
