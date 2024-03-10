import './Input.css';

const Input = ({ text, type, value, setData }) => {
  return (
    <input
      placeholder={text}
      type={type}
      value={value}
      onChange={(event) => {
        setData(event.target.value);
      }}
    />
  );
};

export default Input;
