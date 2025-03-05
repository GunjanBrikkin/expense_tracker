const ExpenseList = ({ showExpenseList }) => {
  console.log("showExpenseList", showExpenseList);
  return (
    <div className="ui segment">
      <h3>Expense List</h3>
      {showExpenseList.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul className="ui list">
          {showExpenseList.map((expense, index) => (
            <li key={index} className="item">
              <strong>{expense.type}</strong>: ₹{expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
