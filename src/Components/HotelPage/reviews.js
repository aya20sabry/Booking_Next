import ReviewCard from "../Cards/ReviewCard";
import { useTranslations } from "next-intl";
function Reviews({ reviews }) {
  const t = useTranslations("Hotel");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{t("reviews")}</h2>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default Reviews;
