import React from 'react'

const sideBar = () => {
  return (
    <sideBar className="right-0 h-screen w-1/4 sticky top-0 bg-yellow-500" >
       <div className="side-bar">
       <h1>All Categories</h1>
        <p>Design & Brandin</p>
        <p>Website development</p>
        <p>App development</p>
        <p>Social Media</p>
        <p>Marketting Strategy</p>
        <p>Video Production</p>
       
       </div>
       <div className="latest-posts">
        <div className="post w-80 flex gap-3">
            <img className='w-32 rounded-md object-cover ' src="https://i.cbc.ca/1.4233350.1501762741!/fileImage/httpImage/soccer-barcelona-neymar.jpg" alt="Neymar" />
            <p>The Star boy</p>
        </div>
        <div className="post w-80 flex gap-3">
            <img src="https://i.cbc.ca/1.4233350.1501762741!/fileImage/httpImage/soccer-barcelona-neymar.jpg" alt="Neymar" />
            <p>The Star boy</p>
        </div>
        <div className="post w-80 flex gap-3">
            <img src="https://i.cbc.ca/1.4233350.1501762741!/fileImage/httpImage/soccer-barcelona-neymar.jpg" alt="Neymar" />
            <p>The Star boy</p>
        </div>
        <div className="post w-80 flex gap-3">
            <img src="https://i.cbc.ca/1.4233350.1501762741!/fileImage/httpImage/soccer-barcelona-neymar.jpg" alt="Neymar" />
            <p>The Star boy</p>
        </div>
       </div>

    </sideBar>
  )
}

export default sideBar