import Link from "next/link";

export default function Destination({ text, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-2 px-md-4 py-2 text-base font-normal ${
        isActive
          ? "text-blue-500 bg-[#F0F6FD] rounded-full border border-[#0F75E5]"
          : "text-black hover:bg-gray-100  rounded-full"
      }`}
    >
      {text}
    </div>
  );
}
