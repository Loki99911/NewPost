import { useEffect} from 'react';
import { getProductById } from 'redux/Package/packageOperations';
import { useDispatch } from 'react-redux';

const MainPage = () => {
  // const [data, setData] = useState([]);
  const dispath = useDispatch();
  useEffect(() => {
    const data = dispath(getProductById('59001005728749'));
    console.log(data);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      
    </>
  );
};

export default MainPage;
