"use client";

import { useState } from "react";

import * as React from "react";
import Image from "next/image";
import "./page.css";
import giza from "@/Public/car/giza.jpg";
import giza8 from "@/public/car/giza8.jpg";
import hurghada from "@/public/car/hurghada.jpg";
import alex from "@/public/car/alex.jpg";
import phot33 from "@/public/car/phot33.png";
import phot333 from "@/public/car/phot333.png";
import phot3333 from "@/public/car/phot3333.png";
import phot1 from "@/public/car/phot1.png";
import phot2 from "@/public/car/phot2.png";
import phot3 from "@/public/car/phot3.png";
import phot4 from "@/public/car/phot4.png";
import phot5 from "@/public/car/phot5.png";
import phot6 from "@/public/car/phot6.png";
import phot7 from "@/public/car/phot7.png";
import phot8 from "@/public/car/phot8.png";
import phot9 from "@/public/car/phot9.png";
import GeniusGenericGiftBox from "@/public/car/GeniusGenericGiftBox.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import Main from "@/Components/divs/Main";
import SmFooter from "@/Components/Footer/smFooter";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
const data = {
  "Cities in Egypt": [
    { name: "Cairo", locations: 3, price: 1939.71, imge: giza8 },
    { name: "Alexandria", locations: 5, price: 24400.0, imge: alex },
    // { name: "Alexandria", locations: 5, price: 2400.00,imge:giza8},
  ],
  "Regions in Egypt": [
    { name: "Red Sea Governorate", locations: 17, price: 2541.94, imge: giza8 },
    { name: "Giza Governorate", locations: 4, price: 1741.54, imge: alex },
    { name: " Governorate", locations: 55, price: 1221.54, imge: giza },
  ],
  "Cities worldwide": [
    { name: "El Segund", locations: 105, price: 28033.83, imge: giza8 },
    { name: "Coolangta", locations: 22, price: 25681.29, imge: giza },
    { name: "Coolanaa", locations: 92, price: 6483.29, imge: giza },
  ],
  "Airports worldwide": [
    { name: "Phoenix", locations: 79, price: 30040.0, imge: giza8 },
    { name: "qena", locations: 437, price: 320.0, imge: alex },
    { name: "aswan", locations: 467, price: 3920.0, imge: hurghada },
  ],
};
function Cars() {
  const [category, setCategory] = useState("Cities in Egypt");

  return (
    <>
      <Navbar />
      <Header />
      <Main
        title="Car rentals for any kind of trip"
        description="Great cars at great prices from the biggest rental companies"
      />
      {/* <p>aya</p> */}
      <section className="container ">
        <form className="flex justify-start mx-1">
          <div className="flex m-5 grid grid-cols-2 ">
            <div className=" flex gap-x-2 ">
              <p htmlFor="candidates" className="text-gray-500 text-xs Deliver">
                Drop car off at different location.
              </p>

              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                className="h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>

            <div className=" flex gap-x-2">
              <p
                htmlFor="candidates"
                className=" text-gray-500 text-xs Deliver"
              >
                Driver aged 30 – 65?
              </p>

              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                className="h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        </form>

        <div className="flex justify-start mx-5">
          <h4 className="Popular">Popular car hire brands</h4>
        </div>
        {/* photo */}
        <div className="my-5 flex justify-start mx-5 ">
          <div>
            <Image
              className="imgg"
              src={phot8}
              alt="My Image"
              width={80}
              height={90}
            />
            <p className="font">Thrifty</p>
          </div>
          <div>
            <Image
              className="imgg"
              src={phot9}
              alt="My Image"
              width={80}
              height={90}
            />
            <p className="font">Enterprise</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot7}
              alt="My Image"
              width={80}
              height={90}
            />
            <p className="font">National</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot6}
              alt="My Image"
              width={80}
              height={90}
            />
            <p className="font">Surprice</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot5}
              alt="My Image"
              width={80}
              height={90}
            />
            <p className="font">Avis</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot4}
              alt="My Image"
              width={80}
              height={90}
            />
            <p className="font">Caldera</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot3}
              alt="My Image"
              width={80}
              height={90}
            />
            <p className="font">SK Rent</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot1}
              alt="My Image"
              width={80}
              height={90}
            />
            <p className="font">Enterprise</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot2}
              alt="My Image"
              width={80}
              height={90}
            />
            <p className="font">padget</p>
          </div>
        </div>
        <br />
        <div>
          <h4 className="my-6 m-6 Popular">Travel more, spend less</h4>
        </div>
        <div className=" flex justify-start m-6">
          {/* <a href="#" className=" ">Learn more about your rewards</a> */}
          <div>
            <Alert className="flex ">
              <div>
                <AlertTitle className="Signin">Sign in, save money</AlertTitle>
                <AlertDescription className="Save_10">
                  Save 10% on select rental cars – just look for the blue Genius
                  label
                </AlertDescription>
                <div className="flex justify-start">
                  <Button className="bg-blue-500 w-12 h-7 mt-2">sign in</Button>
                  <Button variant="ghost" className="w-14">
                    Register
                  </Button>
                </div>
              </div>
              <div>
                <Image
                  src={GeniusGenericGiftBox}
                  alt="My Image"
                  width={50}
                  height={90}
                />
              </div>
            </Alert>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 sectio3photo">
        <div className=" flex mx-40">
          <div className=" flex mt-5 ">
            <Image src={phot33} width={40} height={40} className="pt-4" />
            <div>
              <h6 className="Sign">We’re here for you</h6>
              <p className="phot33">Customer support in over 30 languages</p>
            </div>
          </div>
          <div className=" flex mt-5 mx-4">
            <Image src={phot333} width={40} height={13} className="pt-4" />

            <div>
              <h6 className="Sign">Free cancellation</h6>
              <p className="phot33">
                Up to 48 hours before pick-up, on most bookings
              </p>
            </div>
          </div>
          <div className=" flex mt-5 mx-4">
            <Image src={phot3333} width={50} height={40} className="pt-4" />

            <div>
              <h6 className="Sign">5 million+ reviews</h6>
              <p className="phot33">By real, verified customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container ">
        <div className="flex justify-start mx-5 mt-5">
          <h4 className="Popular">Popular car hire brands</h4>
        </div>

        <div className="Accordion grid grid-cols-3 gap-4 p-4 ">
          <Accordion type="single" collapsible className=" Accordion1 ">
            <AccordionItem value="item-1 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-full Accordion1 mx-16 "
          >
            <AccordionItem value="item-7 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex justify-start mx-5 mt-5">
          <h4 className="Popular">Popular car hire brands</h4>
        </div>
        <div className="flex justify-start mx-5 ">
          <h4 className="Save_10">
            Explore more options to hire a car for cheap
          </h4>
        </div>

        {/* map //////// */}
        <div>
          <div className="Save_10 pt-1 mx-2" style={{ display: "flex" }}>
            {Object.keys(data).map((key) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                style={{
                  paddingLeft: "15px",
                  border: category === key ? "0.5px blue solid" : "none",
                  height: "25px",
                  paddingBottom: "15px",
                  borderRadius: "10px",
                  backgroundColor: category === key ? "#e0f7ff" : "#fff",
                }}
              >
                {key}
              </button>
            ))}
          </div>
          <div style={{ marginTop: "10px", display: "flex" }}>
            {data[category].map((item) => (
              <div key={item.name}>
                <div className="flex">
                  <div>
                    <Image
                      src={item.imge}
                      width={50}
                      height={70}
                      className="pt-4 mx-2"
                    />
                  </div>
                  <div>
                    <h3 className="Sign">{item.name}</h3>
                    <p className="Save_10">
                      {item.locations} car hire locations
                    </p>
                    <p className="Save_10  ">
                      Average price of EGP {item.price.toFixed(5)} per day
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SmFooter />
    </>
  );
}

export default Cars;
