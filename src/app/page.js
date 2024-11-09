"use client";
import Footer from "@/Components/Footer/Footer";
import Heading from "@/Components/Headings/Heading";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import SeizeTheMoment from "@/Public/SeizeMoment.jpeg";
import GoForAGoodTime from "@/Public/GoodTime.jpeg";
import EgyptFlag from "@/Public/Egypt.png";
import ExploreCard from "@/Components/Cards/ExploreCard";
import { Egypt, locations } from "@/Static/Arrays";
import { PropertyType } from "@/Static/Arrays";
import Browse from "@/Components/Cards/Browse";
import Nav from "@/Components/Navbar/Nav";
import People from "@/Public/People.webp";
import Japan from "@/Public/Japan.webp";
import Asia from "@/Public/Asia.webp";
import Properties from "@/Components/Cards/properties";
import Destination from "@/Components/Navbar/Destination";
import Animated from "@/Components/divs/animated";
import { imageMap } from "@/Static/images";
import { BrowseImagesMap } from "@/Static/images";
import EndLinks from "@/Components/Footer/endLinks";
import Main from "@/Components/divs/Main";
import Places from "@/Components/divs/places";
import SearchBar from "@/Components/searchBar/searchBar";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import React, { useContext } from "react";
import { FavoritesContext } from "@/Context/favoritesContext";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import { GetHotelReviews } from "@/API/GET";
import { destinationData } from "@/Static/destinationData";
import { navigationCategories } from "@/Static/navigationData";

