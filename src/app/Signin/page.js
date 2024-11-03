"use client";

import Image from "next/image";
import facebook from "@/Public/facebook.png";
import google from "@/Public/google.png";
import apple from "@/Public/apple.png";
import NavPlain from "@/Components/Navbar/NavPlain";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// import { useAuth } from "@/context/user";

import { useTranslations, useLocale } from "next-intl";

export default function Signin() {
  // const { login } = useAuth();
  const [email, setEmail] = useState("");
  const router = useRouter();
  const locale = useLocale();

  const t = useTranslations("Signin");

  const checkemail = async (e) => {
    e.preventDefault();

    const axiosInstance = axios.create({
      baseURL: "http://localhost:3000/user",
    });

    try {
      const response = await axiosInstance.post("/checkemail", { email });
      console.log(email);
      console.log("res", response);

      if (response.data !== "please enter valid email") {
        localStorage.setItem("email", email);
        // login(email); // تسجيل الدخول
        router.push("/Register");
      } else {
        window.alert("Email not found");
      }
    } catch (error) {
      console.error("Error checking email:", error);
    }
  };

  return (
    <>
      <NavPlain />
      <div
        className="flex items-center justify-center"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="bg-white p-8 rounded-lg w-full max-w-sm">
          <h1 className="text-xl font-bold text-start mb-6">
            {t("Sign in or create an account")}
          </h1>
          <form className="space-y-4" onSubmit={checkemail}>
            <div>
              <label htmlFor="email" className="sr-only">
                {t("Email address")}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t("Enter your email address")}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              {t("Continue with email")}
            </button>
          </form>

          <div className="my-6 text-center text-gray-500">
            {t("or use one of these options")}
          </div>

          <div className="flex justify-around">
            <button className="p-4 bg-white rounded-lg border-2 border-grey-200">
              <Image src={facebook} alt="Facebook" width={24} height={24} />
            </button>
            <button className="p-4 bg-white rounded-lg border-2 border-grey-200">
              <Image src={google} alt="Google" width={24} height={24} />
            </button>
            <button className="p-4 bg-white rounded-lg border-2 border-grey-200">
              <Image src={apple} alt="Apple" width={24} height={24} />
            </button>
          </div>

          <p className="mt-6 text-xs text-center text-gray-500">
            {t("By signing in or creating an account, you agree with our")}
            <a href="#" className="text-blue-600">
              {t("Terms & Conditions")}
            </a>{" "}
            {t("and")}
            <a href="#" className="text-blue-600">
              {t("Privacy Statement")}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

// "use client";

// import Image from "next/image";
// import facebook from "@/Public/facebook.png";
// import google from "@/Public/google.png";
// import apple from "@/Public/apple.png";
// import NavPlain from "@/Components/Navbar/NavPlain";
// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// <<<<<<< HEAD
// <<<<<<< HEAD
// import { signIn } from "next-auth/react";
// =======
// =======
// >>>>>>> 42ea0637e6d3df7c292805a609c591b331565fdd

// // import { useAuth } from "@/context/user";
// >>>>>>> 42ea0637e6d3df7c292805a609c591b331565fdd

// import { useTranslations, useLocale } from "next-intl";

// import { useTranslations, useLocale } from "next-intl";

// export default function Signin() {
//   const [email, setEmail] = useState("");
//   const router = useRouter();
//   const locale = useLocale();

//   const t = useTranslations("Signin");

//   const checkemail = async (e) => {
//     e.preventDefault();

//     const axiosInstance = axios.create({
//       baseURL: "http://localhost:3000/user",
//     });

//     try {
//       const response = await axiosInstance.post("/checkemail", { email });
//       console.log(email);
//       console.log("res", response);

//       if (response.data !== "please enter valid email") {
//         localStorage.setItem("email", email);
//         router.push("/Register");
//       } else {
//         window.alert("Email not found");
//       }
//     } catch (error) {
//       console.error("Error checking email:", error);
//     }
//   };

//   return (
//     <>
//       <NavPlain />
//       <div className="flex items-center justify-center" dir={locale === "ar" ? "rtl" : "ltr"}>
//         <div className="bg-white p-8 rounded-lg w-full max-w-sm">
//           <h1 className="text-xl font-bold text-start mb-6">
//             {t("Sign in or create an account")}
//           </h1>
//           <form className="space-y-4" onSubmit={checkemail}>
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 {t("Email address")}
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder={t("Enter your email address")}
//                 className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//             >
//               {t("Continue with email")}
//             </button>
//           </form>

//           <div className="my-6 text-center text-gray-500">
//             {t("or use one of these options")}
//           </div>

//           <div className="flex justify-around">
//             <button onClick={() => signIn("facebook")} className="p-4 bg-white rounded-lg border-2 border-grey-200">
//               <Image src={facebook} alt="Facebook" width={24} height={24} />
//             </button>
//             <button onClick={() => signIn("google")} className="p-4 bg-white rounded-lg border-2 border-grey-200">
//               <Image src={google} alt="Google" width={24} height={24} />
//             </button>
//             <button onClick={() => signIn("apple")} className="p-4 bg-white rounded-lg border-2 border-grey-200">
//               <Image src={apple} alt="Apple" width={24} height={24} />
//             </button>
//           </div>

//           <p className="mt-6 text-xs text-center text-gray-500">
//             {t("By signing in or creating an account, you agree with our")}
//             <a href="#" className="text-blue-600">
//               {t("Terms & Conditions")}
//             </a>{" "}
//             {t("and")}
//             <a href="#" className="text-blue-600">
//               {t("Privacy Statement")}
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
