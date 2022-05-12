//Form to recieve user input
import React, { useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    //useState for new expense input
   const  [newInput, setNewInput] = useState(false);
    //define handler function for new user expense data input
    const saveExpenseDataHandler = (enteredExpenseData) => {
        //object for expense data
        const expenseData = {
            ...enteredExpenseData,
            //get random generated ID for new expense
            id: Math.random().toString()
        };
        //call function passed as value
        props.onAddExpense(expenseData);
        //close form when submitted
        setNewInput(false);
    };
//functiopns to start and stop input handlers - add new expense/cancel
    const startInputHandler = () => {
        setNewInput(true);
    };
    
    const stopInputHandler = () => {
        setNewInput(false);
    };

    return (
    <div className="new-expense">
        {/*condition newIpnput is false hide form -onClick to run start input handler variable when button clicked */}
        {!newInput && <button onClick={startInputHandler}>Enter New Expense</button>}
        {/*condition newInput is false display form -prop value function triggered when user saves new expense data or cancels new expense data*/}
       {newInput && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopInputHandler} /> }
    </div>
    );
};

export default NewExpense;