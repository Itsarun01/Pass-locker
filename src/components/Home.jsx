import React from 'react'

const Home = () => {
  return (
    <>
    <div class="relative h-screen w-full bg-white"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>

    <div className="my-container w-[80vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">

      <div  className='text-white text-center mb-5'>
        <h1 className='text-black text-3xl font-bold mb-2'>Manage Your Password</h1>
        <p className='text-black text-xl'>Your Own Password Manager, Fully Secured.</p>
      </div>
      <div className='text-black flex flex-col items-center w-full'>
        <input className='rounded-full w-[120%] py-3 px-7 my-2 outline-0 border-0 bg-zinc-200 placeholder:text-zinc-500' type="text" id='' placeholder='Enter Your URL...'/>
        <input className='rounded-full w-[120%] py-3 px-7 my-2 outline-0 border-0 bg-zinc-200 placeholder:text-zinc-500'  type="text" id='' placeholder='Enter Your Username...' />
        <input className='rounded-full w-[120%] py-3 px-7 my-2 outline-0 border-0 bg-zinc-200 placeholder:text-zinc-500' type="text" id='' placeholder='Enter Your Password...' />
        <button  className='mt-5 py-2 w-[400px] rounded-3xl bg-red-400 text-white text-xl hover:bg-red-500 font-bold'>Save</button>
      </div>
    </div>



    
    </>
  )
}

export default Home;