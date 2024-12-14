import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import DashBoard from './components/dashBoard'
import NavBar from './components/NavBar'
import ParamComponent from './components/ParamComponent'
import Courses from './components/Courses'
import Mock_test from './components/Mock_test'
import Reports from './components/Reports'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    //router creation
    {
      path:"/",
      element: 
        <div>
            <NavBar/>
            <Home/>
        </div>
      ,
    },
    {
      path:"/about",
      element:
      <div>
        <NavBar/>
        <About/>
       </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <NavBar/>
        <DashBoard/>
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'mock-test',
          element:<Mock_test/>
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <NavBar/>
        <ParamComponent/>
      </div>
    },
    {
      path:'*',
      element:<NotFound/>,
    }
  ]
);

const App = () => {
  return (
    
    <>
      {/* <NavBar/> */}
      {/* <div>
        <h1>Hello World</h1>
      </div> */}
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App