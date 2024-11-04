"use client"; // Indicate that this is a client component

import Image from "next/image";
import facebook from "@/Public/facebook.png";
import google from "@/Public/google.png";
import apple from "@/Public/apple.png";
import NavPlain from "@/Components/Navbar/NavPlain";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function SignRedist() {
  const [email, setEmail] = useState("");
  const router = useRouter();
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

      if (response.data === "please enter valid email") {
        console.log("Email not found");
        router.push("/Register");
      } else {
        window.alert("The email is already in use");
      }
      localStorage.setItem("email", email);
    } catch (error) {
      console.error("Error checking email:", error);
    }
  };

  return (
    <>
      <NavPlain />
      <div className="flex items-center justify-center">
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
                required
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
          <button 
    className="p-4 text-white rounded-lg border-2 border-grey-200 focus:outline-none" 
    onClick={() => {
      const clientId = process.env.REACT_APP_FACEBOOK_CLIENT_ID; 
      const redirectUri = encodeURIComponent('https://www.yourwebsite.com/signin');
      const scope = 'email';
      window.location.href = `https://www.facebook.com/v10.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    }}
  >
    <Image src={facebook} alt="Facebook" width={24} height={24} />
  </button>
  <button 
              className="p-4 text-white rounded-lg border-2 border-grey-200 focus:outline-none" 
              onClick={() => {
                const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID; 
                const redirectUri = encodeURIComponent('https://www.yourwebsite.com/signin');
                const scope = 'email'; // Changed scope to 'email'
                // Corrected the URL for Google OAuth
                window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;
              }}>
              <Image src={google} alt="Google" width={24} height={24} />
            </button>
          
          </div>

          <p className="mt-6 text-xs text-center text-gray-500">
            {t("By signing in or creating an account, you agree with our")}{" "}
            <a href="#" className="text-blue-600">
              {t("Terms & Conditions")}
            </a>{" "}
            {t("and")}{" "}
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