import { useSelector } from "react-redux";
import { AddrItem, AddrList } from "./AddressList.styled";
import { getLoading } from "redux/Address/addressSelectors";
import { Loader } from "components/Loader/Loader";

export const AddressList = ({ addresses }) => {
  const isLoading = useSelector(getLoading);

  return (
    <>
      {isLoading?<Loader/>:
      <AddrList>
        {addresses.map(addr => (
          <AddrItem key={addr.SiteKey}>{addr.Description}</AddrItem>
        ))}
      </AddrList>}
    </>
  );
};
