import SmFooter from "@/Components/Footer/smFooter";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import { useLocale } from "next-intl";
function Taxi() {
  const locale = useLocale();
  return (
    <>
      <Navbar />
      <Header />

      <SmFooter />
    </>
  );
}

export default Taxi;
