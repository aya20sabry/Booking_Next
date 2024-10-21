import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function Places({ name, propertyCount }) {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-600">
          {propertyCount.toLocaleString()} properties
        </p>
      </div>
    </>
  );
}

export default Places;
