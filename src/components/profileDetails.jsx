import React from 'react'

function Profile(props) {
    const image = props.image
    const Username = props.Username
    const Post = props.Post
    const userDetails = props.userDetails
    const date = props.date
    const activities = props.activities
  return (
    <div>
      <img className='profilePic' src={image} alt="" />
      <p className='Username'>{Username}</p> 
      <p className='post'>{Post}</p>
      <p className='userDetails'>{userDetails}</p>
      <button className=''>{activities}</button>
    </div>
  )
}

export default Profile;