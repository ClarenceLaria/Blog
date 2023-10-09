import React from 'react';
// import './Header.css';


const Header = () => {
  return (
    <header className="header  p-8 text-black text-sm pb-8 top-0 sticky bg-white font-[Poppins] ">
      <div className="top flex justify-between">
        <div className="brand font-bold ">IDEA LAB</div>
        <nav className="navbar ">
          <ul className="nav-list  gap-10 flex justify-between">
            <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out">About Us</li>
            <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out">Services</li>
            <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out">Portfolio</li>
            <li className="nav-item cursor-pointer hover:text-orange-400 transition-all ease-in-out" >Blog</li>
          </ul>
        </nav>
      </div>
     <div className="home justify-center text-sm flex mt-10 font-bold"> <span className="text-orange-300">HOME</span>/BLOG</div>
      <div className="header-title justify-center flex gap-4 text-6xl  font-bold">IDEAS <span className=""> THAT</span> INS{/*<i>&#x2197;</i>*/}PIRE</div>
      <div className="toggle flex justify-between items-center p-5 w-full">
    <div className="left-bar flex gap-8 items-center">
    <div className="icons flex gap-2">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
      </svg>
      <svg className="  w-6 h-6 text-gray-800/20 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
  </svg>
        </div>

      <div className="text flex gap-6">
      <p className='flex gap-3'>SHOWING <span className='text-cyan-500 '>212 RESULTS</span></p>
        <p>SORT BY</p>
      </div>
    </div>
  <div className="search  object-contain border border-black rounded-2xl flex w-50 px-1 py-0.5  " >
    <input type="text" placeholder='Search' className='outline-none  ml-2 ' />
    <svg className="searchLogo w-6 h-6 mr-2  text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg>
  </div>
  </div>

  {}

 
  
    </header>
  );
};

export default Header;