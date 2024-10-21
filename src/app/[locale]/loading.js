import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import Loaders from "@/Components/divs/loader";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function Loading() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
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
