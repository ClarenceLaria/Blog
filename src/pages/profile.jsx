import React from "react";
import "./profile.css";

const profile = () => {
return(
    <>
    <div>
    <img src="/src/images/lionel.jpeg" alt="messi Profile" className="profilePic"/>
    </div>
    <div className="blogs flex justify-between items-center">
        <h1>My Blogs</h1>{/*can also use the text-align css property*/}
        <h2>Edit Profile</h2>
    </div>
    <div className="myBlogs flex gap-3 grid grid-cols-3 md: grid-cols-2 lg:grid-cols-3 justify-around m-2 ">
    <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
        <img className='w-60' src="/src/images/lionel.jpeg"  alt=" " />
        <p className='title'>Lionel Messi</p>
        <p>The Greatest of All Time </p>
    </div>
    <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
        <img className='w-60' src="/src/images/lionel.jpeg"  alt=" " />
        <p className='title'>Lionel Messi</p>
        <p>The Greatest of All Time </p>
    </div>
    <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
        <img className='w-60' src="/src/images/lionel.jpeg"  alt=" " />
        <p className='title'>Lionel Messi</p>
        <p>The Greatest of All Time </p>
    </div>
    <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
        <img className='w-60' src="/src/images/lionel.jpeg"  alt=" " />
        <p className='title'>Lionel Messi</p>
        <p>The Greatest of All Time </p>
    </div> 
    </div>  
    </>
    )
}


export default profile;