export default function Home() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("HomePage");
  const [activeDestinationType, setActiveDestinationType] = useState("Regions");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("Cities in Egypt");
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [activeCategory, setActiveCategory] = useState("beach");

  const NextArrow = ({ onClick }) => (
    <button
      className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-600" />
    </button>
  );

  const PrevArrow = ({ onClick, currentSlide }) => {
    if (currentSlide === 0) return null;

    return (
      <button
        className="hidden md:block absolute -left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        onClick={onClick}
      >
        <FaChevronLeft className="text-gray-600" />
      </button>
    );
  };

  const createSliderSettings = (slidesToShow) => ({
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, slidesToShow),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  const exploreSliderSettings = createSliderSettings(6);
  const propertyTypeSliderSettings = createSliderSettings(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hostsResponse = await fetch("http://localhost:3000/host");
        if (!hostsResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const hostsData = await hostsResponse.json();

        const hostsWithReviews = await Promise.all(
          hostsData.map(async (host) => {
            const reviewsData = await GetHotelReviews(host._id);
            console.log("reviewsData", reviewsData);
            return {
              ...host,
              reviews: reviewsData,
            };
          })
        );

        setData(hostsWithReviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [favorites]);

  if (loading) {
    return <Loading />;
  }

  const uniqueDestinations = Array.from(
    new Set(data?.map((destination) => destination.location.city.en))
  ).map((name) =>
    data.find((destination) => destination.location.city.en === name)
  );
  console.log(data);

  const getFilteredDestinations = () => {
    const category = navigationCategories.find(
      (cat) => cat.id === activeCategory
    );
    return category ? category.destinations : [];
  };

  return (
    <>
      <Navbar />
      <Header />
      <Main title={t("title")} description={t("description")} />
      <div className=" -mt-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
        <SearchBar />
      </div>
      {/* offers section */}
      <section className="py-8 sm:py-20 hidden lg:block">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
          <Heading title={t("offers")} description={t("offersDescription")} />
        </div>
        <div className="flex space-x-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {/* Left card */}
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2"
            style={{
              backgroundImage: `url(${SeizeTheMoment.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-6">
              <h2 className="text-xl text-white font-bold mb-2">
                {t("seizeTheMoment")}
              </h2>
              <p className="text-white mb-4 text-sm">{t("save15")}</p>
              <button
                href="#"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-semibold"
              >
                {t("findGetawayDeals")}
              </button>
            </div>
          </div>

          {/* Right card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2 flex justify-between">
            <div className="p-6 ">
              <h2 className="text-xl font-bold mb-2">{t("goForAGoodTime")}</h2>
              <p className="text-gray-700 mb-4 text-sm">{t("save15")}</p>
              <button
                href="#"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-semibold"
              >
                {t("findLateEscapeDeals")}
              </button>
            </div>
            <div className="flex justify-center items-center pe-5">
              <Image
                src={GoForAGoodTime}
                alt="Go for a good time"
                className="rounded-lg"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>
      {/* destinations section */}
      <section className="py-8 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title={t("trendingDestinations")}
            description={t("travellersSearchingForEgyptAlsoBookedThese")}
          />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {/* <!-- Luxor Card --> */}
          <div
            className="relative overflow-hidden rounded-lg shadow-lg w-full h-64 destination-card cursor-pointer"
            style={{
              backgroundImage: `url(${imageMap.Luxor.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => {
              router.push(`/searchResults?location=Luxor`);
            }}
          >
            <div className="absolute top-0 left-0 text-white p-3 text-2xl z-10 flex items-center">
              <h3 className="font-bold text-stroke">{t("luxor")}</h3>
              <Image
                src={EgyptFlag}
                alt="Egypt Flag"
                className=" ms-2"
                width={24}
                height={24}
              />
            </div>
          </div>
          {/* <!-- Cairo Card --> */}
          <div
            className="relative overflow-hidden rounded-lg shadow-lg w-full h-64 destination-card cursor-pointer"
            style={{
              backgroundImage: `url(${imageMap.Cairo.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => {
              router.push(`/searchResults?destination=Cairo`);
            }}
          >
            <div className="absolute top-0 left-0 text-white p-3 text-2xl z-10 flex items-center">
              <h3 className="font-bold text-stroke">{t("cairo")}</h3>
              <Image
                src={EgyptFlag}
                alt="Egypt Flag"
                className=" ms-2"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <div
            className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full h-64 destination-card cursor-pointer"
            style={{
              backgroundImage: `url(${imageMap.Aswan.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => {
              router.push(`/searchResults?destination=Aswan`);
            }}
          >
            <div className="absolute top-0 left-0 w-full p-3 z-10 flex items-center">
              <h3 className="font-bold text-white text-2xl text-stroke">
                {t("aswan")}
              </h3>
              <Image
                src={EgyptFlag}
                alt="Egypt Flag"
                className=" ms-2"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div
            className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full h-64 destination-card cursor-pointer"
            style={{
              backgroundImage: `url(${imageMap.Hurghada.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => {
              router.push(`/searchResults?destination=Hurghada`);
            }}
          >
            <div className="absolute top-0 left-0 w-full p-3 z-10 flex items-center">
              <h3 className="font-bold text-white text-2xl text-stroke">
                {t("hurghada")}
              </h3>
              <Image
                src={EgyptFlag}
                alt="Egypt Flag"
                className=" ms-2"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div
            className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full h-64 destination-card cursor-pointer"
            style={{
              backgroundImage: `url(${imageMap["Sharm el-Sheikh"].src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => {
              router.push(`/searchResults?destination=Sharm el-Sheikh`);
            }}
          >
            <div className="absolute top-0 left-0 w-full p-3 z-10 flex items-center">
              <h3 className="font-bold text-white text-2xl text-stroke">
                {t("sharmElSheikh")}
              </h3>
              <Image
                src={EgyptFlag}
                alt="Egypt Flag"
                className=" ms-2"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </section>
      {/* explore section */}
      <section className="py-1 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title={t("exploreEgypt")}
            description={t("thesePopularDestinationsHaveALotToOffer")}
          />
        </div>

        <div className="mt-8 px-4 xl:mx-48">
          <Slider {...exploreSliderSettings}>
            {Egypt.map((destination) => (
              <div key={destination.name} className="px-2">
                <ExploreCard
                  src={imageMap[destination.name]}
                  title={destination.name}
                  onClick={() => {
                    router.push(
                      `/searchResults?destination=${destination.name}`
                    );
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* browse by property type section */}
      <section className="py-8 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title={t("browseByPropertyType")} />
        </div>
        <div className="mt-8 px-4 xl:mx-48">
          <Slider {...propertyTypeSliderSettings}>
            {PropertyType?.map((Property) => (
              <div key={Property.name} className="px-2">
                <Browse
                  src={BrowseImagesMap[Property.name]}
                  title={Property.name}
                  description={
                    Property.name === "Hotels"
                      ? data?.length + " properties"
                      : "Coming soon"
                  }
                  handleClick={() => {
                    if (Property.name === "Hotels") {
                      router.push(`/searchResults`);
                    } else {
                      router.push(`/comingSoon`);
                    }
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* planner section */}
      <section className="py-8 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title={t("quickAndEasyTripPlanner")}
            description={t("pickAVibeAndExploreTheTopDestinationsInEgypt")}
          />
        </div>
        <div className="mt-8 flex space-x-4 overflow-x-auto custom-scrollbar xl:mx-48">
          {navigationCategories.map((category) => (
            <Nav
              key={category.id}
              icon={category.icon}
              text={category.text}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {getFilteredDestinations().map((destination) => (
            <ExploreCard
              key={destination}
              src={imageMap[destination]}
              title={destination}
              onClick={() => {
                router.push(`/searchResults?destination=${destination}`);
              }}
            />
          ))}
        </div>
      </section>

      {/* inspiration section */}
      <section className="py-1 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title={t("getInspirationForYourNextTrip")} />
        </div>
        <div className="flex flex-col lg:flex-row space-y-4 mt-4 lg:space-y-0 lg:space-x-4 rtl:lg:space-x-reverse px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {/* Large Card */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
            <div
              className="relative h-full w-full transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${People.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
                <h3 className="font-bold text-lg">
                  {t("newYearsEveInNewYorkCity")}
                </h3>
                <p className="text-sm mt-2">
                  {t(
                    "ringInTheNewYearWithIconicMomentsAndUnforgettableMemoriesInNewYorkCity"
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Small Cards */}
          <div className="flex flex-col sm:flex-row lg:w-1/2 space-y-4 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse">
            {/* First Card */}
            <div className="w-full sm:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <Image
                  className="object-cover rounded-lg w-full h-48 sm:h-40 lg:h-60"
                  src={Japan.src}
                  alt="Ryokan in Japan"
                  width={265}
                  height={240}
                />
                <div className="pt-4">
                  <h3 className="font-bold text-base">
                    {t("6BestRyokansInJapanToRejuvenateYourself")}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {t("discoverUnmissableRyokansToRelaxAndUnwindInStyle")}
                  </p>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="w-full sm:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <Image
                  className="object-cover rounded-lg w-full h-48 sm:h-40 lg:h-60"
                  src={Asia.src}
                  alt="Asia Christmas"
                  width={265}
                  height={240}
                />
                <div className="pt-4">
                  <h3 className="font-bold text-base">
                    {t("7BestPlacesInAsiaToCelebrateChristmas")}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {t(
                      "discoverTheShimmeringLightsAndFestiveSightsOfAsiaSHolidaySeason"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* properties section */}
      <section className="py-1 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title={t("stayAtOurTopUniqueProperties")}
            description={t("fromCastlesAndVillasToBoatsAndIgloosWeveGotItAll")}
          />
        </div>

        <div className="mt-8 px-4 xl:mx-48">
          <Slider {...propertyTypeSliderSettings}>
            {data?.map((property, index) => (
              <div key={index} className="px-2">
                <Properties
                  id={property._id}
                  imageSrc={property.images[3]}
                  title={property.name[locale]}
                  location={property.location.city[locale]}
                  nights={property.HouseRules.PricePerNight}
                  toggleFavorite={() => toggleFavorite(property)}
                  reviews={property.AverageRating}
                  reviewsCount={
                    property?.reviews?.length > 0
                      ? property?.reviews?.length
                      : "0"
                  }
                  isFavorite={favorites.some((fav) => fav._id === property._id)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Travel section */}
      <section className="py-4 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title={t("travelMoreSpendLess")} />
        </div>
        <div className="mt-8 flex space-x-4 overflow-x-auto custom-scrollbar px-4 xl:mx-48">
          <Animated />
        </div>
      </section>

      <section className="py-1 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title={t("destinationsWeLove")} />
        </div>
        <div className="mt-8 flex space-x-4 overflow-x-auto custom-scrollbar xl:mx-48">
          {Object.keys(destinationData).map((type) => (
            <Destination
              key={type}
              text={type}
              isActive={activeDestinationType === type}
              onClick={() => setActiveDestinationType(type)}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 pt-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {destinationData[activeDestinationType].map((location, index) => (
            <Places
              key={index}
              name={location.name}
              propertyCount={location.propertyCount}
            />
          ))}
        </div>
      </section>
      <EndLinks />
      <Footer />
    </>
  );
}
