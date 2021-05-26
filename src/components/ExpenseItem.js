import "./ExpenseItem.css";

function ExpenseItem(props) {
  const day = props.date.toLocaleString("es-MX", { day: "2-digit" });
  const month = props.date.toLocaleString("es-MX", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>{day}-</div>
      <div>{month}-</div>
      <div>{year}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
