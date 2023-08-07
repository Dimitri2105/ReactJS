import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {


  let expenseContent = <p>No Expense Found !! </p>;
  if (props.items.length === 0) {
    return( <h3> Found No Expenses</h3>) 
  }
  return (
    <ul>
        {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}

    </ul>

  )
};

export default ExpensesList;
