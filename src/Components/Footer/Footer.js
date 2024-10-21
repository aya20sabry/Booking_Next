import Image from "next/image";
import ENFlag from "@/Public/ENFlag.png";
import AgodaLogo from "@/Public/AgodaLogo.svg";
import PriceLogo from "@/Public/PriceLogo.svg";
import KayakLogo from "@/Public/KayakLogo.svg";
import OpenLogo from "@/Public/OpenLogo.svg";
import BookingLogo from "@/Public/BookingLogo.svg";
import React from "react";
import {
  supportLinks,
  discoverLinks,
  termsLinks,
  partnerLinks,
  aboutLinks,
} from "@/Static/footer";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function Footer() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
      <footer className="bg-gray-100 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          {/* Mobile accordion layout */}
          <div className="grid grid-cols-1 gap-8 md:hidden">
            {[
              { title: "Support", links: supportLinks },
              { title: "Discover", links: discoverLinks },
              { title: "Terms and settings", links: termsLinks },
              { title: "Partners", links: partnerLinks },
              { title: "About", links: aboutLinks },
            ].map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <details className="group">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
                    <span>{section.title}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <ul className="text-sm mt-3 group-open:animate-fadeIn">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="py-1">
                        <a href="#" className="text-gray-600 hover:underline">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-sm">Support</h3>
              <ul className="space-y-2 text-sm">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm">Discover</h3>
              <ul className="space-y-2 text-sm">
                {discoverLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm">Terms and settings</h3>
              <ul className="space-y-2 text-sm">
                {termsLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm">Partners</h3>
              <ul className="space-y-2 text-sm">
                {partnerLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm">About</h3>
              <ul className="space-y-2 text-sm">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 flex flex-col items-center md:items-start ">
            <div className="flex  space-x-2 mb-4">
              <button className="hover:bg-gray-200 px-3 py-2 rounded ">
                <Image
                  src={ENFlag}
                  className="rounded-full"
                  alt="Language"
                  width={24}
                  height={24}
                />
              </button>
              <button className="hover:bg-gray-200 px-3 py-2 rounded">
                <span className="text-gray-600">EGP</span>
              </button>
            </div>
            <div className="text-gray-500 text-[10px] text-center border-t pt-4 w-full">
              <p>
                Booking.com is part of Booking Holdings Inc., the world leader
                in online travel and related services.
              </p>
              <p className="mt-2">
                Copyright © 1996–2024 Booking.com™. All rights reserved.
              </p>
              <div className="mt-4 hidden md:flex justify-center items-center space-x-8">
                <Image src={BookingLogo} alt="Booking" width={96} height={16} />
                <Image src={PriceLogo} alt="Booking" width={69} height={16} />
                <Image src={AgodaLogo} alt="Booking" width={40} height={16} />
                <Image src={KayakLogo} alt="Booking" width={84} height={16} />
                <Image src={OpenLogo} alt="Booking" width={69} height={16} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
