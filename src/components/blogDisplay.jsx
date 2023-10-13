import React from 'react'
import profileDetails from './ProfileDetails'

function blogDisplay (props) {
    const title = props.title
    const image = props.image
    const subTitle = props.subTitle
    const description = props.description
  return (
        <div className="w-4/5 mx-auto " >
          <h1 className='title'>{title}</h1>
          <profileDetails/>
          <img className='w-full object-cover rounded-md' src={image} alt="" />
          <h3 className='subtitle'>{subTitle}</h3>
          <p className='description' >{description}</p>

        </div>
    
  )
}

export default blogDisplay