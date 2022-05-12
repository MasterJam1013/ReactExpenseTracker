import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // useState can be called multiple times per component 'state slices' -initilize all states with a string
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // function to handle title change using vanilla JS 'event' value
    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    };
    // function to handle amount change using vanilla JS 'event' value
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
      };
    // function to handle date change using vanilla JS 'event' value
      const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
      };
    //function to handle form submit- must disable to prevent request being sent & browser page reload
    const submitHandler = (event) => {
        event.preventDefault();
    //Object to handle submit data -enforce number vconversion on amount (+)
    const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    };
    //execute prop to save expense data
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    };
  return (
      //default  'onSubmit' handled by function
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* 'onChange' event listener to trigger every keystroke and can be used for all input types- value attribute creates two way binding allowing to change data programatically with user input*/}
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number"  min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
          {/* function stored in onCancel executed when buttoin is clicked */}
      <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add  an Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
