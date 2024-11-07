import React from "react";

const FeatureItem = ({ Icon, title, description }) => {
  return (
    <div className="flex justify-center ">
      <div className="me-2 ">
        <Icon className="w-7 h-7 text-green-600 mb-4" />
      </div>
      <div className="flex flex-col ">
        <h3 className="text-sm font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
