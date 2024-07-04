import React from "react";

const footer = () => {
  return (
    <>
      <footer className=" rounded-lg shadow m-4 bg-zinc-300">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className=" text-black font-bold">
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Pass Locker
            </a>
            . <span className="text-red-600">All Rights Reserved.</span>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0 ">
            <li>
              Made By{" "}
              <a
                className="text-red-600 hover:text-white"
                href="https://github.com/Itsarun01"
              >
                Arun kumar |
              </a>
              <a
                className="text-red-600 hover:text-white"
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
