import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_BACK;
const apiKey = process.env.REACT_APP_KEY;

// export const getProductByIdAPI = id => {
//   return axios.get(`/api/products/${id}`).then(({ data }) => {
//     return data;
//   });
// };

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

// export const getProductByIdAPI = body => {
//   try {
//     const { data, status } = axios.post(`?apiKey=${apiKey}`, body);
//     if (status !== 200) {
//       throw new Error(`Failed to fetch data: ${status}`);
//     }
//     return data;
//   } catch (error) {
//     alert(error.message);
//     return error;
//   }
// };
