import React, { useState } from "react";
import NewExpances from "./componant/NewExpances/NewExpances";

import NestedExpance from './componant/expances/NestedExpance';
// import Expance from "./componant/Expance";
let DummyExp = [
  {
    id: 'e1',
    title: 'school fees',
    amount: 250,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'e2',
    title: 'books',
    amount: 550,
    date: new Date(2021, 8, 22)
  },
  {
    id: 'e3',
    title: 'foods',
    amount: 450,
    date: new Date(2021, 10, 18)
  },
  {
    id: 'e4',
    title: 'house rent',
    amount: 15000,
    date: new Date(2021, 10, 11)
  }

];

const App = () => {


  const [expances, setExpances] = useState(DummyExp)

  const addExpanceHandler = (expance) => {
    // const updatedExpances = [expance, ...expances]
console.log(expance);
console.log('app.js');
    setExpances(prevExpenses=>{
      return[expance,...prevExpenses]
    })
    // setExpances(updatedExpances);
    
  }


  return (
    <div>


      <NewExpances onAddExpance={addExpanceHandler} />
      <NestedExpance item={expances} />
 
    </div>
  );
}


export default App;  
