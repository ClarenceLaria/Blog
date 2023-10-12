import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
const Blog = () => {
    return(
        <>
        <Header/>
        <div className="app-container font-['Poppins', sans-serif] ">
  <div className="details flex p-5 ">
  <div className="blog grid grid-cols-1 lg:grid-cols-2  flex-1 gap-10 lg:px-12"  >

    <Card image="/src/images/lionel.jpeg" title="Lionel Messi" description="The Greatest of All Time "/>
    <Card image="/src/images/lionel.jpeg" title="Lionel Messi" description="The Greatest of All Time "/>
    <Card image="/src/images/lionel.jpeg" title="Lionel Messi" description="The Greatest of All Time "/>
    <Card image="/src/images/lionel.jpeg" title="Lionel Messi" description="The Greatest of All Time "/>
    <Card image="/src/images/lionel.jpeg" title="Lionel Messi" description="The Greatest of All Time "/>
    <Card image="/src/images/lionel.jpeg" title="Lionel Messi" description="The Greatest of All Time "/>
    <Card image="/src/images/lionel.jpeg" title="Lionel Messi" description="The Greatest of All Time "/>

</div>

{/* <div className="sidebar grid w-1/5  right-0   flex-col  fixed  -mt-20 h-full text-sm  ">
<div className="side-bar -mt-20  ml-5 mb-2 " >
          <h1 className=' text-lg font-semibold  '>All Categories</h1>
              <p className=' cursor-pointer hover:text-orange-400 transition-all ease-in-out mb-2'>Design & Brandin</p>
              <p className=' cursor-pointer hover:text-orange-400 transition-all ease-in-out mb-2'>Website development</p>
              <p className=' cursor-pointer hover:text-orange-400 transition-all ease-in-out mb-2'>App development</p>
              <p className=' cursor-pointer hover:text-orange-400 transition-all ease-in-out mb-2'>Social Media</p>
              <p className=' cursor-pointer hover:text-orange-400 transition-all ease-in-out mb-2 '>Marketting Strategy</p>
              <p className=' cursor-pointer hover:text-orange-400 transition-all ease-in-out mb-4 '>Video Production</p>

</div>
<div className="latest-posts -mt-96">
<div className="post w-100% flex gap-2 p-4 rounded-md justify-center items-center shadow-md cursor-pointer mb-4 ">
    <img className=' float-left w-24 rounded-md object-cover ' src="https://i.cbc.ca/1.4233350.1501762741!/fileImage/httpImage/soccer-barcelona-neymar.jpg" alt="Neymar" />
    <div className="words flex flex-col">
    <p className='title' >Neymar Jr</p>
    <p className='details' >The Star boy</p>
    </div>
    
</div>
<div className="post w-100% flex gap-3 shadow-md p-4 rounded-md justify-center items-center cursor-pointer ">
    <img className='w-24 rounded-md object-cover ' src="https://i.cbc.ca/1.4233350.1501762741!/fileImage/httpImage/soccer-barcelona-neymar.jpg" alt="Neymar" />
    <div className="words flex flex-col">
    <p className='title' >Neymar Jr</p>
    <p className='details' >The Star boy</p>
    </div>
    
</div>

</div>

</div>  */}
        </div>
      
      
    </div>

        </>
    );
};

export default Blog;