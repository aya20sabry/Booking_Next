import Footer from "@/Components/Footer/Footer";
import Heading from "@/Components/Headings/Heading";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import SeizeTheMoment from "@/app/Public/SeizeMoment.jpeg";
import GoForAGoodTime from "@/app/Public/GoodTime.jpeg";
import Luxor from "@/app/Public/Luxor.jpg";
import Cairo from "@/app/Public/Cairo.jpg";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <section className="mainColor py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white BodyFont">
            Find your next stay
          </h1>
          <p className="text-white text-xl sm:text-2xl md:text-3xl HeadingFont mt-2">
            Search deals on hotels, homes, and much more...
          </p>
        </div>
      </section>
      {/* offers section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
          <Heading
            title="Offers"
            description="Promotions, deals and special offers for you"
          />
        </div>
        <div class="flex space-x-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {/* Left card */}
          <div
            class="bg-white shadow-lg rounded-lg overflow-hidden w-1/2"
            style={{
              backgroundImage: `url(${SeizeTheMoment.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div class="p-6">
              <h2 class="text-xl text-white font-bold mb-2">
                Seize the moment
              </h2>
              <p class="text-white mb-4 text-sm">
                Save 15% or more when you book and stay before 1 October <br />{" "}
                2024
              </p>
              <button
                href="#"
                class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-semibold"
              >
                Find Getaway Deals
              </button>
            </div>
          </div>

          {/* Right card */}
          <div class="bg-white shadow-lg rounded-lg overflow-hidden w-1/2 flex justify-between">
            <div class="p-6 ">
              <h2 class="text-xl font-bold mb-2">
                Go for a good time, not a long time
              </h2>
              <p class="text-gray-700 mb-4 text-sm">
                Finish your year with a mini break. Save 15% or more when you
                book and stay by 7 January 2025.
              </p>
              <button
                href="#"
                class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-semibold"
              >
                Find Late Escape Deals
              </button>
            </div>
            <div className="flex justify-center items-center pe-5">
              <Image
                src={GoForAGoodTime}
                alt="Go for a good time"
                className="rounded-lg"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>
      {/* destinations section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Trending destinations"
            description="Travellers searching for Egypt also booked these"
          />
        </div>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {/* <!-- Luxor Card --> */}
          <div
            class="relative overflow-hidden rounded-lg shadow-lg w-full h-64 destination-card"
            style={{
              backgroundImage: `url(${Luxor.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div class="absolute top-0 left-0 text-white p-3 text-2xl z-10">
              <h3 class="font-bold text-stroke">Luxor</h3>
            </div>
          </div>
          {/* <!-- Cairo Card --> */}
          <div
            class="relative overflow-hidden rounded-lg shadow-lg w-full h-64 destination-card"
            style={{
              backgroundImage: `url(${Cairo.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div class="absolute top-0 left-0 text-white p-3 text-2xl z-10">
              <h3 class="font-bold text-stroke">Cairo</h3>
            </div>
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <div
            class="bg-white shadow-lg rounded-lg overflow-hidden w-full h-64 destination-card"
            style={{
              backgroundImage: `url(${Luxor.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div class="absolute top-0 left-0 text-white p-3 text-2xl z-10">
              <h3 class="font-bold text-stroke">Luxor</h3>
            </div>
          </div>
        </div>
      </section>
      {/* explore section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Explore Egypt"
            description="These popular destinations have a lot to offer"
          />
        </div>
      </section>
      {/* browse by property type section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title="Browse by property type" />
        </div>
      </section>
      {/* planner section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Quick and easy trip planner"
            description="Pick a vibe and explore the top destinations in Egypt"
          />
        </div>
      </section>
      {/* deals section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Deals for the weekend"
            description="Save on stays for September 13 - September 15" //TODO: change this description
          />
        </div>
      </section>
      {/* inspiration section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Get inspiration for your next trip"
            description="Find the best places to stay in Egypt"
          />
        </div>
      </section>
      {/* homes section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title="Homes guests love" />
        </div>
      </section>
      {/* properties section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Stay at our top unique properties"
            description="From castles and villas to boats and igloos, we've got it all"
          />
        </div>
      </section>
      {/* travel tips section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title="Travel more, spend less" />
        </div>
      </section>
      {/* destinations section */}
      <section className="py-8 sm:py-16">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title="Destinations we love" />
        </div>
      </section>
      <Footer />
    </>
  );
}
