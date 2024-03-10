import Expense from '../Expense/Expense';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expenseList">
      {expenses.map(({ name, sum, date, id }) => {
        return <Expense key={id} name={name} sum={sum} date={date} />;
      })}
    </div>
  );
};

export default ExpenseList;
