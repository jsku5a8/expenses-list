import { useState } from 'react';
import NewExpense from '../NewExpense/NewExpense';
import ExpenseList from '../ExpenseList/ExpenseList';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  console.log(expenses);
  return (
    <div>
      <NewExpense expenses={expenses} setExpenses={setExpenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Expenses;
