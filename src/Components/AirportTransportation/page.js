// components/AirportTransportation.js

import Image from 'next/image';
import Booking from "@/Public/Booking.png";
import Meeting from "@/Public/Meeting.svg";
import Arriving from "@/Public/Arriving.svg";
import How from "@/Public/How.png";


const AirportTransportation = () => {
  const leftItems = [
    {
     img:Booking
   
    ,
      title: 'Booking your airport taxi',
      description: 'Confirmation is immediate. If your plans change, you can cancel for free up to 24 hours before your scheduled pickup time',
    },

    {
      img: Meeting,
      title: 'Meeting your driver',
      description: 'You’ll be met on arrival and taken to your vehicle. The driver will track your flight, so they’ll be waiting if it’s delayed',
    },
    {
      img: Arriving,
      title: 'Arriving at your destination',
      description: 'Get to your destination quickly and safely – no long lines for a taxi, no navigating public transit',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-12 px-6 lg:px-20">
      {/* Left Section */}
      <div className="space-y-8 lg:w-1/2">
        {leftItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex justify-center items-center">
              <Image src={item.img} alt={item.title} width={48} height={48} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center items-center relative">
        <Image src={How} alt="How it works" width={400} height={400} className="object-contain" />
      </div>
    </div>
  );
};

export default AirportTransportation;
