import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import BlogsDisplay from "../components/blogDisplay";
const Blog = () => {
    return(
        <>
        <Header/>
        <div className="app-container font-['Poppins', sans-serif] ">
             {/* <div className="details flex p-5 ">
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
       */}

      <BlogsDisplay title="The Blogs Space" image="/src/images/blog.jpg" subTitle="The Life of a blogger" desc="Lorem ipsum dolor sit 
       amet consectetur adipisicing elit. Soluta sequi exercitationem voluptas in ut iure rerum dolore repellendus maiores voluptate veniam molestias numquam aliquid itaque commodi explicabo quas corrupti sunt ullam, saepe non aperiam? Suscipit laudantium vero facere eius sint, pariatur aperiam deleniti iure impedit quidem temporibus dolorem incidunt. Nam.
       Lorem ipsum dolor sit 
       amet consectetur adipisicing elit. Soluta sequi exercitationem voluptas in ut iure rerum dolore repellendus maiores voluptate veniam molestias numquam aliquid itaque commodi explicabo quas corrupti sunt ullam, saepe non aperiam? Suscipit laudantium vero facere eius sint, pariatur aperiam deleniti iure impedit quidem temporibus dolorem incidunt. Nam.Lorem ipsum dolor sit 
       amet consectetur adipisicing elit. Soluta sequi exercitationem voluptas in ut iure rerum dolore repellendus maiores voluptate veniam molestias numquam aliquid itaque commodi explicabo quas corrupti sunt ullam, saepe non aperiam? Suscipit laudantium vero facere eius sint, pariatur aperiam deleniti iure impedit quidem temporibus dolorem incidunt. Nam.Lorem ipsum dolor sit 
       amet consectetur adipisicing elit. Soluta sequi exercitationem voluptas in ut iure rerum dolore repellendus maiores voluptate veniam molestias numquam aliquid itaque commodi explicabo quas corrupti sunt ullam, saepe non aperiam? Suscipit laudantium vero facere eius sint, pariatur aperiam deleniti iure impedit quidem temporibus dolorem incidunt. Nam.Lorem ipsum dolor sit 
       amet consectetur adipisicing elit. Soluta sequi exercitationem voluptas in ut iure rerum dolore repellendus maiores voluptate veniam molestias numquam aliquid itaque commodi explicabo quas corrupti sunt ullam, saepe non aperiam? Suscipit laudantium vero facere eius sint, pariatur aperiam deleniti iure impedit quidem temporibus dolorem incidunt. Nam." more="/src/images/blogger.jpg"
       more1="/src/images/blogger.jpg" />


       
        </div>

        </>
    );
};

export default Blog;