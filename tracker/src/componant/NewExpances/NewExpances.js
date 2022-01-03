import React from "react";
import ExpanceForm from "./ExpaceForm";

import './NewExpances.css';

const NewExpances = (props) =>{
  const saveExpanceDataHandler = (enteredExpanceInfo) =>{
    const expanceinfo = {
      ...enteredExpanceInfo,
       id:Math.random().toString  
      //  math.random this method can access any no in 0 to 9 for id
    }
    props.onAddExpance(expanceinfo);
    console.log(expanceinfo);  
  };
  // saveExpanceDataHandler is act likes event handler and also like prop...
  return(
  <div className="new-expance">
  <ExpanceForm onsaveExpanceData={saveExpanceDataHandler}  />

  </div> 
  );
}

export default NewExpances;