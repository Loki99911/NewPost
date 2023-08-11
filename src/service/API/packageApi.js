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

export const getAddressAPI = ({ inputValue, selectValue }) => {
  const body = {
    apiKey,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: inputValue,
      TypeOfWarehouseRef: selectValue,
    },
  };
  return axios.post(`/`, body).then(({ data }) => {
    return data;
  });
};

export const getWarehouseTypesAPI = () => {
  const body = {
    apiKey,
    modelName: 'Address',
    calledMethod: 'getWarehouseTypes',
    methodProperties: {},
  };
  return axios.post(`/`, body).then(({ data }) => {
    return data;
  });
};

