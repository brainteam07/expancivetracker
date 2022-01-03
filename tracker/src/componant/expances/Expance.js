import React, { useState } from "react";
//   useState is hook in reactlibray its import in react  useState is basically function  
import './Expance.css';

import ExpanceDate from './ExpanceDate';

import Card from '../UI/Card';

const Expance = (props) => {

        const [newTitle, setNewTitle] = useState("");

        const [title, setTitle] = useState(props.title);
        //   useState function its always have bydefault  value useState function return  array its is declear in variabl form so,
        //  we have destructuring form in that 2 values are return like title and settitle... title is variable and settitle is function this function is dynamically changes
        // like clickHandler function is work in setTitle
        const clickHandler = () => {
                setTitle(newTitle)
         }
        const changeHandler = (event) =>{
                setNewTitle(event.target.value);
        }
        // event(keyword as parameter) is  an object like represent an event which takes place in th DOM
        // a event can be triggered by the user action e.g clicking the mouse button or 
        // tpping the mouse button or tapping keyboard,or generted by APIs to represented the progrss of an asynchronous task.
//        it can also triggered programmatically ,such as by callig the HTMLElement. 
        //  setNewTitle(event.target.value); in that target is refer to input tag="text"  and value  is  refer to property of value="  " by event object


        return (
                <Card className="exp-item">
                        <ExpanceDate date={props.date} />
                        <div className="exp-item-decription">
                                <h2>{props.title}</h2>
                                <div className="exp-item-price"> {props.amount} </div>
                        </div>
                       
                </Card>
        
        );
}  
export default Expance;
