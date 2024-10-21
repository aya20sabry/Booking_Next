import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function Heading({ title, description }) {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
      <h1 className="text-2xl font-bold mb-1">{title}</h1>
      <p className="text-base text-gray-500">{description}</p>
    </>
  );
}

export default Heading;
