import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  // function to handle filter change handler by year
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // use built in JS filter function to filter list by selected year-returns new array
  const filteredExpenses = props.items.filter((expense) => {
    //   get full year and convert to a string then compare (===) to filtered year selected by user- returns true or false
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/*Controlled component using two way binding- value used in the component passed to parent component through props and recieved from parent component  */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
