import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  function handleClickHome(){
    navigate('/');
  }
  function handleClickDash(){
    navigate('/dashboard');
  }
  return (
    <div>
        <h1>
            About page
        </h1>
        <button onClick=            {handleClickHome}>
              Move to Home page
            </button>
            <button onClick={handleClickDash}>
              Move to DashBoard page
        </button>
    </div>
  )
}

export default About