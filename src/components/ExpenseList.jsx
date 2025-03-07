import { Link } from "react-router-dom";

const ExpenseList = ({ showExpenseList, categoryToEmoji }) => {
  console.log("showExpenseList", showExpenseList);

  return (
    <div className="ui segment">
      <h3>Expense List</h3>
      {showExpenseList.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul className="ui list">
          {showExpenseList.map((expense) => (
            <li key={expense.id} className="item">
              <strong>
                {categoryToEmoji[expense.type] || "❓"} {expense.type}
              </strong>
              : ₹{expense.amount}
              <Link
                to="/deleteit"
                state={{ expense }} // Ensure only expense is passed
              >
                <i
                  className="trash alternate outline icon"
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                ></i>
              </Link>
              <Link to="/editList" state={{ expense }}>
                <i className="edit icon"></i>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
