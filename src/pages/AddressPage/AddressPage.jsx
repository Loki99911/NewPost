import { AddressForm } from 'components/AddressForm/AddressForm';
import { AddressList } from 'components/AddressList/AddressList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddresses } from 'redux/Address/addressSelectors';
import { getWarehouseType } from 'redux/WarehouseType/warehouseTypeOperations';

const AddressPage = () => {
  const dispatch = useDispatch();
  const addresses = useSelector(getAddresses);
  
  useEffect(() => {
    dispatch(getWarehouseType());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AddressForm />
      {addresses.length===0?<h3>Нажаль нічого не знайдено( </h3>: <AddressList addresses={addresses} />}
    </>
  );
};

export default AddressPage;
