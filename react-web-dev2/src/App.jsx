// import React from 'react'
import './App.css'
import {createBrowserRouter, data, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import DashBoard from './components/dashBoard'
import NavBar from './components/NavBar'
import ParamComponent from './components/ParamComponent'
import Courses from './components/Courses'
import Mock_test from './components/Mock_test'
import Reports from './components/Reports'
import NotFound from './components/NotFound'
import { useForm } from "react-hook-form"


// const router = createBrowserRouter(
//   [
//     //router creation
//     {
//       path:"/",
//       element: 
//         <div>
//             <NavBar/>
//             <Home/>
//         </div>
//       ,
//     },
//     {
//       path:"/about",
//       element:
//       <div>
//         <NavBar/>
//         <About/>
//        </div>
//     },
//     {
//       path:"/dashboard",
//       element:
//       <div>
//         <NavBar/>
//         <DashBoard/>
//       </div>,
//       children:[
//         {
//           path:'courses',
//           element:<Courses/>
//         },
//         {
//           path:'mock-test',
//           element:<Mock_test/>
//         },
//         {
//           path:'reports',
//           element:<Reports/>
//         }
//       ]
//     },
//     {
//       path:"/student/:id",
//       element:
//       <div>
//         <NavBar/>
//         <ParamComponent/>
//       </div>
//     },
//     {
//       path:'*',
//       element:<NotFound/>,
//     }
//   ]
// );

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors, isSubmitting},
    } = useForm();

      async function onSubmit(data)
    {
      await new Promise((resolve) => setTimeout(resolve, 5000))
      console.log("Submitting the form ", data);
    }
  return (
    <div>
      {/* <NavBar/> */}
      {/* <div>
        <h1>Hello World</h1>
      </div> */}
      {/* <RouterProvider router={router}/> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>First Name: </label>
            <input className={errors.firstName ? "input-error": ""}
            {...register('firstName', 
            { required: true , 
            minLength:{value:3, message:"min len atleast 3"},
            maxLength:{value:7, message:"max len atleast 7"}
            })}/>
            {errors.firstName && <p className='error-messege'>{errors.firstName.message}</p>}
            
        </div>
        <br/>
        <div>
            <label>Middle Name: </label>
            <input {...register('middleName',
             { required: true , 
            minLength:{value:3, message:"min len atleast 3"},
            maxLength:{value:10, message:"max len atleast 7"}
            })}/>
            {errors.middleName && <p className='error-messege'>{errors.middleName.message}</p>}
        </div>
        <br/>
        <div>
            <label>Last Name: </label>
            <input {...register('lastName',
             { required: true , 
            minLength:{value:3, message:"min len atleast 3"},
            maxLength:{value:10, message:"max len atleast 7"}
            })} />
            {errors.lastName && <p className='error-messege'>{errors.lastName.message}</p>}
        </div>
        <br/>
        <input type='submit' disabled={isSubmitting}
          value={isSubmitting ? "Submitting":"Submit"}
        />
    </form>
    </div>

  )
}

export default App