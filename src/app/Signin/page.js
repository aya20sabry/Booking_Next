import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import facebook from "@/Public/facebook.png";
import google from "@/Public/google.png";
import apple from "@/Public/apple.png";
import NavPlain from "@/Components/Navbar/NavPlain";
export default function Signin() {
  return (
    <>
      <NavPlain />
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg  w-full max-w-sm ">
          <h1 className="text-xl font-bold text-start mb-6">
            Sign in or create an account
          </h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Continue with email
            </button>
          </form>

          <div className="my-6 text-center text-gray-500">
            or use one of these options
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
            By signing in or creating an account, you agree with our{" "}
            <a href="#" className="text-blue-600">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              Privacy Statement
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
