import SmFooter from "@/Components/Footer/smFooter";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function Taxi() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <Header />

      <SmFooter />
    </>
  );
}

export default Taxi;
