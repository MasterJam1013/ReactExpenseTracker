import './ExpenseDate.css';

const ExpenseDate = (props) =>{
 //built in method for JS date objects-requires two args - year built in method
 const month = props.date.toLocaleString('en-US', {month: 'long'});
 const day = props.date.toLocaleString('en-US', {day: '2-digit'});
 const year = props.date.getFullYear();

 return (
    <div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
</div>
 );
}

export default ExpenseDate;