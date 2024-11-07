// components/TaxiSelector.js
"use client"
import { useState } from "react";
import { FaUser, FaSuitcase } from "react-icons/fa";

export default function TaxiSelector() {
  const [selected, setSelected] = useState("1-3");

  const cardsData = {
    "1-3": [
      {
        type: "Standard",
        description: "Volkswagen Jetta or similar",
        passengers: 3,
        bags: 2,
        meetGreet: true,
        freeCancellation: true,
      },
      {
        type: "Full-size sedan",
        description: "Mercedes-Benz E-Class or similar",
        passengers: 3,
        bags: 2,
        meetGreet: true,
        freeCancellation: true,
      },
    ],
    "4-7": [
      {
        type: "Van",
        description: "Honda CR-V or similar",
        passengers: 5,
        bags: 5,
        meetGreet: true,
        freeCancellation: true,
      },
      {
        type: "Full-size van",
        description: "Mercedes-Benz V-Class or similar",
        passengers: 6,
        bags: 6,
        meetGreet: true,
        freeCancellation: true,
      },
      {
        type: "Large van",
        description: "Mercedes-Benz Sprinter or similar",
        passengers: 7,
        bags: 7,
        meetGreet: true,
        freeCancellation: true,
      },
    ],
    "all": [],
  };

  cardsData.all = [...cardsData["1-3"], ...cardsData["4-7"]];

  const renderCard = (card, index, isWide = false) => (
    <div
      key={index}
      className={`bg-white p-4 rounded-lg shadow-md border border-gray-200 ${
        isWide ? 'w-[calc(33.33%-1rem)]' : 'w-full max-w-xs'
      }`}
    >
      <h3 className="font-bold text-lg">{card.type}</h3>
      <p className="text-gray-500">{card.description}</p>
      <div className="flex items-center gap-2 mt-4">
        <FaUser />
        <span>{card.passengers} passengers</span>
      </div>
      <div className="flex items-center gap-2">
        <FaSuitcase />
        <span>{card.bags} standard bags</span>
      </div>
      <p className="text-blue-600 mt-4">
        {card.meetGreet && "Meet & Greet included"}
      </p>
      <p className="text-green-600">{card.freeCancellation && "Free cancellation"}</p>
      <div className="flex justify-start mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Search
        </button>
      </div>
    </div>
  );

  const renderCards = () => {
    const cards = cardsData[selected];
    return (
      <div className="flex gap-6 justify-start flex-wrap w-full max-w-6xl">
        {cards.map((card, index) => renderCard(card, index, selected !== "1-3"))}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-center text-2xl font-bold mb-8">
        Airport taxis for any kind of trip
      </h2>
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-start mb-6">
          {["1-3", "4-7", "all"].map((item) => (
            <button
              key={item}
              className={`px-4 py-2 border ${
                selected === item ? "bg-blue-600 text-white" : "bg-white text-blue-600"
              } border-blue-600 focus:outline-none`}
              onClick={() => setSelected(item)}
            >
              {item === "1-3"
                ? "1 - 3 passengers"
                : item === "4-7"
                ? "4 - 7 passengers"
                : "All taxis"}
            </button>
          ))}
        </div>

        {renderCards()}
      </div>
    </div>
  );
}