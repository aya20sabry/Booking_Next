"use client";
import ComponantFlight from './../../components/flight/flight';


export default function Flights() {

  return (
    <div
    className="items-center pt-20 bg-custom-bg mb-20 h-lvh"
    style={{ textAlign: "left" }}
  >
    <h1 className="font-semibold text-gray-800 pl-56 mb-28 text-2xl font-custome">
      Search hundreds of flight sites at once.
    </h1>

<ComponantFlight/>
   
    </div>
       

  );
}
