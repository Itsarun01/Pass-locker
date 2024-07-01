import React from "react";
import {useState, useEffect} from "react";

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
    setPasswordArray([...passwordArray, form]);
    localStorage.getItem("passwords", JSON.stringify([...passwordArray, form]));
    setForm({site: "", username: "", password: ""});
    console.log(passwordArray);
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  return (
    <>
      <div className="relative h-screen w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      <div className="my-container w-[80vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="text-white text-center mb-5">
          <h1 className="text-black text-3xl font-bold mb-2">
            Manage Your Password
          </h1>
          <p className="text-black font-semibold text-xl">
            Your Own Password Manager, Fully Secured.
          </p>
        </div>
        <div className="text-black flex flex-col items-center w-full">
          <input
            className="rounded-full w-[120%] py-3 px-7 my-5 outline-0 border-0 bg-zinc-200 placeholder:text-zinc-500"
            type="text"
            value={form.site}
            name="site"
            onChange={handleChange}
            placeholder="Enter Your URL..."
          />
          <input
            className="rounded-full w-[120%] py-3 px-7 my-5 outline-0 border-0 bg-zinc-200 placeholder:text-zinc-500"
            type="text"
            value={form.username}
            name="username"
            onChange={handleChange}
            placeholder="Enter Your Username..."
          />
          <input
            className="rounded-full w-[120%] py-3 px-7 my-5 outline-0 border-0 bg-zinc-200 placeholder:text-zinc-500"
            type="text"
            value={form.password}
            name="password"
            onChange={handleChange}
            placeholder="Enter Your Password..."
          />

          <button
            onClick={savePassword}
            className="mt-5 py-1 w-[200px] rounded-3xl bg-red-400 text-white text-sx font-bold hover:bg-red-500 flex justify-center items-center gap-1"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              className="text"
            ></lord-icon>
            Save Password
          </button>
        </div>
      </div>

      <div className="absolute top-[85%] left-[50%] translate-x-[-50%] saved-password w-[80vw] mx-auto h-auto text-center pb-12">
        <h2 className="text-2xl font-bold p-9">Your Password</h2>
        {passwordArray.length === 0 && <div> No Password Save..</div>}
        {passwordArray.length != 0 && (
          <table className=" table-auto w-full rounded-xl overflow-hidden">
            <thead className="text-center bg-red-400">
              <tr className="w-full text-center">
                <th className="w-2/6 p-2 text-lg border border-black">Site</th>
                <th className="w-2/6 p-2 text-lg border border-black">
                  Username
                </th>
                <th className="w-2/6 p-2 text-lg border border-black ">
                  Password
                </th>
              </tr>
            </thead>
            <tbody className="bg-zinc-200 text-center">
              {passwordArray.map((data) => {
                return (
                  <tr className="w-full">
                    <td className=" border border-black p-1">
                      <a href={data.site}> {data.site}</a>
                    </td>
                    <td className=" border border-black p-1">
                      {data.username}
                    </td>
                    <td className=" border border-black p-1">
                      {data.password}
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
