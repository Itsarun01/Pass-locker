import React from 'react'

const Home = () => {
  return (
    <>
     <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

    <div className=" bg-slate-200 my-container ">

      <div  className='text-white '>
        <h1>Manage Your Password</h1>
        <p>Your Own Password Manager, Fully Secured.</p>
      </div>
      <div className='text-black flex flex-col'>
        <input className='rounded-full' type="text" id='' placeholder='Enter Your URL'/>
        <input className='rounded-full'  type="text" id='' placeholder='Enter Your Username ' />
        <input className='rounded-full' type="text" id='' placeholder='Enter Your Pssword' />
        <button className=''>Save</button>
      </div>
      
    </div>
    
    </>
  )
}

export default Home;