import React from "react";
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });

  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    } else {
    }
  }, []);

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.getItem("passwords", JSON.stringify([...passwordArray, form]));
    setForm({ site: "", username: "", password: "" });
    console.log(passwordArray);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const ref = useRef();

  const showPassword = () => {
    if (ref.current.src.includes("assets/close.svg")) {
      ref.current.src = "assets/open.svg";
    } else {
      ref.current.src = "assets/close.svg";
    }
  };

  return (
    <>
      {/* <div className="relative h-screen w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div> */}
      <div className="my-container w-[80vw] h-3/4 m-auto">
        <div className="text-white text-center mb-5">
          <h1 className="text-black text-3xl font-bold mb-2 mt-10 text-nowrap">
            Manage Your Password
          </h1>
          <p className="text-black font-semibold text-xl">
            Your Own Password Manager, Fully Secured.
          </p>
        </div>
        <div className="relative text-black flex flex-col items-center w-full">
          <input
            className="rounded-full w-[100%] py-2 px-7 my-4 outline-0 border-2 border-red-500 border-solid bg-transparent placeholder:text-zinc-800"
            type="text"
            value={form.site}
            name="site"
            onChange={handleChange}
            placeholder="Enter Your URL..."
          />
          <input
            className="rounded-full w-[100%] py-2 px-7 my-4 outline-0 border-2 border-red-500 border-solid bg-transparent placeholder:text-zinc-800"
            type="text"
            value={form.username}
            name="username"
            onChange={handleChange}
            placeholder="Enter Your Username..."
          />
          <div className="w-full relative">
            <input
              className="rounded-full w-[100%] py-2 px-7 my-4 outline-0 border-2 border-red-500 border-solid bg-transparent placeholder:text-zinc-800"
              type="text"
              value={form.password}
              name="password"
              onChange={handleChange}
              placeholder="Enter Your Password..."
            />

            <div
              onClick={showPassword}
              className="absolute bottom-1/2 right-3 translate-y-1/2"
            >
              <img className="w-6" src="assets/close.svg" ref={ref} alt="" />
            </div>
          </div>

          <button
            onClick={savePassword}
            className="mt-5 py-2 w-[200px] rounded-3xl bg-red-500 text-white text-sx font-bold hover:bg-red-400 hover:text-zinc-100 flex justify-center items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeWidth={2}
              >
                <rect width={7} height={7} x={3} y={3} rx={1}></rect>
                <rect width={7} height={7} x={3} y={14} rx={1}></rect>
                <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                <path d="M17.5 14v7m3.5-3.5h-7"></path>
              </g>
            </svg>
            Save Password
          </button>
        </div>
      </div>

      <div className="max-w-[80vw] m-auto text-center my-10">
        <h2 className="text-3xl font-black mb-5">Your Password</h2>
        {passwordArray.length === 0 && <div className="text-xl"> No Saved Password...</div>}
        {passwordArray.length != 0 && (
          <table className="my-3 w-full rounded-md overflow-hidden border-r border-b border-black">
            <thead className="bg-red-500">
              <tr>
                <th className="text-white p-1 border-r border-white">Site</th>
                <th className="text-white p-1 border-r border-white">Username</th>
                <th className="text-white p-1 border-r border-white">Password</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-300">
              {passwordArray.map((data, index) => {
                return (
                  <tr key={"index"} className="max-w-[25%]">
                    <td className="max-w-[5vw] p-2 truncate border-r border-b border-t border-white">
                      <a href={data.site}> {data.site}</a>
                    </td>
                    <td className="max-w-[5vw] p-2 truncate border-r border-b border-t border-white">{data.username}</td>
                    <td className="max-w-[5vw] p-2 truncate border-r border-b border-t border-white">{data.password}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Home;
