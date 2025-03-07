import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditExpenseList = ({ updaterInApp }) => {
  const location = useLocation();
  const nevigator = useNavigate();
  const initialExpense = location.state?.expense;
  const [expense2, setExpense2] = useState(initialExpense);

  const clickTheBar = (e) => {
    e.preventDefault();
    console.log("after expense2", expense2);
    updaterInApp(expense2);
    nevigator("/");
    return expense2;
  };

  return (
    <div className="ui main" style={{ marginLeft: "15px", marginTop: "20px" }}>
      <form className="ui form" onSubmit={clickTheBar}>
        <p className="input text">Type:</p>
        <input
          type="text"
          name="name"
          value={expense2.type}
          onChange={(e) => setExpense2({ ...expense2, type: e.target.value })}
        />
        <p className="input text" style={{ marginTop: "25px" }}>
          Amount:
        </p>
        <input
          type="text"
          className="ui text"
          value={expense2.amount}
          onChange={(e) => setExpense2({ ...expense2, amount: e.target.value })}
        />

        <button className="ui button" style={{ marginTop: "23px" }}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditExpenseList;
