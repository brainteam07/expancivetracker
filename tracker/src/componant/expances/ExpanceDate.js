import React from 'react';
import './ExpanceDate.css';

const ExpanceDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});

    return(
        <div className="expance-date">
            <div className="expance-date-month">{ month }</div>
            <div className="expance-date-year">{ year }</div>
            <div className="expance-date-day">{ day }</div>
        </div>
        
    );
}
export default ExpanceDate;
