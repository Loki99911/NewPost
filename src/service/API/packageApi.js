import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_BACK;
const apiKey = process.env.REACT_APP_KEY;

export const getProductByIdAPI = declarationNumber => {
  const body = {
    apiKey,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: declarationNumber,
          Phone: '',
        },
      ],
    },
  };
  return axios.post(`/`, body).then(({ data }) => {
    return data;
  });
};

export const getAddressAPI = () => {
  const body = {
    apiKey,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      TypeOfWarehouseRef: '6f8c7162-4b72-4b0a-88e5-906948c6a92f',
    },
  };
  return axios.post(`/`, body).then(({ data }) => {
    return data;
  });
};

