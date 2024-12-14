import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const DashBoard = () => {
  // const navigate = useNavigate();
  // function handleClickHome(){
  //   navigate('/');
  // }
  // function handleClickAbout(){
  //   navigate('/about');
  // }
  return (
    <div>
      
      Dashboard page
        
          {/* <button onClick={handleClickHome}>
              Move to Home page
            </button>
            <button onClick={handleClickAbout}>
              Move to About page
          </button> */}
      <Outlet/>
    </div>
  )
}

export default DashBoard