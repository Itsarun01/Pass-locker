import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-100">
      <div className="my-container flex justify-between items-center px-4 py-8 h-14 w-[80vw]">
        <div className="logo font-bold text-xl">Pass Locker</div>
        <ul>
          <li className="flex gap-6 relative">
            <a
              className="hover:border-b-2 border-red-600 transition-all ease-linear duration-200"
              href="#"
            >
              Home
            </a>
            <a
              className="hover:border-b-2 border-red-600 transition-all ease-linear duration-200"
              href="#"
            >
              About
            </a>
            <a
              className="hover:border-b-2 border-red-600 transition-all ease-linear duration-200"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
