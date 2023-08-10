import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "redux/Address/addressOperations";
import { getAddresses } from "redux/Address/addressSelectors";

const AddressPage = () => {
  const dispath = useDispatch();
  const addresses = useSelector(getAddresses);

  useEffect(() => {
    dispath(getAddress());
    // eslint-disable-next-line
  },[])
  console.log(addresses);
  return <></>;
};

export default AddressPage;
