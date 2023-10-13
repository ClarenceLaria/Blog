import React from 'react';
// import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header  p-8 text-black text-sm pb-8 top-0 bg-white font-[Poppins] ">
      <div className="top flex justify-between">
        <div className="brand font-bold "><Link to="/">IDEA LAB</Link></div>
        <nav className="navbar hidden md:block lg:block ">
          <ul className="nav-list  gap-10 flex justify-between">
            <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out" ><Link to="/signup">Sign Up</Link></li>
            <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out"><Link to="/signin">Sign In</Link></li>
            {/* <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out">Portfolio</li> */}
            <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out" ><Link to="/">Blog</Link></li>
            <Link to="/profile"><img src="/src/images/lionel.jpeg" alt="messi Profile" className='rounded-2xl w-8 h-8 cursor-pointer object-cover ' /></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;