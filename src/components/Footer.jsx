import React from "react";

const footer = () => {
  return (
    <>
      <footer className="rounded-lg shadow bg-red-500">
        <div className="w-full py-2 ">
          <ul className=" text-center text-1xl font-bold text-white ">
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
