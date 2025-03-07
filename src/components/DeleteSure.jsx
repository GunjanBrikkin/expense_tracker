import { useNavigate, useLocation } from "react-router-dom";

const DeleteSure = ({ clickHandler }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const expense = location.state?.expense;
  const id = expense?.id;

  console.log("===", expense);
  console.log("id", id);
  console.log("clickHandler", clickHandler); // Debugging

  const deleteThisOnly = () => {
    if (clickHandler && id) {
      clickHandler(id); // ✅ Call delete function
      navigate("/"); // ✅ Go back home
    } else {
      console.error("clickHandler is missing or id is undefined.");
    }
  };

  if (!expense) {
    return (
      <div>
        <h1>Error: No expense found to delete.</h1>
        <button className="ui button blue" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ marginTop: "34px" }}>
        Are you sure you want to delete {expense.type}: ₹{expense.amount}?
      </h1>
      <button className="ui button blue" onClick={deleteThisOnly}>
        Yes
      </button>
      <button className="ui button blue" onClick={() => navigate(-1)}>
        Cancel
      </button>
    </div>
  );
};

export default DeleteSure;
