import React from 'react'

function Title() {
  return (
    <>
        <div className="home justify-center text-sm flex mt-10 font-bold"> <span className="text-orange-300">HOME</span>/BLOG</div>
            <div className="header-title justify-center flex gap-4 text-3xl lg:text-6xl  font-bold">IDEAS <span className=""> THAT</span> INS{/*<i>&#x2197;</i>*/}PIRE</div>
            <div className="toggle flex flex-col sm:flex-row  justify-between items-baseline  gap-2  w-full">
            <div className="left-bar flex gap-8 items-center mb-3">
            <div className="text flex lg:flex-row  gap-6">
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
    </>
  )
}

export default Title;