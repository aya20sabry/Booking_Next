"use client";
import { GetHotelID } from "@/API/GET";
import SubHeading from "../Headings/SubHeading";
import { useState, useEffect } from "react";
function FinePrint({ hotel }) {

  return (
    <>
      <SubHeading
        title="Fine Print"
        description="Must-know information for guests at this property"
      />
      <div className="border border-[#E0E0E0] rounded-md p-4 w-full mt-6">
        <p className="text-sm">{hotel?.HouseRules?.Cancellation.Policy.en}</p>
      </div>
    </>
  );
}

export default FinePrint;
