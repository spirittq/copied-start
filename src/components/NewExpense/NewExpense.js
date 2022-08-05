import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const onShowExpenseFormHandler = () => {
    setShowExpenseForm((prevShowExpenseForm) => {
      return !prevShowExpenseForm;
    });
  };

  const addNewExpense = (
    <button onClick={onShowExpenseFormHandler}>Add New Expense</button>
  );

  const expenseComponent = showExpenseForm ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onShowExpenseForm={onShowExpenseFormHandler}
    />
  ) : (
    addNewExpense
  );

  return <div className="new-expense">{expenseComponent}</div>;
};

export default NewExpense;
