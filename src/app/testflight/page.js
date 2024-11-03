"use client";
import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon, BoltIcon } from '@heroicons/react/24/outline';

const airlines = [
  { name: 'Air Arabia', price: 186 },
  { name: 'Air Cairo', price: 162 },
  { name: 'Egyptair only', price: 137 },
  { name: 'Emirates', price: null },
  { name: 'Ethiopian Air', price: null },
  { name: 'Etihad Airways', price: null },
  { name: 'flyadeal', price: 201 },
  { name: 'flynas', price: 209 },
  { name: 'Gulf Air', price: 475 },
  { name: 'Hahn Air', price: 354 },
  { name: 'Jazeera Airways', price: 212 },
  { name: 'Kuwait Airways', price: 379 },
  { name: 'MEA', price: 527 },
  { name: 'Nesma Airlines', price: 166 },
  { name: 'Nile Air', price: 221 },
  { name: 'Oman Air', price: null },
  { name: 'Qatar Airways', price: 815 },
  { name: 'Royal Jordanian', price: 364 },
  { name: 'SAUDIA', price: 154 },
  { name: 'Turkish Airlines', price: 697 },
  { name: 'Multiple airlines', price: null },
];

const alliances = [
  { name: 'oneworld', price: 364 },
  { name: 'SkyTeam', price: 154 },
  { name: 'Star Alliance', price: 157 },
];

const FlightFilter = () => {
  const [isStopsOpen, setIsStopsOpen] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTimesOpen, setIsTimesOpen] = useState(false);
  const [bookingToggle, setBookingToggle] = useState(false);
  const [isAirlinesOpen, setIsAirlinesOpen] = useState(true);
  const [isAllianceOpen, setIsAllianceOpen] = useState(true);
  const [selectedAirlines, setSelectedAirlines] = useState(new Set(airlines.map(a => a.name)));
  const [selectedAlliances, setSelectedAlliances] = useState(new Set());

  const toggleAirline = (airlineName) => {
    setSelectedAirlines(prev => {
      const newSet = new Set(prev);
      if (newSet.has(airlineName)) {
        newSet.delete(airlineName);
      } else {
        newSet.add(airlineName);
      }
      return newSet;
    });
  };

  const toggleAlliance = (allianceName) => {
    setSelectedAlliances(prev => {
      const newSet = new Set(prev);
      if (newSet.has(allianceName)) {
        newSet.delete(allianceName);
      } else {
        newSet.add(allianceName);
      }
      return newSet;
    });
  };

  const selectAllAirlines = () => setSelectedAirlines(new Set(airlines.map(a => a.name)));
  const clearAllAirlines = () => setSelectedAirlines(new Set());

  return (
    <div>
      {/* Stops filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-left font-semibold"
          onClick={() => setIsStopsOpen(!isStopsOpen)}
        >
          Stops
          {isStopsOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isStopsOpen ? 'max-h-screen' : 'max-h-0'}`}>
          {isStopsOpen && (
            <div className="mt-2 space-y-2">
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2">Nonstop</span>
                </label>
                <span>$137</span>
              </div>
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2">1 stop</span>
                </label>
                <span>$158</span>
              </div>
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="ml-2">2+ stops</span>
                </label>
                <span>$602</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Booking.com filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-left font-semibold"
          onClick={() => setIsBookingOpen(!isBookingOpen)}
        >
          Book on Booking.com
          {isBookingOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isBookingOpen ? 'max-h-screen' : 'max-h-0'}`}>
          {isBookingOpen && (
            <div className="mt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BoltIcon className="w-5 h-5 text-yellow-400 mr-2 " />
                  <span className="text-sm">Show offers instantly bookable on Booking.com</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={bookingToggle}
                    onChange={() => setBookingToggle(!bookingToggle)}
                  />
                  <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600"></div>
                  <div className="w-5 h-5 bg-white border border-gray-300 rounded-full absolute top-[2px] left-[2px] peer-checked:translate-x-full peer-checked:bg-blue-600 transition-all"></div>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Times filter */}
      <div>
        <button
          className="flex justify-between items-center w-full text-left font-semibold"
          onClick={() => setIsTimesOpen(!isTimesOpen)}
        >
          Times
          {isTimesOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isTimesOpen ? 'max-h-screen' : 'max-h-0'}`}>
          {isTimesOpen && (
            <div className="mt-2 space-y-4">
              <div>
                <p className="text-sm">Take-off Cairo (CAI)</p>
                <div className="flex justify-between text-xs text-white-500">
                  <span>Fri 12:30 AM</span>
                  <span>11:30 PM</span>
                </div>
                <input type="range" min="0" max="100" className="w-full" />
              </div>
              <div>
                <p className="text-sm">Take-off Jeddah (JED)</p>
                <div className="flex justify-between text-xs text-white-500">
                  <span>Fri 12:00 AM</span>
                  <span>11:59 PM</span>
                </div>
                <input type="range" min="0" max="100" className="w-full" />
              </div>
              <div>
                <p className="text-sm">Landing Jeddah (JED)</p>
                <div className="flex justify-between text-xs text-white-500">
                  <span>Fri 2:30 AM</span>
                  <span>Sat 2:00 PM</span>
                </div>
                <input type="range" min="0" max="100" className="w-full" />
              </div>
              <div>
                <p className="text-sm">Landing Cairo (CAI)</p>
                <div className="flex justify-between text-xs text-white-500">
                  <span>Fri 1:30 AM</span>
                  <span>Sat 9:30 PM</span>
                </div>
                <input type="range" min="0" max="100" className="w-full" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-left font-semibold"
          onClick={() => setIsAirlinesOpen(!isAirlinesOpen)}
        >
          Airlines
          {isAirlinesOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isAirlinesOpen ? 'max-h-screen' : 'max-h-0'}`}>
          {isAirlinesOpen && (
            <div className="mt-2">
              <div className="flex justify-between text-sm text-blue-600 mb-2">
                <button onClick={selectAllAirlines}>Select all</button>
                <button onClick={clearAllAirlines}>Clear all</button>
              </div>
              {airlines.map((airline) => (
                <div key={airline.name} className="flex justify-between items-center mb-1">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={selectedAirlines.has(airline.name)}
                      onChange={() => toggleAirline(airline.name)}
                    />
                    <span className="ml-2 text-sm">{airline.name}</span>
                  </label>
                  {airline.price && <span className="text-sm">${airline.price}</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <button
          className="flex justify-between items-center w-full text-left font-semibold"
          onClick={() => setIsAllianceOpen(!isAllianceOpen)}
        >
          Alliance
          {isAllianceOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isAllianceOpen ? 'max-h-screen' : 'max-h-0'}`}>
          {isAllianceOpen && (
            <div className="mt-2">
              {alliances.map((alliance) => (
                <div key={alliance.name} className="flex justify-between items-center mb-1">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={selectedAlliances.has(alliance.name)}
                      onChange={() => toggleAlliance(alliance.name)}
                    />
                    <span className="ml-2 text-sm">{alliance.name}</span>
                  </label>
                  <span className="text-sm">${alliance.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightFilter;