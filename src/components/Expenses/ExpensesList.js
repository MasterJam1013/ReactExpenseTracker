import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // condition if no expenses available for filtered year
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {/* execute dynamic expression in JSX code- map built in JS array method, takes a function- map filtered expenses with map  */}
      {props.items.map((expense) => (
        <ExpenseItem
          //  key is a prop that can be added to any component - used to identify invididual items by setting unique value per list item such as id (any primitive value can be used)
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
