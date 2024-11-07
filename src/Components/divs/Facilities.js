import React from "react";
import { sections } from "@/Static/dataAmenities";
import { IoCheckmark } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { BsTv } from "react-icons/bs";
import { RiRestaurantLine } from "react-icons/ri";
import { LiaConciergeBellSolid } from "react-icons/lia";
import { PiFlowerTulip } from "react-icons/pi";
import { RiWheelchairLine } from "react-icons/ri";
import { GiGolfFlag } from "react-icons/gi";

const AmenityIcon = ({ name }) => {
  const icons = {
    bed: IoBedOutline,
    bath: LiaBathSolid,
    tv: BsTv,
    restaurant: RiRestaurantLine,
    concierge: LiaConciergeBellSolid,
    sun: PiFlowerTulip,
    accessibility: RiWheelchairLine,
    activity: GiGolfFlag,
  };
  const Icon = icons[name] || (() => null);
  return <Icon className="w-5 h-5 mx-2" />;
};

const AmenityItem = ({ text }) => (
  <div className="flex items-center mb-2">
    <IoCheckmark className="w-4 h-4 mx-2" />
    <span className="text-sm">{text}</span>
  </div>
);

const HotelAmenities = ({ amenities }) => {
  if (!amenities || amenities.length === 0) return null;

  const getNestedValue = (obj, path) => {
    const [category, key] = path.split(".");
    return obj[0][category] && obj[0][category][key];
  };

  return (
    <div className="hotel-amenities grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-6xl mx-auto">
      {sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-base font-semibold  flex items-center">
            <AmenityIcon name={section.icon} />
            {section.title}
          </h3>
          <div>
            {section.items.map((item, itemIndex) => {
              const value = getNestedValue(amenities, item.key);
              return value ? (
                <AmenityItem key={itemIndex} text={item.text} />
              ) : null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelAmenities;
