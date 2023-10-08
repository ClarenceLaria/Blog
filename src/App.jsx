import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Header from './components/Header.jsx';
import sideBar from './components/sideBar';
import './App.css'; // Import your application-wide CSS file for styling if needed

const App = () => {
  return (
    <div className="app-container ">
      <Header />
      {/* Rest of your application */

      <div className="blog w-3/4 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   gap-4 px-5"  >

        <div className=" w-80 sample  px-4 shadow-md rounded-md py-3 items-center flex flex-col sm:justify-center ">
          <img className='w-60' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60" alt=" " />
          <p>Lionel Messi</p>
          <p>The Greatest of All Time </p>
        </div>

        <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
          <img className='w-60' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60" alt=" " />
          <p>Lionel Messi</p>
          <p>The Greatest of All Time </p>
        </div>

        <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
          <img className='w-60' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60" alt=" " />
          <p>Lionel Messi</p>
          <p>The Greatest of All Time </p>
        </div>

        <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
          <img className='w-60' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60" alt=" " />
          <p>Lionel Messi</p>
          <p>The Greatest of All Time </p>
        </div>

        <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
          <img className='w-60' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60" alt=" " />
          <p>Lionel Messi</p>
          <p>The Greatest of All Time </p>
        </div>

        <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
          <img className='w-60' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60" alt=" " />
          <p>Lionel Messi</p>
          <p>The Greatest of All Time </p>
        </div>

        
        <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
          <img className='w-60' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60" alt=" " />
          <p>Lionel Messi</p>
          <p>The Greatest of All Time </p>
        </div>

        
        <div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
          <img className='w-60' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60" alt=" " />
          <p>Lionel Messi</p>
          <p>The Greatest of All Time </p>
        </div>
      </div>
      
      }

      <sideBar/>


    </div>
    
  );
};

export default App;

