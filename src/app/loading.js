import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";

import Loaders from "@/Components/divs/loader";

function Loading() {
  return (
    <>
      <Navbar />
      <Header />
      <Loaders />
      <Footer />
    </>
  );
}

export default Loading;
