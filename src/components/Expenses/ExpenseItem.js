// inside curly braces- use a named import with default react library to import a 'useState' built in function to return a stateful value
import React, { useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
// React hook to assign value you want to change which returns an Array with two elements (current state vale and updated function), use array destructing [] to store both values
// All react hooks that start with 'use' and must be called in the component function
const [title, setTitle] = useState(props.title);

// function for btn onCLick event listener calling updated useState function for specific state change per component
const clickHandler = () => {
    setTitle(title);
};
  return (
      <li>
          <Card className="expense-item">
        {/* forwarding data with props through multiple components date, title, amount*/}
      <ExpenseDate  date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
        {/*point to event handler with function name - if an element supports an event you can add a listener with the 'on' and event name prop*/}
      <button onClick={clickHandler}>Edit</button>
    </Card>
      </li>
    
  );
}

export default ExpenseItem;
