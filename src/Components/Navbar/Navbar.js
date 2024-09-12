import Image from "next/image";
import Link from "next/link";
import ENFlag from "@/app/Public/ENFlag.png";

function Navbar() {
  return (
    <>
      <header className="mainColor text-white py-4 ">
        <div className="max-w-7xl lg:mx-44 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl BodyFont">
            Booking.com
          </Link>

          <div className="flex space-x-4">
            <button className="mainColor hoverEffect  px-3 py-2 rounded">
              EGP
            </button>
            <button className="mainColor hoverEffect px-3 py-2 rounded">
              <Image
                src={ENFlag}
                className="rounded-full"
                alt="Language"
                width={24}
                height={24}
              />
            </button>
            <button className="mainColor hoverEffect px-3 py-2 rounded">
              {" "}
              <span className="infolink  "></span>
            </button>

            <button className="mainColor hoverEffect px-3 py-2 rounded">
              List your property
            </button>
            <button className="bg-white text-blue-700 text-sm hover:bg-blue-100 px-3 py-2 rounded border-blue-900 font-medium">
              Register
            </button>
            <button className="bg-white text-blue-700 text-sm hover:bg-blue-100 px-3 py-2 rounded  border-blue-900 font-medium">
              Sign in
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
