import React from "react";

const footer = () => {
  return (
    <>
      <footer className="rounded-lg shadow bg-red-500">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className=" text-white font-bold">
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Pass Locker
            </a>
            . <span className="text-black">All Rights Reserved.</span>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0 ">
            <li>
              Made By{" "}
              <a
                className="text-white hover:text-black"
                href="https://github.com/Itsarun01"
              >
                Arun kumar |
              </a>
              <a
                className="text-white hover:text-black"
                href="https://github.com/Zodik09"
              >
                {""} Adarsh Vishwakarma
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default footer;
