import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const clickHandeler = () =>{
    console.log('Clicked')
  }
  const deleteHandler = () =>{
    console.log('Deleted')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <ExpenseDetails title={props.title} amount={props.amount} /> */}
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick = {clickHandeler}>Change Title</button><br/>
      <button onClick = {deleteHandler}>Delete</button>
      
    </Card>
  );
}

export default ExpenseItem;
