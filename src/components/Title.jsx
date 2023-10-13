import React from 'react'

function Title() {
  return (
    <>
          <div className="home justify-center text-sm flex mt-10 font-bold"> <span className="text-orange-300">HOME</span>/BLOG</div>
              <div className="header-title justify-center flex gap-4 text-3xl lg:text-6xl  font-bold">IDEAS <span className=""> THAT</span> INSPIRE</div>
              <div className="toggle flex flex-col sm:flex-row  justify-between items-center  mx-16  gap-2  w-6/7 ">
              <div className="left-bar flex gap-8 items-center mb-3">
              <div className="text flex lg:flex-row  gap-6">
              <p className='flex gap-3'>SHOWING <span className='text-cyan-500 '>212 RESULTS</span></p>
              <p>SORT BY</p>
            </div>
          </div>
              <div className="search  object-cover border border-black rounded-xl flex w-56 mr-4  py-0.5  " >
              <input type="text" placeholder='Search' className='outline-none  ml-2 ' />
              </div>
        </div>
    </>
  )
}

export default Title;