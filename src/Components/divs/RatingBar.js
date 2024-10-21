import { Progress } from "@/Components/ui/progress";

const RatingBar = ({ category, score }) => {
  return (
    <div className="mb-4 w-full">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium">{category}</label>
        <span className="text-sm font-semibold">{score.toFixed(1)}</span>
      </div>
      <Progress value={score * 10} className="h-2" />
    </div>
  );
};

export default RatingBar;
