import React from 'react'

const signup = () => {
  return (
    
         <div className='w-screen h-screen flex flex-col items-center justify-center  ' >
            <div className="form h-full w-full flex">
                <div className="pic h-full w-1/2">
                    <img src=" /src/images/blogger.jpg " alt="signup image" className='h-full w-full object-cover contrast-150 ' />
                    
                </div>
                <div className="signinLogin w-1/2">
                <div className="details-login h-full w-full flex flex-col gap-5   ">
                    <form action="" className=' border h-full  px-20 flex flex-col justify-center items-center'>
                    <h1 className='text-center font-semibold text-4xl items-center flex ' >Sign up</h1>
                    <div className="credentials flex flex-col mt-5 w-full gap-8  ">
                    <input className='w-full px-3 bg-transparent border-b-2 border-b-zinc-500  rounded-sm  outline-none py-1 required:  ' type="text" placeholder='User Name' />
                    <input className='w-full px-3 bg-transparent border-b-2  border-b-zinc-500 rounded-sm  outline-none py-1 required:  ' type="email" placeholder='Email' />
                    <input className='w-full px-3 bg-transparent border-b-2  border-b-zinc-500 rounded-sm  outline-none py-1 required:  ' type="password" placeholder='Password' />
                    <input className='w-full px-3 bg-transparent border-b-2  border-b-zinc-500 rounded-sm  outline-none py-1 required:  ' type="Password" placeholder='Confirm Password' />
                    <div className="forgotRemember flex justify-between  w-full px-2 ">
                        <div className="forgot">
                            
                    <input type="checkbox" name="remember" id="remember" className=' accent-orange-500 mr-1 cursor-pointer' />Remember me
                        </div>

                    </div>
                    <button className='w-full bg-orange-500 -mt-4 py-2 rounded-3xl text-white hover:bg-orange-500/80 transition-all'>Sign up</button>
                   <p className='flex justify-end gap-1 px-2 -mt-5'>Already have an account. <span> <a href="/src/pages/signin.jsx" className=' no-underline transition-all ease-in-out text-orange-500 hover:text-black  ' > Sign in</a> </span></p>
                </div>
                    </form>
                
                </div>

                <div className="details-signin hidden h-full w-full flex flex-col gap-5   ">
                    <form action="" className=' border h-full  px-20 flex flex-col justify-center items-center'>
                    <h1 className='text-center font-semibold text-4xl items-center flex ' >Sign in</h1>
                    <div className="credentials flex flex-col mt-5 w-full gap-8  ">
                    <input type="text" placeholder='User Name' className="w-full px-3 bg-transparent border-b-2 border-b-zinc-500  rounded-sm  outline-none py-1"  />
                    <input type="password" placeholder='Password' className="w-full px-3 bg-transparent border-b-2 border-b-zinc-500  rounded-sm  outline-none py-1"  />                   <div className="forgotRemember flex justify-between  w-full px-2 ">
                        <div className="forgot">
                            
                    <input type="checkbox" name="remember" id="remember" className=' accent-orange-500 mr-1 cursor-pointer' />Remember me
                        </div>
                        <p className='text-blue-500 hover:underline cursor-pointer ' >forgot password?</p>
                    </div>
                    <button className='w-full bg-orange-500 -mt-4 py-2 rounded-3xl text-white hover:bg-orange-500/80 transition-all'>Sign up</button>
                   <p className='flex justify-end gap-1 px-2 -mt-5'>Don't have an account. <span> <a href="/src/pages/signin.jsx" className=' no-underline transition-all ease-in-out text-orange-500 hover:text-black  ' > Sign up</a> </span></p>
                </div>
                    </form>
                
                </div>
                        
                    </div>
                
            </div>
            
        </div>
    
   

  )
}

export default signup
