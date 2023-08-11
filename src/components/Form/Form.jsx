import { useDispatch, useSelector } from 'react-redux';
import { setHistory } from 'redux/History/historyReducer';
import { getHistory } from 'redux/History/historySelectors';
import { PackageErrorText, PackageForm, PackageInput } from './Form.styled';
import { OrangeButton } from 'components/OrangeButton/OrangeButton';

export const Form = ({
  inputValue,
  setInputValue,
  setCurrentNumber,
  inputError,
  setInputError,
}) => {
  const dispath = useDispatch();
  const historyList = useSelector(getHistory);

  const handleSubmit = e => {
    e.preventDefault();
    const regex = /^\d{14}$/;
    if (!regex.test(inputValue)) {
      setInputError('Невірно вказан номер TTN!');
      return;
    }
    setCurrentNumber(inputValue);
    if (!historyList.includes(inputValue)) {
      dispath(setHistory(inputValue));
    }
  };

  const handleCityInputChange = e => {
    e.preventDefault();
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    setInputError('');
  };

  return (
    <PackageForm onSubmit={handleSubmit}>
      <PackageInput
        type="text"
        onChange={handleCityInputChange}
        value={inputValue}
        placeholder="Будь ласка, вкажіть TTN."
      />
      <OrangeButton>Get status TTN</OrangeButton>
      {inputError && (
        <PackageErrorText style={{ color: 'red' }}>
          {inputError}
        </PackageErrorText>
      )}
    </PackageForm>
  );
};
