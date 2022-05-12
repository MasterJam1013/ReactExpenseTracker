import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  //    array for chart data points label value
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  // loop through all expenses, get the month for every expense and update value of the appropriate data point -'of when using for look with an array
  for (const expense of props.expenses) {
    // Jan=0
    const expenseMonth = expense.date.getMonth();
    //increase value of given month by expense amount
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
