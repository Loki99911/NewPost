import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from 'redux/History/historySelectors';
import {
  HistoryItem,
  HistoryList,
  HistorySelectBtn,
  HistoryTitle,
  HistoryWrapper,
} from './HistoryComp.styled';
import { clearHistory } from 'redux/History/historyReducer';
import { OrangeButton } from 'components/OrangeButton/OrangeButton';

export const HistoryComp = ({ setCurrentNumber, setInputValue, setInputError }) => {
  const historyList = useSelector(getHistory);
  const dispatch = useDispatch();

  const setValues = number => {
    setCurrentNumber(number);
    setInputValue(number);
    setInputError("");
  };

  const getClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <HistoryWrapper>
      <HistoryTitle>Історія</HistoryTitle>
      <HistoryList>
        {historyList.map(number => (
          <HistoryItem key={number}>
            <HistorySelectBtn onClick={() => setValues(number)}>
              {number}
            </HistorySelectBtn>
          </HistoryItem>
        ))}
      </HistoryList>
      <OrangeButton onClick={getClearHistory}>Сlear</OrangeButton>
    </HistoryWrapper>
  );
};
