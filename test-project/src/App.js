import React from 'react';
//Functional component props 
//Fucntional component means that takes props as an argument and returns jsx element
//props are helpful to pass the data from one component to another component 
const practice = (props) => {
  return <div>HELLO {props.name}</div>
}
export default practice;
