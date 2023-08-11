import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import AddressPage from 'pages/AddressPage/AddressPage';
import { Layout } from './Layout/Layout';

export const App = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
