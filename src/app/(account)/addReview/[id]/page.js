"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Rating } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { PostReview } from "@/API/create";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
function AddReview() {
  const router = useRouter();
  const { id } = useParams();
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    rating: 0,
    comment: {
      en: "",
      ar: "",
    },
    categories: {
      Staff: 0,
      Location: 0,
      Facilities: 0,
      Services: 0,
      Comfort: 0,
      Cleanliness: 0,
      View: 0,
      Food: 0,
      Price: 0,
      Room: 0,
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded.id);
      setUserId(decoded.id);
      console.log(decoded.id);
    }
  }, []);

  const handleCategoryChange = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const doubledRatings = {
        ...formData,
        rating: formData.rating * 2,
        categories: Object.entries(formData.categories).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: value * 2,
          }),
          {}
        ),
      };

      const reviewData = {
        ...doubledRatings,
        hotelId: id,
        userId: userId,
      };

      await PostReview(reviewData, id);
      toast.success("Review submitted successfully");
      router.push(`/hotel?id=${id}`);
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review");
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto p-6 border rounded-lg shadow-md bg-white">
        <h1 className="text-2xl font-bold mb-6">Add Your Review</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">Overall Rating</label>
            <Rating
              value={formData.rating}
              onChange={(_, value) =>
                setFormData((prev) => ({ ...prev, rating: value }))
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block mb-2">Comment (English)</label>
              <textarea
                value={formData.comment.en}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    comment: { ...prev.comment, en: e.target.value },
                  }))
                }
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block mb-2">Comment (Arabic)</label>
              <textarea
                value={formData.comment.ar}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    comment: { ...prev.comment, ar: e.target.value },
                  }))
                }
                className="w-full p-2 border rounded"
                dir="rtl"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Category Ratings</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {Object.keys(formData.categories).map((category) => (
                <div key={category}>
                  <label className="block mb-1">{category}</label>
                  <Rating
                    value={formData.categories[category]}
                    onChange={(_, value) =>
                      handleCategoryChange(category, value)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 self-end"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddReview;
