import React from 'react'
import { Link, /*Outlet*/ } from 'react-router-dom'
const signup = () => {
  return (
    
         <div className='w-screen h-screen flex flex-col items-center justify-center p-4  ' >
            <div className="form h-full w-full flex">
                <div className="pic h-full w-full hidden  md:block lg:block xl:block">
                    <img src=" /src/images/blogger.jpg " alt="signup image" className='h-full w-full object-cover contrast-150 ' />
                    
                </div>
                <div className="signinLogin px-2 w-full sm:1/2 md:1/2 lg:1/2 xl:1/2">
                <div className="details-login h-full w-full flex flex-col gap-2   ">
                    <form action="" className=' border h-full   sm:px-4 lg:px-20 xl:px-24 flex flex-col justify-center'>
                    <h1 className=' font-semibold text-4xl items-center flex  ' >Sign up</h1>
                    <div className="credentials flex flex-col mt-5 w-full gap-8  ">
                    <input className='w-full bg-transparent border-b-2 border-b-zinc-500  rounded-sm  outline-none py-1 required:  ' type="text" placeholder='User Name' required/>
                    <input type="text" id="email" placeholder="Email" /*pattern=".+@example\.com"*/ required className='w-full bg-transparent border-b-2  border-b-zinc-500 rounded-sm  outline-none py-1 required:  '/>
                    {/* <input className='w-full bg-transparent border-b-2  border-b-zinc-500 rounded-sm  outline-none py-1 required:  ' type="email" placeholder='Email' /> */}
                    <input className='w-full bg-transparent border-b-2  border-b-zinc-500 rounded-sm  outline-none py-1 required:  ' type="password" placeholder='Password' required/>
                    <input className='w-full bg-transparent border-b-2  border-b-zinc-500 rounded-sm  outline-none py-1 required:  ' type="Password" placeholder='Confirm Password' required/>
                    <div className="forgotRemember flex justify-between  w-full px-2 ">
                        <div className="forgot">
                            
                    <input type="checkbox" name="remember" id="remember" className=' accent-orange-500 mr-1 cursor-pointer' />Remember me
                        </div>

                    </div>
                    <button type="submit" value="Submit" className='w-full bg-orange-500 -mt-4 py-2 rounded-3xl text-white hover:bg-orange-500/80 transition-all'>Sign up</button>
                   <p className='flex justify-center gap-1 px-2 -mt-5'>Already have an account. <span> <Link to="/signin" className=' no-underline transition-all ease-in-out text-orange-500 hover:text-black  '> Sign in</Link> </span></p>
                </div>
                    </form>
                
                </div>

                </div>
                
            </div>
            
        </div>
    
   

  )
}

export default signup;
