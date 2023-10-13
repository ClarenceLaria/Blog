import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const signin = () => {
  return (
    
         <div className='w-screen h-screen flex flex-col items-center justify-center  p-4 ' >
            <div className="form h-full w-full flex">
               
                <div className="signinLogin w-1/2">
                    
                <div className="details-login h-full w-full flex flex-col gap-5   ">
                    
                    <form action="" method="get" className=' border h-full  px-24 flex flex-col justify-center'>

                    <h1 className=' font-semibold text-4xl' >Sign in</h1>
                    <p className='text-gray-400' >Welcome back! Please enter your details.</p>
                    <div className="credentials flex flex-col mt-5 w-full gap-8  ">
                    <input className='w-full bg-transparent border-b-2 border-b-zinc-500  rounded-sm  outline-none py-1 required:  ' type="text/ email" placeholder='User Name/ Email' required/>
                    {/* <input className='w-full px-3 bg-transparent border-b-2  border-b-zinc-500 rounded-sm  outline-none py-1 required:  ' type="email" placeholder='Email' /> */}
                    <input className='w-full  bg-transparent border-b-2  border-b-zinc-500 rounded-sm  outline-none py-1 required:  ' type="password" placeholder='Password' required/>
                    {/* <input className='w-full px-3 bg-transparent border-b-2  border-b-zinc-500 rounded-sm  outline-none py-1 required:  ' type="Password" placeholder='Confirm Password' /> */}
                    <div className="forgotRemember flex justify-between  w-full px-2 ">
                        <div className="forgot">
                        <p className='text-blue-500 hover:underline cursor-pointer ' >forgot password?</p>        
                    <input type="checkbox" name="remember" id="remember" className=' accent-orange-500 mr-1 cursor-pointer' />Remember me
                        </div>
                    </div>
                    <button type="submit" value="Submit" className='w-full bg-orange-500 -mt-4 py-2 rounded-3xl text-white hover:bg-orange-500/80 transition-all'>Sign in</button>
                   <p className='flex justify-center gap-1 px-2 -mt-5'>Don't have an account. <span> <Link to="/signup" className=' no-underline transition-all ease-in-out text-orange-500 hover:text-black  ' > Sign up</Link> </span></p>
                </div>
                    </form>
                </div>
                <div className="details-signin hidden h-full w-full flex flex-col gap-5   ">
                    <form action="" className=' border h-full  px-20 flex flex-col justify-center items-center'>
                    <div className="credentials flex flex-col mt-5 w-full gap-8  ">
                    <div className="forgotRemember flex justify-between  w-full px-2 ">
                        <div className="forgot">
                        </div>
                    </div>
                     </div>
                    </form>
                </div>
                </div>
                <div className="pic h-full w-1/2">
                    <img src=" /src/images/blogger.jpg " alt="signup image" className='h-full w-full object-cover contrast-150 ' />
                </div>
            </div>
        </div>
  );
};

export default signin;