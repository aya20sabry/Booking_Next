"use client"

import Image from "next/image";



import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import Link from "next/link";

export default function List() {
  return (
    <div>
      <header className="bg-blue-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left side - Booking.com Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold">Booking.com</h1>
          </Link>

          {/* Right side - Partner info, Sign in, Help, Flag */}
          <div className="flex items-center space-x-4">
            {/* US Flag */}
            <div className="w-6 h-6 overflow-hidden">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="US flag"
                width={30}
                height={20}
              />
            </div>

            {/* Already a partner text */}
            <span className="text-sm">Already a partner?</span>

            {/* Sign in button */}
            <button className="border border-white py-1 px-3 rounded text-sm hover:bg-white hover:text-blue-900 transition-colors">
              Sign in
            </button>

            {/* Help button */}
            <button className="bg-blue-500 text-white py-1 px-3 rounded text-sm hover:bg-blue-600 transition-colors">
              Help
            </button>
          </div>
        </div>
      </header>

      {/* Modified hero section with flex layout */}
      <div className="flex justify-between items-center bg-blue-900 px-8 py-16">
        {/* Left side content */}
        <div className="text-left text-white max-w-md">
          <h1 className="text-4xl font-bold">
            List <span className="text-blue-500">anything</span> on Booking.com
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Whether hosting is your side passion or full-time job, list your home
            today and quickly start earning more income.
          </p>
        </div>

        {/* Right side card */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96 border-4 border-yellow-400">
          <h2 className="text-lg font-semibold mb-4">Register for free</h2>
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            <li className="flex items-start">
              <span className="mr-2">✔️</span>
              45% of hosts get their first booking within a week
            </li>
            <li className="flex items-start">
              <span className="mr-2">✔️</span>
              Choose between instant bookings and booking requests
            </li>
            <li className="flex items-start">
              <span className="mr-2">✔️</span>
              We handle payments for you
            </li>
          </ul>
          <Link href="/signlist">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition-colors">
              Get started now
            </button>
          </Link>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded mt-2 text-sm text-center">
            Free to list, pay only when you get bookings
          </div>
          <p className="mt-4 text-sm text-center">
            Already started registration?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Continue your registration
            </a>
          </p>
        </div>
      </div>

      <div className="w-full">
        {/* Navigation Links */}
        <div className="flex space-x-8 bg-gray-100 py-4 px-8">
          {['peace-of-mind', 'stand-out', 'global-base', 'what-hosts-say', 'questions-answered'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
            >
              {id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </a>
          ))}
        </div>
        {/* Peace of Mind Section */}
        <div id="peace-of-mind" className="py-16 px-8 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-black">
            List with peace of mind
          </h2>
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6 text-gray-800">
              <div className="flex items-start space-x-4">
                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-800">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>

                <div>
                  <h3 className="font-semibold text-black">Damage payments</h3>
                  <p>
                    Our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      damage program
                    </a>{" "}
                    covers your property in case of damages.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">Your own house rules</h3>
                  <p>
                    Communicate your house rules to potential guests who must
                    agree in order to book.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">
                    Choose how you prefer to receive bookings
                  </h3>
                  <p>
                    Either by letting guests book instantly or by{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      reviewing booking requests
                    </a>{" "}
                    before accepting them.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">
                    Protection from liability claims
                  </h3>
                  <p>
                    Receive{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      protection against liability claims
                    </a>{" "}
                    from guests and neighbors.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 text-gray-800">
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">
                    Get paid consistently and securely
                  </h3>
                  <p>
                    Get guaranteed payouts and fraud protection through{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Payments by Booking.com
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">Verified guests</h3>
                  <p>
                    We verify guests' email addresses and credit cards for partners on Payments by Booking.com.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">Robust support</h3>
                  <p>
                    Access support in 45 languages and manage your property
                    through Pulse, our app for partners like you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stand Out Section */}
        <section id="stand-out" className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-black">
              Stand out from the start
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              {/* Import your reviews */}
              <div className="flex flex-col items-center">
                <Image
                  src="/Review.png"
                  alt="Import your reviews"
                  width={80}
                  height={80}
                />
                <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">
                  Import your reviews
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-2 text-center max-w-md mx-auto">
                  We import your review score from other platforms and display it
                  on your Booking.com property page, so you don't start at zero
                  reviews.
                </p>
              </div>

              {/* Import your property details */}
              <div className="flex flex-col items-center">
                <Image
                  src="/Puzzle.png"
                  alt="Import your property details"
                  width={80}
                  height={50}
                />
                <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">
                  Import your property details
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-2 text-center max-w-md mx-auto">
                  Seamlessly import your property details and sync your
                  availability calendar with other platforms to make it easy to
                  list and avoid double-bookings.
                </p>
              </div>

              {/* Stand out in the market */}
              <div className="flex flex-col items-center">
                <Image
                  src="/Search.png"
                  alt="Stand out in the market"
                  width={80}
                  height={80}
                />
                <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">
                  Stand out in the market
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-2 text-center max-w-md mx-auto">
                  The "New to Booking.com" label helps you stand out in our search
                  results.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Global Base Section */}
        <div id="global-base" className="relative bg-gray-100 py-12 px-4 text-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: "url(/World.png)" }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/90"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Reach a unique global customer base
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24">
              {/* Stats */}
              <div>
                <p className="text-5xl font-bold text-gray-900">2/3</p>
                <p className="mt-2 text-gray-700">
                  of vacation rental guests return to book with us again
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold text-gray-900">48%</p>
                <p className="mt-2 text-gray-700">
                  of nights booked by travelers at the end of 2023 were for
                  international stays
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold text-gray-900">33%</p>
                <p className="mt-2 text-gray-700">
                  of vacation rental customers are at Genius Level 2 or 3. These
                  travelers tend to spend more and book directly on our platform.
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold text-gray-900">30%</p>
                <p className="mt-2 text-gray-700">
                  of all nights booked on our platform were at a vacation rental.
                  More travelers flex book both hotels and alternative
                  accommodations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Hosts Say Section */}
        <div id="what-hosts-say" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What hosts like you say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial Cards */}
              {[
                {
                  quote: "I was able to list within 15 minutes, and no more than two hours later, I had my first booking!",
                  image: "/Uk.jpg",
                  name: "Parley Rose",
                  title: "UK-based host"
                },
                {
                  quote: "Booking.com is the most straightforward platform to work with. Everything is clear, and it's easy.",
                  image: "/Ma.jpg",
                  name: "Martin Fieldman",
                  title: "Managing Director, Abodebed"
                },
                {
                  quote: "Booking.com accounts for our largest share of guests and has helped get us where we are today.",
                  image: "/Zo.jpg",
                  name: "Michel and Asja",
                  title: "Owners of La Maison de Souhey"
                },
                {
                  quote: "Travelers come to Charming Lofts from all over the world. Booking.com really helps with that.",
                  image: "/Ch.jpg",
                  name: "Louis Gonzalez",
                  title: "Charming Lofts, Los Angeles"
                },
                {
                  quote: "After joining Booking.com, my occupancy went up significantly.",
                  image: "/Ow.jpg",
                  name: "Zoey Berghoff",
                  title: "US-based host"
                },
                {
                  quote: "Getting started with Booking.com was super simple and took no time at all.",
                  image: "/Own.jpg",
                  name: "Shawn Ritzenthaler",
                  title: "Owner of The Hollywood Hills Mansion"
                }
              ].map((testimonial, index) => (
                <div key={index} className="p-6 bg-white border-2 border-yellow-500 rounded-lg hover:border-blue-500 shadow-lg transition-colors duration-300">
                  <p className="text-lg italic mb-4 font-sans text-[#1a1a1a]">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-900 hover:underline cursor-pointer">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Questions Answered Section */}
        <section id="questions-answered" className="w-full bg-white text-black py-8">
          <div className="px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Your questions answered</h2>

            <div className="flex space-x-8">
              <Accordion
                type="single"
                collapsible
                className="border-t border-b divide-y w-1/2"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    What happens if my property is damaged by a guest?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-gray-700 mt-2">
                      Property owners can request damage deposits from guests.
                      Deposits help cover any potential damage caused by a guest,
                      offering some reassurance that your property will be treated
                      respectfully. If anything goes wrong, it can be reported to
                      our team through our misconduct reporting feature.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion
                type="single"
                collapsible
                className="border-t border-b divide-y w-1/2"
              >
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    When will my property go online?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-gray-700 mt-2">
                      Your property will go online once the listing has been
                      reviewed and approved by our team. You'll receive a
                      notification when it is live.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <p className="text-base mt-6 text-gray-500">
              Still have questions? Find answers to all your questions in our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                FAQ
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

