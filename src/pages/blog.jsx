import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Title from "../components/Title";
const Blog = () => {
    return(
        <>
        <Header/>
        <Title/>
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
        </div>
      
      
    </div>

        </>
    );
};

export default Blog;