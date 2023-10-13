import React from 'react'
import Header from '../components/Header'
import Profile from '../components/ProfileDetails'

const ReadBlog = () => {
  return (
    <div>
        <Header/>
        <Profile image="src/images/blogger.jpg" Username="Alon Zlatkin" Post="Founder & Co-Founder at Dogiz" userDetails="VC-hating vc, Aspiring Sci-Fi author" activities="Activities"/>
    </div>
  )
}

export default ReadBlog;