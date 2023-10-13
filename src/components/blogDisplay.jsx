import React from 'react'


function BlogsDisplay (props) {
  const image = props.image;
  const title = props.title;
   const subTitle = props.subTitle;
   const desc = props.desc;
   const more = props.more;
   const more1 = props.more1;
  return (
        <div className=" w-4/5 mx-auto min-h-full " >
          <h1 className='font-extrabold  text-4xl mb-2 ' >{title}</h1>
          <img className='w-full object-cover rounded-3xl' src={image} alt="" />
          <h3 className='font-semibold  text-xl  mt-4' >{subTitle}</h3>
          <p>{desc}</p>

          <h2 className='font-bold tect-2xl mt-3 underline' >More Posts</h2>
          <div className="moreBlogs w-full h-32  flex mt-4 mb-4 gap-4">
          <img className='w-52 object-cover rounded-xl ' src={more} alt="" />
          <img  className='w-52 object-cover rounded-xl ' src={more1} alt="" />
          </div>
         

        </div>
    
  )
}

export default BlogsDisplay