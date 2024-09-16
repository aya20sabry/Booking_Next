import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import AgodaLogo from "@/app/Public/AgodaLogo.svg";
import PriceLogo from "@/app/Public/PriceLogo.svg";
import KayakLogo from "@/app/Public/KayakLogo.svg";
import OpenLogo from "@/app/Public/OpenLogo.svg";
import BookingLogo from "@/app/Public/BookingLogo.svg";
import Image from "next/image";

function Flights() {
  return (
    <>
      <Navbar />
      <Header />

      <footer className="text-black text-xs text-center border-t pt-4 w-full">
        <div className="flex justify-center items-center space-x-8 pb-10">
          <a href="" className="text-xs text-blue-500">
            Booking.com Privacy Policy
          </a>
          <a href="" className="text-xs text-blue-500">
            Booking.com Terms of Use
          </a>
          <a href="" className="text-xs text-blue-500">
            KAYAK Privacy Policy
          </a>
          <a href="" className="text-xs text-blue-500">
            KAYAK Terms of Use
          </a>
        </div>
        <p>
          Booking.com is part of Booking Holdings Inc., the world leader in
          online travel & related services.
        </p>

        <div className="mt-4 hidden md:flex justify-center items-center space-x-8">
          <Image src={BookingLogo} alt="Booking" width={92} height={28} />
          <Image src={KayakLogo} alt="Booking" width={89} height={28} />
          <Image src={OpenLogo} alt="Booking" width={98} height={24} />
          <Image src={PriceLogo} alt="Booking" width={92} height={24} />
          <Image src={AgodaLogo} alt="Booking" width={72} height={28} />
        </div>
      </footer>
    </>
  );
}

export default Flights;
