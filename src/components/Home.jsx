import React from "react";
import {useState, useEffect, useRef} from "react";
import {ToastContainer, toast} from "react-toastify";
import {v4 as uuidv4} from "uuid";

import "react-toastify/dist/ReactToastify.css";
import {data} from "autoprefixer";

const Home = () => {
  const [form, setForm] = useState({site: "", username: "", password: ""});

  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    } else {
    }
  }, []);

  const savePassword = () => {
    setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, {...form, id: uuidv4()}])
    );
    setForm({site: "", username: "", password: ""});
    console.log([...passwordArray, form]);

    toast(" Your Password is saved successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this?");
    if (c) {
      setPasswordArray(passwordArray.filter((data) => data.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((data) => data.id !== id))
      );
    }

    toast(" Your Password is Deleted !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const editPassword = (id) => {
    setForm(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const ref = useRef();
  const passRef = useRef();

  const showPassword = () => {
    if (ref.current.src.includes("assets/close.svg")) {
      ref.current.src = "assets/open.svg";
      passRef.current.type = "text";
    } else {
      ref.current.src = "assets/close.svg";
      passRef.current.type = "password";
    }
  };

  const copyText = (text) => {
    toast(" Copide to Clipboard !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <ToastContainer />
      <div className="my-container w-[80vw] h-3/4 m-auto">
        <div className="text-white text-center mb-5">
          <h1 className="text-black text-3xl font-bold mb-2 mt-10 text-nowrap">
            Manage Your Password
          </h1>
          <p className="text-black font-semibold text-xl">
            Your Own Password Manager, Fully Secured.
          </p>
        </div>
        <div className="select-none relative text-black flex flex-col items-center w-full">
          <input
            className=" rounded-full w-[100%] py-2 px-7 my-4 outline-0 border-2 border-red-500 border-solid bg-transparent placeholder:text-zinc-800"
            type="text"
            value={form.site}
            name="site"
            onChange={handleChange}
            placeholder="Enter Your URL..."
          />
          <input
            className=" rounded-full w-[100%] py-2 px-7 my-4 outline-0 border-2 border-red-500 border-solid bg-transparent placeholder:text-zinc-800"
            type="text"
            value={form.username}
            name="username"
            onChange={handleChange}
            placeholder="Enter Your Username..."
          />
          <div className="w-full relative">
            <input
              className=" rounded-full w-[100%] py-2 px-7 my-4 outline-0 border-2 border-red-500 border-solid bg-transparent placeholder:text-zinc-800"
              type="password"
              ref={passRef}
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
        <h2 className="font-bold text-xl text-white py-2 rounded-lg  mb-5 bg-red-500 w-full">
          Your Password
        </h2>
        {passwordArray.length === 0 && (
          <div className="text-xl"> No Saved Password...</div>
        )}
        {passwordArray.length != 0 && (
          <table className="my-3 w-full rounded-md overflow-hidden border-r border-b border-black">
            <thead className="bg-red-500">
              <tr>
                <th className="text-white p-1 ">Site</th>
                <th className="text-white p-1">Username</th>
                <th className="text-white p-1 ">Password</th>
                <th className="text-white p-1 ">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-300">
              {passwordArray.map((data, index) => {
                return (
                  <tr key={"index"} className="max-w-[25%]">
                    <td className="max-w-[5vw] p-1 truncate border-r border-b border-t border-white">
                      <div
                        className="flex justify-center items-center gap-3 "
                        onClick={() => {
                          copyText(data.site);
                        }}
                      >
                        {data.site}
                        <img
                          className="w-5"
                          src="/public/assets/copy.svg"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="max-w-[5vw] p-1 truncate border-r border-b border-t border-white">
                      <div
                        className="flex justify-center items-center gap-3 "
                        onClick={() => {
                          copyText(data.username);
                        }}
                      >
                        {data.username}
                        <img
                          className="w-5"
                          src="/public/assets/copy.svg"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="max-w-[5vw] p-1 truncate border-r border-b border-t border-white">
                      <div
                        className="flex justify-center items-center gap-3 "
                        onClick={() => {
                          copyText(data.password);
                        }}
                      >
                        {data.password}
                        <img
                          className="w-5 text-red-500"
                          src="/public/assets/copy.svg"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="max-w-[5vw] p-1 truncate border-r border-b border-t border-white">
                      <div className="flex justify-center items-center gap-4">
                        <span
                          className="w-5"
                          onClick={() => {
                            deletePassword(data.id);
                          }}
                        >
                          <img
                            className="w-5"
                            src="/public/assets/delete.svg"
                            alt=""
                          />
                        </span>
                        <span
                          onClick={() => {
                            editPassword(data.id);
                          }}
                        >
                          <img
                            className="w-5"
                            src="/public/assets/edit.svg"
                            alt=""
                          />
                        </span>
                      </div>
                    </td>
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
