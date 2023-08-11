import { Select } from 'components/Select/Select';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getAddress } from 'redux/Address/addressOperations';

export const AddressForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [inputError, setInputError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const cityRegex = /^[А-Яа-яёЁЇїІіЄєҐґ\s'-]+$/; // Ukrainian city name regex

    if (!cityRegex.test(inputValue)) {
      setInputError('Please enter a valid Ukrainian city name');
      return;
    }

    dispatch(getAddress({ inputValue, selectValue }));
  };

   const handleCityInputChange = e => {
     const newInputValue = e.target.value;
     setInputValue(newInputValue);
     setInputError('');
   };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleCityInputChange}
        value={inputValue}
        placeholder="Please set city"
      />
      {inputError && <p style={{ color: 'red' }}>{inputError}</p>}
      <Select setSelectValue={setSelectValue} />
      <button>Get status TTN</button>
    </form>
  );
};
