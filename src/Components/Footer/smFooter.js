import Image from "next/image";
import AgodaLogo from "@/Public/AgodaLogo.svg";
import PriceLogo from "@/Public/PriceLogo.svg";
import KayakLogo from "@/Public/KayakLogo.svg";
import OpenLogo from "@/Public/OpenLogo.svg";
import BookingLogo from "@/Public/BookingLogo.svg";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function SmFooter() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
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

export default SmFooter;
