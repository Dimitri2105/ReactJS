import React from "react";

import "./ExpenseForm.css";

function ExpenseForm() {

    const titleChangeHandler = (event) =>{
        console.log('title changes.....')
        console.log(event.target.value)
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type= "submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
