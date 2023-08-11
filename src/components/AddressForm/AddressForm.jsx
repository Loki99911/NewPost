import { OrangeButton } from 'components/OrangeButton/OrangeButton';
import { Select } from 'components/Select/Select';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAddress } from 'redux/Address/addressOperations';
import { AddrErrorText, AddrForm, AddrInput, AddrLabel } from './AddressForm.styled';

export const AddressForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState(
    '6f8c7162-4b72-4b0a-88e5-906948c6a92f'
  );
  const [inputError, setInputError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const cityRegex = /^[А-Яа-яёЁЇїІіЄєҐґ\s'-]+$/; // Ukrainian city name regex

    if (!cityRegex.test(inputValue)) {
      setInputError('Будь ласка, вказуйте місто українською мовою!');
      return;
    }

    dispatch(getAddress({ inputValue, selectValue }));
  };

  const handleCityInputChange = e => {
    e.preventDefault();
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    setInputError('');
  };

  return (
    <AddrForm onSubmit={handleSubmit}>
      <AddrLabel>
        Місто:
        <AddrInput
          type="text"
          onChange={handleCityInputChange}
          value={inputValue}
          placeholder="Будь ласка, вкажіть місто."
        />
      </AddrLabel>

      {inputError && (
        <AddrErrorText style={{ color: 'red' }}>{inputError}</AddrErrorText>
      )}
      <AddrLabel>
        Тип відділення:
        <Select setSelectValue={setSelectValue} />
      </AddrLabel>
      <OrangeButton>Шукати!</OrangeButton>
    </AddrForm>
  );
};
