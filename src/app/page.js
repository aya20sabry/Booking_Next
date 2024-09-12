import Footer from "@/Components/Footer/Footer";
import Heading from "@/Components/Headings/Heading";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";

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
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Offers"
            description="Promotions, deals and special offers for you"
          />
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
