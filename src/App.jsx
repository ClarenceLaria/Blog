import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import './App.css'// Import your application-wide CSS file for styling if needed
import Blog from './pages/blog.jsx'
// import Header from './components/Header.jsx';
import Signup from "./pages/signup.jsx";
import Signin from "./pages/signin.jsx";
import Profile from "./pages/profile.jsx";
import ReadBlog  from './pages/readBlog';

class App extends Component {
  render(){
  return (
    <>
      <Router>
        <div className='App'>
            {/* <Link to="/"></Link>
            <Link to="/signup"></Link>
            <Link to="/"></Link> */}
        <Routes>
            {/* <Route exact path='/' element={<Header />}></Route> */}
            <Route exact path='/' element={<Blog />}></Route>
                <Route exact path='/signup' element={<Signup />}></Route>
                <Route exact path='/signin' element={<Signin />}></Route>
                <Route exact path='/profile' element={<Profile />}></Route>
                <Route exact path='/read' element={<ReadBlog />}></Route>
        </Routes>
        </div>
      </Router>
    </>

  );
}
}

export default App;

