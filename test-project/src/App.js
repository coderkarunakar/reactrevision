import React from 'react';
import "./App.css";
import Greeting from './Greeting';
//Functional component props 
//Fucntional component means that takes props as an argument and returns jsx element
//props are helpful to pass the data from one component to another component 
const Practice = () => {
  return (
    <div>
    <Greeting message = "Hello React"/>
    </div>
  )
}
export default Practice;
