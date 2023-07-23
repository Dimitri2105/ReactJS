import React ,{useState} from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {

  const [title , setTitle] = useState(props.title)
 
  const clickHandeler = () =>{
    setTitle('Updated')
  }
  const deleteHandler = () =>{
    console.log('Deleted')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <ExpenseDetails title={props.title} amount={props.amount} /> */}
      <div className="expense-item__description">
        <h3>{title}</h3>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick = {clickHandeler}>Change Title</button><br/>
      <button onClick = {deleteHandler}>Delete</button>
      
    </Card>
  );
}

export default ExpenseItem;
