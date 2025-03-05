import { useState } from "react";

const ExpenseForm = ({ addExpenseHandler }) => {
  const [state, setState] = useState({ type: "", amount: "" });
  console.log("state", state);

  const clickTheBar = (e) => {
    e.preventDefault();
    if (state.amount == "" || state.type == "") {
      alert("all fields are jaruri");
      return;
    }

    addExpenseHandler(state);
    setState({ type: "", amount: "" });
  };

  return (
    <div className="ui main" style={{ marginLeft: "15px", marginTop: "20px" }}>
      <form className="ui form" onSubmit={clickTheBar}>
        <p className="input text">Type:</p>
        <input
          type="text"
          name="name"
          placeholder="Like Rent etc..."
          value={state.type}
          onChange={(e) => setState({ ...state, type: e.target.value })}
        />
        <p className="input text" style={{ marginTop: "25px" }}>
          Amount:
        </p>
        <input
          type="text"
          className="ui text"
          placeholder="Like 2000"
          value={state.amount}
          onChange={(e) => {
            setState({ ...state, amount: e.target.value });
          }}
        />

        <button className="ui button" style={{ marginTop: "23px" }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
