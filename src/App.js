import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

//dummy data used to initialize state
const InitialExpenses = [
  {
    id: "e1",
    title: "Tech Loan",
    amount: 384.87,
    date: new Date(2022, 0, 19),
  },
  { id: "e2", 
  title: "New TV", 
  amount: 799.49, 
  date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

//using arrow syntax as alternative to 'function'
const App = () => {
  //destructuring to access expenses and set expenses update function
   const [expenses, setExpenses] = useState(InitialExpenses);

 //function to add expense
  const addExpenseHandler= (expense) => {
    //pass function as argument to state updating function
    setExpenses((prevExpenses) => {
     //return expenses array to new expense by passing new array and using spread operator...-to populate new array with existing elements
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
