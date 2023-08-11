import { SelectInput } from './Select.styled';
import { useSelector } from 'react-redux';
import { getTypes } from 'redux/WarehouseType/warehouseTypeSelectors';

export const Select = ({ setSelectValue }) => {
  const types = useSelector(getTypes);
  const options = types.map(type => {
    return {
      value: type.Ref,
      label:
        type.Description === 'Parcel Shop'
          ? 'Посилковий пункт'
          : type.Description,
    };
  });

  return (
    <SelectInput
      classNamePrefix="Select"
      defaultValue={options[0]}
      options={options}
      onChange={e => {
        setSelectValue(e.value);
      }}
    />
  );
};
