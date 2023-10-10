import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import HomePage from './pages/Home.jsx';
import Signup from './pages/signup.jsx';
import Signin from './pages/signin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "blog/",
    element: <HomePage/>,
  },
  {
    path: "signup/",
    element: <Signup></Signup>,
  },
  {
    path: "signin/",
    element: <Signin/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);


