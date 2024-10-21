import React from "react";
import { footerLinks, additionalLinks } from "@/Static/footer";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function EndLinks() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
      {/* Mobile version */}
      <div className=" pt-8 pb-4 text-xs flex flex-col items-start justify-center mx-4 sm:mx-8 md:hidden px-4">
        {[
          footerLinks.slice(0, footerLinks.length / 4),
          footerLinks.slice(footerLinks.length / 4, footerLinks.length / 2),
          footerLinks.slice(
            footerLinks.length / 2,
            (3 * footerLinks.length) / 4
          ),
          [
            ...footerLinks.slice((3 * footerLinks.length) / 4),
            ...additionalLinks,
          ],
        ].map((linkGroup, groupIndex) => (
          <p key={groupIndex} className="mb-2">
            {linkGroup.map((link, index) => (
              <React.Fragment key={index}>
                <span className="text-gray-600 hover:underline">{link}</span>
                {index < linkGroup.length - 1 && <span> &middot; </span>}
              </React.Fragment>
            ))}
          </p>
        ))}
      </div>

      {/* Desktop version */}
      <div className="hidden md:block  pt-8 pb-4 text-xs mx-16 lg:mx-48 px-4 ">
        <p className="mb-2">
          {[...footerLinks, ...additionalLinks].map((link, index) => (
            <React.Fragment key={index}>
              <span className="text-gray-600 hover:underline">{link}</span>
              {index < footerLinks.length + additionalLinks.length - 1 && (
                <span> &middot; </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
    </>
  );
}

export default EndLinks;
