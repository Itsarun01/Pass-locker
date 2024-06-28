import React from 'react'

const Navbar = () => {
  return (  
    <nav className="bg-slate-100 ">
      <div className='my-container flex justify-between items-center px-4 py-8 h-14 '>
           <div className="logo font-bold">Pass Locker</div>
             <ul>
              <li className="flex gap-6"> 
                <a className="hover:border-b-2 border-indigo-600" href='#'>Home</a>
                <a className="hover:border-b-2 border-indigo-600" href='#'>About</a>
                <a className="hover:border-b-2 border-indigo-600" href='#'>Contact</a>
              </li>
           </ul> 
           </div>
    </nav>  
  )
}

export default Navbar