import React from "react";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/Context";
import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <main>
        <h1>My Budget</h1>
        <header>
          <div className="budget">
            <Budget />
          </div>
          <div className="remaining">
            <Remaining />
          </div>
          <div className="total-expense">
            <ExpenseTotal />
          </div>
        </header>
        <div className="expenses-container">
          <div className="expenses">
            <h3>Expenses</h3>
            <div>
              <ExpenseList />
            </div>
          </div>

          <div className="add-form">
            <h3>Add Expense</h3>
            <div>
              <AddExpenseForm />
            </div>
          </div>
        </div>
      </main>
    </AppProvider>
  );
};

export default App;
