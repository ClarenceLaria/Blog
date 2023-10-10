
import './App.css'

import Header from './pages/Header.jsx';
import './App.css'; // Import your application-wide CSS file for styling if needed

const App = () => {
  return (
    <div className="app-container font-['Poppins', sans-serif] ">
      <Header />
      {/* Rest of your application */
        <div className="details flex p-5 ">
          <div className="blog w-4/5 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 "  >

<div className=" w-80 sample  px-4 shadow-md rounded-md py-3 items-center flex flex-col sm:justify-center ">
  <img className='w-60' src="/src/images/lionel.jpeg" alt=" " />
  <p className='title'>Lionel Messi</p>
  <p>The Greatest of All Time </p>
</div>

<div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
  <img className='w-60' src="/src/images/lionel.jpeg"  alt=" " />
  <p className='title'>Lionel Messi</p>
  <p>The Greatest of All Time </p>
</div>

<div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
  <img className='w-60' src="/src/images/lionel.jpeg"  alt=" " />
  <p className='title'>Lionel Messi</p>
  <p>The Greatest of All Time </p>
</div>

<div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
  <img className='w-60' src="/src/images/lionel.jpeg"  alt=" " />
  <p className='title'>Lionel Messi</p>
  <p>The Greatest of All Time </p>
</div>

<div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
  <img className='w-60'src="/src/images/lionel.jpeg"  alt=" " />
  <p className='title'>Lionel Messi</p>
  <p>The Greatest of All Time </p>
</div>

<div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
  <img className='w-60' src="/src/images/lionel.jpeg"  alt=" " />
  <p className='title'>Lionel Messi</p>
  <p>The Greatest of All Time </p>
</div>


<div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
  <img className='w-60' src="/src/images/lionel.jpeg"  alt=" " />
  <p className='title' >Lionel Messi</p>
  <p>The Greatest of All Time </p>
</div>


<div className="w-80 sample justify-around px-4 shadow-md rounded-md py-3 items-center flex flex-col ">
  <img className='w-60'src="/src/images/lionel.jpeg"  alt=" " />
  <p className='title'>Lionel Messi</p>
  <p>The Greatest of All Time </p>
</div>
</div>

<div className="sidebar grid w-1/5  right-0   flex-col  fixed  -mt-20 h-full text-sm  ">
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

</div> 
        </div>
      
      
      }
    </div>
    
  );
};

export default App;

