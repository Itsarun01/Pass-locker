import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-100 flex justify-between items-center px-20 h-20 drop-shadow-lg ">
        <div className="logo font-bold">Pass Locker</div>
        <ul>
            <li className="flex gap-6"> 
                <a className="" href='#'>Home</a>
                <a className="" href='#'>About</a>
                <a className="" href='#'>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar