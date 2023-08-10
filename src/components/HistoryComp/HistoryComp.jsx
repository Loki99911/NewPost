import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from 'redux/History/historySelectors';
import {
  HistoryСlearBtn,
  HistoryItem,
  HistoryList,
  HistorySelectBtn,
  HistoryTitle,
  HistoryWrapper,
} from './HistoryComp.styled';
import { clearHistory } from 'redux/History/historyReducer';

export const HistoryComp = ({ setCurrentNumber, setInputValue }) => {
    const historyList = useSelector(getHistory);
    const dispatch = useDispatch();
    
    const setValues = number => {
      setCurrentNumber(number);
      setInputValue(number);
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
      <HistoryСlearBtn onClick={getClearHistory}>Сlear</HistoryСlearBtn>
    </HistoryWrapper>
  );
};
