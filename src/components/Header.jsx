import React from 'react';
// import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header  p-8 text-black text-sm pb-8 top-0 bg-white font-[Poppins] ">
      <div className="top flex flex-row justify-between">
        <div className="brand font-bold "><Link to="/">IDEA LAB</Link></div>
        <nav className="navbar   hidden md:block lg:block  ">
          <ul className="nav-list  gap-10 flex justify-between">
            <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out" ><Link to="/signup">Sign Up</Link></li>
            <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out"><Link to="/signin">Sign In</Link></li>
            {/* <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out">Portfolio</li> */}
            <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out" ><Link to="/">Blog</Link></li>
            <Link to="/profile"><img src="/src/images/lionel.jpeg" alt="messi Profile" className='rounded-2xl w-8 h-8 cursor-pointer object-cover ' /></Link>
          </ul>
        </nav>
      </div>
     <div className="home justify-center text-sm flex mt-10 font-bold"> <span className="text-orange-300">HOME</span>/BLOG</div>
      <div className="header-title justify-center flex gap-4 text-3xl lg:text-6xl  font-bold">IDEAS <span className=""> THAT</span> INSPIRE</div>
      <div className="toggle flex flex-col sm:flex-row justify-between  items-baseline  gap-2 w-full">
        <div className="left-bar flex gap-8 items-center mb-3">
          <div className="text flex lg:flex-row gap-6">
          <p className='flex gap-3'>SHOWING <span className='text-cyan-500 '>212 RESULTS</span></p>
            <p>SORT BY</p>
          </div>
        </div>
      <div className="search  object-contain border border-black rounded-2xl flex w-52  px-1 py-0.5 " >
          <input type="text" placeholder='Search' className='outline-none  ml-2 ' />
     
      </div>
  </div>

  {}

 
  
    </header>
  );
};

export default Header;