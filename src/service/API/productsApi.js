import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_BACK;

export const getProductsAPI = (page, per_page, article, filter) => {
  if (page && per_page) {
    return axios
      .get(
        `/api/products?page=${page}&per_page=${per_page}&article=${article}&filter=${filter}`
      )
      .then(({ data }) => {
        return data;
      });
  }
  return axios.get('/api/products').then(({ data }) => {
    return data;
  });
};

export const addProductAPI = product => {
  return axios.post('/api/products/', product).then(({ data }) => {
    return data;
  });
};

export const removeProductAPI = id => {
  return axios.delete(`/api/products/${id}`).then(({ data }) => {
    return data;
  });
};

export const changeProductAPI = (id, product) => {
  return axios.put(`/api/products/${id}`, product).then(({ data }) => {
    return data;
  });
};

export const getProductByIdAPI = id => {
  return axios.get(`/api/products/${id}`).then(({ data }) => {
    return data;
  });
};
