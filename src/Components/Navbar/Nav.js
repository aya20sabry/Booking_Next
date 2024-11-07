import React from "react";

const Nav = ({ icon: Icon, text, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
       flex items-center space-x-2 px-4 py-2 rounded-full transition-colors text-sm cursor-pointer
        ${
          isActive
            ? "text-blue-500 bg-[#F0F6FD] rounded-full border border-[#0F75E5]"
            : "text-black hover:bg-gray-100  rounded-full"
        }
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{text}</div>
    </div>
  );
};

export default Nav;
