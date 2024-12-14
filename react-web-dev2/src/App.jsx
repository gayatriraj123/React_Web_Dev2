import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import DashBoard from './components/dashBoard'

const router = createBrowserRouter(
  [
    //router creation
    {
      path:"/",
      element: <Home/>,
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/dashboard",
      element:<DashBoard/>,
    },
  ]
);

const App = () => {
  return (
    
    <>
      {/* <div>
        <h1>Hello World</h1>
      </div> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App