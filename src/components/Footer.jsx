import React from 'react'


function Footer(props){
    const more = props.more;
    const more1 = props.more1; 
  return (
    <div className='mx-auto w-4/5'>
          <h2 className='font-bold tect-2xl mt-3 underline' >More Posts</h2>
          <div className="moreBlogs w-full h-32  flex mt-4 mb-4 gap-4">
          <img className='w-52 object-cover rounded-xl ' src={more} alt="" />
          <img  className='w-52 object-cover rounded-xl ' src={more1} alt="" />
          </div>
    </div>
  )
}

export default Footer;