import Main from "@/Components/divs/Main";
import SmFooter from "@/Components/Footer/smFooter";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";

function Cars() {
  return (
    <>
      <Navbar />
      <Header />

      <Main
        title="Car rentals for any kind of trip"
        description="Great cars at great prices from the biggest rental companies"
      />

      <SmFooter />
     
    </>
  );
}

export default Cars;
