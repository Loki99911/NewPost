import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHistory } from 'redux/History/historyReducer';
import { getHistory } from 'redux/History/historySelectors';
// import { getProductById } from 'redux/Package/packageOperations';

export const Form = ({
  inputValue,
  setInputValue,
  setCurrentNumber,
}) => {
  const dispath = useDispatch();
  const historyList = useSelector(getHistory);
  const [inputError, setInputError] = useState('');

  const handleSubmit = e => {
    const regex = /^\d{14}$/;
    if (!regex.test(inputValue)) {
      setInputError('Please enter a 14-digit number');
      return;
    }
    e.preventDefault();
    setCurrentNumber(inputValue);
    if (!historyList.includes(inputValue)) {
      dispath(setHistory(inputValue));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Please set TTN"
      />
      {inputError && <p style={{ color: 'red' }}>{inputError}</p>}
      <button>Get status TTN</button>
    </form>
  );
};
