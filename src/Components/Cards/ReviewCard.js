import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

const ReviewCard = ({ review }) => {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-blue-800 rounded-full mr-3 flex items-center justify-center text-white font-bold">
          {review?.userId.firstName[0].toUpperCase()}
        </div>
        <div>
          <div className="font-semibold text-sm">
            {review?.userId.firstName}
          </div>
          <div className="text-xs text-gray-600">
            {review?.userId.nationality}
          </div>
        </div>
      </div>
      <p className="text-sm mb-2">&quot;{review?.comment?.en}&quot;</p>
      <a href="#" className="text-blue-500 text-sm hover:underline">
        Read more
      </a>
    </div>
  );
};

export default ReviewCard;
