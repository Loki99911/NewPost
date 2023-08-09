import { useEffect, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const { data } = await axios.get(
          'https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events'
        );
        setData(data);
        // return data;
      } catch (error) {
        return;
      }
    };
    getEvents();
  }, []);
console.log(data);
  return (
    <>
      
    </>
  );
};

export default MainPage;
