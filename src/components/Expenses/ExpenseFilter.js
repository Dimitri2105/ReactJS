import react from "react";

function ExpenseFilter(props) {
  const dropfilterYearHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div>
      <label>Filter By Year</label>
      <select value={props.selected} onChange={dropfilterYearHandler}>
        <option value="2022">2022</option>
        <option value="2022">2021</option>
        <option value="2022">2020</option>
        <option value="2022">2019</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
