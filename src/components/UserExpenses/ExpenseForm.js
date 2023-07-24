import React , {useState} from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle , setEnteredTitle] = useState('')

  const [enteredAmount , setEnteredAmount] = useState('')

  const [enteredDate , setEnteredDate] = useState('')

  // const [userInput , setUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount : '',
  //   enteredDate : ''
  // })


    const titleChangeHandler = (event) =>{
        console.log('title changes.....')
        console.log(event.target.value)
        setEnteredTitle(event.target.value)
        // setUserInput({
        //   ...userInput , 
        //   enteredTitle : event.target.value
        // })
    }
    const amountChangeHandler = (event) =>{
      console.log('Amount Changed')
      console.log(event.target.value)
      setEnteredAmount(event.target.value)
      // setUserInput({
      //   ...userInput , 
      //   enteredAmount : event.target.value
      // })
    }
    const dateChangeHandler = (event) =>{
      console.log('Date Changed')
      console.log(event.target.value)
      setEnteredDate(event.target.value)
      // setUserInput({
      //   ...userInput , 
      //   enteredDate  : event.target.value
      // })
      // setUserInput( (prevState) =>{
      //   return ({
      //     ...prevState ,
      //     enteredDate  : event.target.value

      //   })
      // })
      
    }
    const submitHandler = (event) =>{
      event.preventDefault()
      const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
      }
      console.log(expenseData)


    }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type= "submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
