import AccountTravel from "@/Components/AccountTravel/page";
import AirportTransportation from "@/Components/AirportTransportation/page";
import FaqSection from "@/Components/FaqSection/page";
import SmFooter from "@/Components/Footer/smFooter";
import Footertaxi from "@/Components/Footertaxi/page";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";

import SearchBar from "@/Components/searchBar/AttractionSearch";
import TaxiSelector from "@/Components/TaxiSelector/page";

import { useLocale } from "next-intl";

function Taxi() {
  const locale = useLocale();
  return (
    <>
      <Navbar />
      <Header />
      {/* <TaxiBook /> */}
      <div className=" -mt-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
        <SearchBar />
      </div>
      <AccountTravel />
      <AirportTransportation />
      <TaxiSelector />
      <FaqSection />
      <Footertaxi />
      <SmFooter />
    </>
  );
}

export default Taxi;
