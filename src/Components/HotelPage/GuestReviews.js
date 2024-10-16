"use client";
import ReviewCard from "@/Components/Cards/ReviewCard";
import RatingBar from "@/Components/divs/RatingBar";
import { categories, reviews } from "@/Static/Arrays";
import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { GoPlus } from "react-icons/go";
import { GetHotelReviews } from "@/API/GET";
import { FaDotCircle } from "react-icons/fa";
import SubHeading from "../Headings/SubHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GuestReviews = ({ hotel }) => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const fetchReviews = async () => {
      const data = await GetHotelReviews(hotel._id);
      setReviews(data);
    };
    fetchReviews();
  }, []);
  function collectRatings(reviews) {
    return reviews?.map((review) => review.rating) || [];
  }

  const ratings = collectRatings(reviews);
  function calculateRatingCategory(ratings) {
    if (!ratings || ratings.length === 0) return 0;
    const totalScore = ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = totalScore / ratings.length;
    return averageRating;
  }
  const ratingCategory = calculateRatingCategory(ratings);
  function getRatingCategory(rating) {
    if (rating >= 8) return "Excellent";
    if (rating >= 7) return "Very good";
    if (rating >= 6) return "Good";
    if (rating >= 5) return "Average";
    return "Poor";
  }

  function getCategoryAverages(reviews) {
    if (!reviews || reviews.length === 0) return [];

    const categoryTotals = {};
    const categoryCounts = {};

    reviews.forEach((review) => {
      Object.entries(review.categories).forEach(([category, rating]) => {
        if (rating !== null && rating !== undefined) {
          categoryTotals[category] = (categoryTotals[category] || 0) + rating;
          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        }
      });
    });

    return Object.entries(categoryTotals).map(([category, total]) => ({
      category,
      average: total / categoryCounts[category],
    }));
  }

  const categoryAverages = getCategoryAverages(reviews);

  const [sliderRef, setSliderRef] = useState(null);

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-600" />
    </button>
  );

  const PrevArrow = ({ onClick, currentSlide }) => (
    <button
      className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 ${
        currentSlide === 0 ? "hidden" : ""
      }`}
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-600" />
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <SubHeading title="Guest reviews" />

      <div className="py-2 flex items-center gap-2 mb-4">
        <span className="text-sm px-2 py-2 font-bold mr-2 bg-blue-900 text-white rounded">
          {ratingCategory}
        </span>
        <h2 className="font-semibold text-base text-black">
          {getRatingCategory(ratingCategory)}
        </h2>
        <div className="text-sm font-semibold text-[#595959]">
          {reviews?.length} reviews{" "}
          <a href="#" className=" text-blue-600 text-xs">
            Read all reviews
          </a>
        </div>
      </div>

      <h3 className="font-bold mb-2 text-base">Categories:</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {categoryAverages.map(({ category, average }) => (
          <RatingBar key={category} category={category} score={average} />
        ))}
      </div>

      <h3 className="font-bold mb-2">Select topics to read reviews:</h3>
      <div className="flex space-x-2 mb-6">
        {["Breakfast", "Lunch", "Dinner"].map((topic, index) => (
          <button
            key={index}
            className="border rounded-full px-3 py-1 flex items-center text-sm font-semibold"
          >
            <GoPlus size={16} className="mr-1 " /> {topic}
          </button>
        ))}
      </div>

      <h3 className="font-bold mb-4">Guests who stayed here loved</h3>
      {reviews && reviews.length > 0 && (
        <div className="mb-6 relative">
          {reviews.length > 3 ? (
            <Slider ref={setSliderRef} {...sliderSettings}>
              {reviews.map((review, index) => (
                <div key={index} className="px-2">
                  <ReviewCard review={review} />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          )}
        </div>
      )}

      <button className="border border-blue-600 text-blue-600 px-3 py-2 rounded text-sm font-semibold">
        Read all reviews
      </button>

      <div className="mt-6 p-4 border-2 border-grey-600  rounded-lg ">
        <div className="flex items-center justify-start">
          <h3 className="font-bold  mb-2 text-xl">Quality rating</h3>
          <Rating
            value={hotel?.AverageRating}
            readOnly
            precision={0.5}
            className="ms-2"
            size="small"
            icon={<FaDotCircle size={16} className="text-yellow-500" />}
            emptyIcon={<FaDotCircle size={16} className="text-grey-500" />}
          />
        </div>
        <div>
          <span className="text-sm ">
            Booking.com rated the quality of this property as{" "}
            {hotel?.AverageRating} out of 5 based on factors like facilities,
            size, location, and service.
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuestReviews;
