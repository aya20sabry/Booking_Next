"use client";
import Link from "next/link";
import { IoBedOutline } from "react-icons/io5";
import { PiAirplaneTilt } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { MdOutlineAttractions } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Header");

  const getButtonClass = (path) => {
    const isActive = pathname === path;
    return `px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center text-xs sm:text-sm  navHover ${
      isActive ? "hoverEffect border border-white" : ""
    }`;
  };

  return (
    <header
      className="mainColor text-white pt-2 sm:pt-4 pb-2 sm:pb-8"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 px-2 sm:px-5 lg:mx-44 gri">
        <Link href={`/${locale}/`}>
          <button className={getButtonClass(`/${locale}/`)}>
            <IoBedOutline className="mx-1 sm:mx-2 text-lg sm:text-2xl" />{" "}
            <span className="font-semibold">{t("stays")}</span>
          </button>
        </Link>
        <Link href={`/${locale}/flights`}>
          <button className={getButtonClass(`/${locale}/flights`)}>
            <PiAirplaneTilt className="mx-1 sm:mx-2 text-lg sm:text-2xl" />{" "}
            <span className="font-semibold">{t("flights")}</span>
          </button>
        </Link>
        <Link href={`/${locale}/cars`}>
          <button className={getButtonClass(`/${locale}/cars`)}>
            <IoCarOutline className="mx-1 sm:mx-2 text-lg sm:text-2xl" />{" "}
            <span className="font-semibold">{t("cars")}</span>
          </button>
        </Link>
        <Link href={`/${locale}/attractions`}>
          <button className={getButtonClass(`/${locale}/attractions`)}>
            <MdOutlineAttractions className="mx-1 sm:mx-2 text-lg sm:text-2xl" />{" "}
            <span className="font-semibold">{t("attractions")}</span>
          </button>
        </Link>
        <Link href={`/${locale}/taxi`}>
          <button
            className={`${getButtonClass(`/${locale}/taxi`)} hidden sm:flex `}
          >
            <span className="mx-1 sm:mx-2 text-xs border-t border-b border-spacing-0">
              TAXI
            </span>
            <span className="font-semibold">{t("taxi")}</span>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
