import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BalanceCard from "./components/BalanceCard";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import SumOfAmount from "./components/SumOfAmount";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeleteSure from "../src/components/DeleteSure";
import { v4 as uuidv4 } from "uuid";
import EditExpenseList from "../src/components/EditExpence";

function App() {
  const [expense, setExpense] = useState([]);
  const LOCAL_STORAGE_KEY = "key";

  const addExpenseHandler = (state) => {
    console.log("state magic", state);
    setExpense([...expense, { ...state, id: uuidv4() }]);
  };

  const DeleteOperation = (id) => {
    const newExpense = expense.filter((item) => {
      return item.id !== id;
    });

    console.log("newExpense", newExpense);
    setExpense(newExpense);
  };

  console.log("expense", expense);

  const updaterInApp = (updatedExpense) => {
    setExpense(
      expense.map((item) =>
        item.id === updatedExpense.id ? updatedExpense : item
      )
    );
  };

  var arr = [];

  expense.map((e) => {
    arr.push(e.amount);
  });

  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + Number(arr[i]);
  }

  useEffect(() => {
    const retriveFromLocalStorage =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    if (retriveFromLocalStorage.length > 0) {
      setExpense(retriveFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expense));
  }, [expense]);

  return (
    <div className="main" style={{ marginLeft: "67px" }}>
      <Router>
        <Header />
        <Routes>
          {/* Show expenses on home page */}
          <Route
            path="/"
            element={
              <>
                <ExpenseForm addExpenseHandler={addExpenseHandler} />
                <ExpenseList showExpenseList={expense} />
                <SumOfAmount totalAmount={sum} />
                <BalanceCard />
              </>
            }
          />
          {/* Delete Confirmation Page */}
          <Route
            path="/deleteit"
            element={<DeleteSure clickHandler={DeleteOperation} />}
          />
          <Route
            path="/editList"
            element={<EditExpenseList updaterInApp={updaterInApp} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
