import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function Deals({
  imageSrc,
  title,
  location,
  rating,
  reviews,
  oldPrice,
  newPrice,
  nights,
}) {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <div className="w-full max-w-sm mx-auto rounded overflow-hidden shadow-lg flex flex-col h-full">
      <div className="relative w-full h-0 pb-[75%]">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={imageSrc}
          alt={title}
          layout="fill"
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h5 className="text-lg sm:text-xl font-bold mb-2">{title}</h5>
        <p className="text-gray-600 mb-2 text-sm">{location}</p>
        <div className="flex items-center mb-2">
          <span className="mainColor text-white text-xs font-bold rounded px-2 py-1">
            {rating}
          </span>
          <span className="ml-2 text-gray-500 text-sm">{reviews} reviews</span>
        </div>
      </div>
      <div className="text-gray-900 p-4 flex flex-wrap items-center justify-between mt-auto">
        <span className="text-gray-500 text-sm">{nights} nights</span>
        <div className="flex items-center space-x-2">
          <span className="line-through text-red-500 text-sm">
            EGP {oldPrice}
          </span>
          <span className="font-bold text-base sm:text-lg">EGP {newPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Deals;
