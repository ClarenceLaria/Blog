import React from 'react'
import { motion } from 'framer-motion';



function Card(props) {
    const image = props.image;
    const title = props.title;
    const description  = props.description;
    const date = props.date;
  return (
<div className="rounded-md py-3 items-center">
    <motion.img 
     whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
    className='object-cover w-full hover:shadow-xl hover:rounded-2xl cursor-pointer 'src={image}  alt=" " />
    <div className='pt-6'>
    <p className='title'>{title}</p>
    <p>{description}</p>
    </div>
   
    
</div>
  )
}

export default Card