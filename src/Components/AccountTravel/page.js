import Image from "next/image";
import Link from "next/link";
import Gif from "@/Public/Gif.png";
const AccountTravel = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="flex justify-between items-center text-2xl font-bold">
        Your account, your travel
      </h2>
      <div className="flex justify-between items-center border p-6 rounded-lg shadow-lg bg-white mt-4">
        <div>
          <p className="text-gray-500 font-semibold mt-2">
            All your trip details in one place
          </p>
          <p className="text-gray-400 mt-1">
            Sign in to book faster and manage your trip with ease
          </p>
          <div className="mt-4">
            <Link href="/comingSoon">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                Enjoy Now
              </button>
            </Link>
            <Link href="/comingSoon">
              <button className="text-blue-500">And Later</button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={Gif}
            alt="Genius Gif"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountTravel;
