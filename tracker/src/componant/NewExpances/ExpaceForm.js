 import React,{useState} from "react";

import './ExpanceForm.css';  

const ExpanceForm = (props) =>{ 


const [enteredTitle,setEnteredTitle] = useState("");
const [enteredAmout,setEnteredAmount] = useState("");
const [enteredDate,setEnteredDate] = useState("");

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value); 
    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value); 
    };
    const dateChangeHandler = (event) =>{ 
        setEnteredDate(event.target.value); 
    };

    const submitHandler = (event)=>{
      event.preventDefault();
      
      const expanceinfo ={
        
           title:enteredTitle,
           amount:enteredAmout,
           date:new Date(enteredDate)
      }
      props.onsaveExpanceData(expanceinfo); 
      console.log(expanceinfo);
 
     
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
       
    }; 
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
               <div className="new-expense__control ">
                    <label>Title</label>
                    <input type ="text" value={enteredTitle} onChange={ titleChangeHandler} />
           </div>
           
               <div className="new-expense__control ">
                    <label>Amount</label>
                    <input type ="number" value = {enteredAmout} min="0.01" step="0.01" onChange={amountChangeHandler}/>
           </div>
           
               <div className="new-expense__control ">
                    <label>Date</label>
                    <input type ="date" value={enteredDate} onChange={dateChangeHandler} />
           </div>
         </div>
          <div className="new-expense__actions">
          <button type="submit">Add Expense</button>

          </div>
      </form>  
    );
}

export  default ExpanceForm;

// two way binding method in that we can access data and set the data