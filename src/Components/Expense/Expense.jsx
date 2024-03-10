import Button from '../UI/Button/Button';
import './Expense.css';

const Expense = ({ name, sum, date }) => {
  return (
    <div className="expenseBox">
      <p className="expenseName">{name}</p>
      <p className="expenseSum">{sum}</p>
      <p className="expenseDate">{date}</p>
      <Button nameButton="delete" />
      <Button nameButton="update" />
    </div>
  );
};

export default Expense;
