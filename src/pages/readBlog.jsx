import React from 'react'
import Header from '../components/Header'
import Profile from '../components/ProfileDetails'
import BlogsDisplay from '../components/BlogDisplay'
import Footer from '../components/Footer'

const ReadBlog = () => {
  return (
    <div>
        <Header/>
        <BlogsDisplay title="The Blogs Space"/>
        <Profile image="src/images/blogger.jpg" Username="Alon Zlatkin" Post="Founder & Co-Founder at Dogiz" userDetails="VC-hating vc, Aspiring Sci-Fi author" activities="Activities"/>
        <BlogsDisplay image="/src/images/blog.jpg" subTitle="The Life of a blogger" desc="Lorem ipsum dolor sit 
       amet consectetur adipisicing elit. Soluta sequi exercitationem voluptas in ut iure rerum dolore repellendus maiores voluptate veniam molestias numquam aliquid itaque commodi explicabo quas corrupti sunt ullam, saepe non aperiam? Suscipit laudantium vero facere eius sint, pariatur aperiam deleniti iure impedit quidem temporibus dolorem incidunt. Nam.
       Lorem ipsum dolor sit 
       amet consectetur adipisicing elit. Soluta sequi exercitationem voluptas in ut iure rerum dolore repellendus maiores voluptate veniam molestias numquam aliquid itaque commodi explicabo quas corrupti sunt ullam, saepe non aperiam? Suscipit laudantium vero facere eius sint, pariatur aperiam deleniti iure impedit quidem temporibus dolorem incidunt. Nam.Lorem ipsum dolor sit 
       amet consectetur adipisicing elit. Soluta sequi exercitationem voluptas in ut iure rerum dolore repellendus maiores voluptate veniam molestias numquam aliquid itaque commodi explicabo quas corrupti sunt ullam, saepe non aperiam? Suscipit laudantium vero facere eius sint, pariatur aperiam deleniti iure impedit quidem temporibus dolorem incidunt. Nam.Lorem ipsum dolor sit 
       amet consectetur adipisicing elit. Soluta sequi exercitationem voluptas in ut iure rerum dolore repellendus maiores voluptate veniam molestias numquam aliquid itaque commodi explicabo quas corrupti sunt ullam, saepe non aperiam? Suscipit laudantium vero facere eius sint, pariatur aperiam deleniti iure impedit quidem temporibus dolorem incidunt. Nam.Lorem ipsum dolor sit 
       amet consectetur adipisicing elit. Soluta sequi exercitationem voluptas in ut iure rerum dolore repellendus maiores voluptate veniam molestias numquam aliquid itaque commodi explicabo quas corrupti sunt ullam, saepe non aperiam? Suscipit laudantium vero facere eius sint, pariatur aperiam deleniti iure impedit quidem temporibus dolorem incidunt. Nam." more="/src/images/blogger.jpg"
       more1="/src/images/blogger.jpg" />
         <Footer more='src/images/blogger.jpg' more1='src/images/blogger.jpg' /> 

    </div>
  )
}

export default ReadBlog;