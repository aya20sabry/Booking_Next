import Loaders from "@/Components/divs/loader";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function Loading() {
  const locale = useLocale();

  return (
    <>
      <Loaders />
    </>
  );
}

export default Loading;
