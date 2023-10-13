import React from 'react'


function BlogsDisplay (props) {
  const image = props.image;
  const title = props.title;
   const subTitle = props.subTitle;
   const desc = props.desc;

  return (
        <div className=" w-4/5 mx-auto min-h-full " >
          <h1 className='font-extrabold  text-4xl  ' >{title}</h1>
          <img className='w-full object-cover rounded-3xl' src={image} alt="" />
          <h3 className='font-semibold  text-xl  mt-4' >{subTitle}</h3>
          <p>{desc}</p>

         

        </div>
    
  )
}

export default BlogsDisplay