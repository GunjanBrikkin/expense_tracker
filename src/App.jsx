import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BalanceCard from "./components/BalanceCard";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [expense, setExpense] = useState([]);

  const addExpenseHandler = (state) => {
    setExpense([...expense, state]);
  };

  console.log("expense", expense);

  return (
    <div className="main">
      <Header />
      <BalanceCard />
      <ExpenseForm addExpenseHandler={addExpenseHandler} />
      <ExpenseList showExpenseList={expense} />
    </div>
  );
}

export default App;
