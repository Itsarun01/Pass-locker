import React from "react";

const footer = () => {
  return (
    <>
      <footer className="rounded-lg shadow bg-red-500">
        <div className="w-full mx-auto p-4 ">
          <ul className=" text-center  text-sm font-medium text-white ">
            <li>
              Made By : {""}
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
