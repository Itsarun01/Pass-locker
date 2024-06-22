import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-200 flex justify-between items-center px-20 h-20 ">
        <div className='logo'>aklocker</div>
        <ul>
            <li className="flex gap-6"> 
                <a className="hover:font-bold" href='#'>Home</a>
                <a className="hover:font-bold" href='#'>About</a>
                <a className="hover:font-bold" href='#'>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar