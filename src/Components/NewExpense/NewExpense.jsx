import { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const NewExpense = ({ expenses, setExpenses }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseSum, setExpenseSum] = useState(0);
  const [expenseDate, setExpenseDate] = useState('');

  const handleAddExpense = () => {
    const NewExpenseObj = {
      name: expenseName,
      sum: expenseSum,
      date: expenseDate,
      id: Math.random(),
    };
    setExpenses([...expenses, NewExpenseObj]); //
    setExpenseName('');
    setExpenseDate('');
    setExpenseSum(0);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAddExpense();
      }}
    >
      <Input
        text="expense name"
        type="text"
        value={expenseName}
        setData={setExpenseName}
      />
      <Input
        text="expense sum"
        type="number"
        value={expenseSum}
        setData={setExpenseSum}
      />
      <Input
        text="expense"
        type="date"
        value={expenseDate}
        setData={setExpenseDate}
      />
      <Button type="sumbit" nameButton="Add expense" />
    </form>
  );
};

export default NewExpense;
