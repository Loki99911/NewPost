import { Form } from 'components/Form/Form';
import { PackageComp } from 'components/PackageComp/PackageComp';
import { useDispatch, useSelector } from 'react-redux';
import { getPackages } from 'redux/Package/packageSelectors';
import { InfoPlate, MainWrapper } from './MainPage.styled';
import { HistoryComp } from 'components/HistoryComp/HistoryComp';
import { useEffect, useState } from 'react';
import { getProductById } from 'redux/Package/packageOperations';
import { getHistory } from 'redux/History/historySelectors';

const MainPage = () => {
  const dispath = useDispatch();
  const lastPackage = useSelector(getHistory);
  const yourPackage = useSelector(getPackages);
  const [currentNumber, setCurrentNumber] = useState(lastPackage[0]||'');
  const [inputValue, setInputValue] = useState(lastPackage[0] || '');
  
  
  useEffect(() => {
    dispath(getProductById(currentNumber));
  }, [dispath, currentNumber]);

  return (
    <MainWrapper>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCurrentNumber={setCurrentNumber}
      />
      {yourPackage.length !== 0 && (
        <InfoPlate>
          <PackageComp packageObj={yourPackage[0]} />
          <HistoryComp
            setCurrentNumber={setCurrentNumber}
            setInputValue={setInputValue}
          />
        </InfoPlate>
      )}
    </MainWrapper>
  );
};

export default MainPage;
