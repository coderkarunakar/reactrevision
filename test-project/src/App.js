import React, { useState } from 'react';
import "./App.css";
//Functional component props 
//Fucntional component means that takes props as an argument and returns jsx element
//props are helpful to pass the data from one component to another component 
const Practice = () => {
  const [message, setMessage] = useState ("React World!");
  const changeMessage = () => {
    setMessage("Hello functional Compoent");
  }
  return (
    <div>
      <p>{message}</p>
      <button type='button' onClick={changeMessage} className='functionalcompbutton'>
        Click Me Please !
      </button>
    </div>
  )
  
}
export default Practice;
