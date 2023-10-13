import React from 'react'

function Profile(props) {
    const image = props.image
    const Username = props.Username
    const Post = props.post
    const userDetails = props.userDetails
    const date = props.date
    
  return (
   
   <div className='w-4/5 mx-auto h-32 flex object-cover items-end justify-between '>
    <div className='flex gap-3'>
    <img className='image rounded-full h-20 w-20 object-cover ' src={image} alt="" />
     <div className='flec flex-col'>
     
      <p className='Username font-semibold'>{Username}</p> 
      <p className='post'>{Post}</p>
      <p className='userDetails'>{userDetails}</p>
     </div>
    </div>
      <button className='bg-orange-500 p-1 px-2 text-white rounded-lg'>Activities</button>
    </div>
  )
}

export default Profile;