// components/AdditionalSection.js
import React from 'react';

const AdditionalSection = () => {
  return (
    <div className="w-full">
      {/* Top Navigation Links */}
      <div className="flex space-x-8 bg-gray-100 py-4 px-8">
    <a
      href="#peace-of-mind"
      className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
    >
      List with peace of mind
    </a>
    <a
      href="#stand-out"
      className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
    >
      Stand out from the start
    </a>
    <a
      href="#global-base"
      className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
    >
      Reach a unique and global customer base
    </a>
    <a
      href="#what-hosts-say"
      className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
    >
      What hosts like you say
    </a>
    <a
      href="#questions-answered"
      className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
    >
      Your questions answered
    </a>
  </div>

      {/* Main Content Section */}
      <div id="peace-of-mind" className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-black">List with peace of mind</h2>
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6 text-gray-800"> {/* Change the text color to gray-800 */}
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-green-600">✔️</span>
              <div>
                <h3 className="font-semibold text-black">Damage payments</h3> {/* Change header text to black */}
                <p>Our <a href="#" className="text-blue-600 hover:underline">damage program</a> covers your property in case of damages.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-green-600">✔️</span>
              <div>
                <h3 className="font-semibold text-black">Your own house rules</h3>
                <p>Communicate your house rules to potential guests who must agree in order to book.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-green-600">✔️</span>
              <div>
                <h3 className="font-semibold text-black">Choose how you prefer to receive bookings</h3>
                <p>Either by letting guests book instantly or by <a href="#" className="text-blue-600 hover:underline">reviewing booking requests</a> before accepting them.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-green-600">✔️</span>
              <div>
                <h3 className="font-semibold text-black">Protection from liability claims</h3>
                <p>Receive <a href="#" className="text-blue-600 hover:underline">protection against liability claims</a> from guests and neighbors.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-gray-800"> {/* Change the text color to gray-800 */}
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-green-600">✔️</span>
              <div>
                <h3 className="font-semibold text-black">Get paid consistently and securely</h3>
                <p>Get guaranteed payouts and fraud protection through <a href="#" className="text-blue-600 hover:underline">Payments by Booking.com</a>.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-green-600">✔️</span>
              <div>
                <h3 className="font-semibold text-black">Verified guests</h3>
                <p>We verify guests' email addresses and credit cards for partners on Payments by Booking.com.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-green-600">✔️</span>
              <div>
                <h3 className="font-semibold text-black">Robust support</h3>
                <p>Access support in 45 languages and manage your property through Pulse, our app for partners like you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSection;
