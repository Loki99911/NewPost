import { useDispatch, useSelector } from 'react-redux';
import { setHistory } from 'redux/History/historyReducer';
import { getHistory } from 'redux/History/historySelectors';
// import { getProductById } from 'redux/Package/packageOperations';

export const Form = ({ inputValue, setInputValue, setCurrentNumber }) => {
  const dispath = useDispatch();
  const historyList = useSelector(getHistory);

  const handleSubmit = e => {
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
      <button>Get status TTN</button>
    </form>
  );
};
