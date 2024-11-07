import Image from "next/image";

const Footertaxi = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* First Row: Single Link */}
      <div className="flex justify-center border-b border-white py-2 px-4">
        <a
          href="#"
          className="bg-blue-900 text-white px-4 py-2 rounded border border-white hover:bg-blue-800 transition duration-300"
        >
          List your property
        </a>
      </div>

      {/* Second Row: Group of Links */}
      <div className="flex justify-center space-x-4 py-4 text-sm font-bold text-white">
        <a href="#" className="underline decoration-2 underline-offset-4 ">
          Mobile version
        </a>
        <a href="#" className="underline decoration-2 underline-offset-4 ">
          Your account
        </a>
        <a href="#" className="underline decoration-2 underline-offset-4 ">
          Make changes online to your booking
        </a>
        <a href="#" className="underline decoration-2 underline-offset-4 ">
          Customer Service Help
        </a>
        <a href="#" className="underline decoration-2 underline-offset-4 ">
          Become an affiliate
        </a>
        <a href="#" className="underline decoration-2 underline-offset-4 ">
          Booking.com for Business
        </a>
      </div>

      {/* Third Row: Links with Blue Text */}
      <div className="bg-white text-blue-500 py-6 px-4">
        <div className="grid grid-cols-6 gap-4 max-w-6xl mx-auto">
          <div>
            <a href="#" className="block hover:underline">
              Countries
            </a>
            <a href="#" className="block hover:underline">
              Regions
            </a>
            <a href="#" className="block hover:underline">
              Cities
            </a>
            <a href="#" className="block hover:underline">
              Districts
            </a>
            <a href="#" className="block hover:underline">
              Airports
            </a>
            <a href="#" className="block hover:underline">
              Hotels
            </a>
            <a href="#" className="block hover:underline">
              Places of interest
            </a>
          </div>
          <div>
            <a href="#" className="block hover:underline">
              Homes
            </a>
            <a href="#" className="block hover:underline">
              Apartments
            </a>
            <a href="#" className="block hover:underline">
              Resorts
            </a>
            <a href="#" className="block hover:underline">
              Villas
            </a>
            <a href="#" className="block hover:underline">
              Hostels
            </a>
            <a href="#" className="block hover:underline">
              B&Bs
            </a>
            <a href="#" className="block hover:underline">
              Guest houses
            </a>
          </div>
          <div>
            <a href="#" className="block hover:underline">
              Unique places to stay
            </a>
            <a href="#" className="block hover:underline">
              Reviews
            </a>
            <a href="#" className="block hover:underline">
              Discover monthly stays
            </a>
            <a href="#" className="block hover:underline">
              Travel articles
            </a>
            <a href="#" className="block hover:underline">
              Seasonal and holiday deals
            </a>
            <a href="#" className="block hover:underline">
              Traveller Review Awards
            </a>
          </div>
          <div>
            <a href="#" className="block hover:underline">
              Car rental
            </a>
            <a href="#" className="block hover:underline">
              Flight finder
            </a>
            <a href="#" className="block hover:underline">
              Restaurant reservations
            </a>
            <a href="#" className="block hover:underline">
              Booking.com for Travel Agents
            </a>
          </div>
          <div className="col-span-2">
            <a href="#" className="block hover:underline">
              Coronavirus (COVID-19) FAQs
            </a>
            <a href="#" className="block hover:underline">
              About Booking.com
            </a>
            <a href="#" className="block hover:underline">
              Customer Service Help
            </a>
            <a href="#" className="block hover:underline">
              Partner help
            </a>
            <a href="#" className="block hover:underline">
              Careers
            </a>
            <a href="#" className="block hover:underline">
              Sustainability
            </a>
            <a href="#" className="block hover:underline">
              Press Center
            </a>
            <a href="#" className="block hover:underline">
              Safety Resource Center
            </a>
            <a href="#" className="block hover:underline">
              Investor relations
            </a>
            <a href="#" className="block hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="block hover:underline">
              Partner dispute
            </a>
            <a href="#" className="block hover:underline">
              How We Work
            </a>
            <a href="#" className="block hover:underline">
              Privacy & cookie statement
            </a>
            <a href="#" className="block hover:underline">
              Modern Slavery Statement
            </a>
            <a href="#" className="block hover:underline">
              Human Rights Statement
            </a>
            <a href="#" className="block hover:underline">
              Corporate contact
            </a>
            <a href="#" className="block hover:underline">
              Content guidelines and reporting
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footertaxi;
