import React from "react";

const Navbar = () => {
  return (
    <nav className="rounded-lg shadow bg-red-500">
      <div className="my-container flex justify-center items-center px-4 py-4 h-14 w-[80vw]">
        <div className="logo font-bold text-2xl text-white">
          Password Manager
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
