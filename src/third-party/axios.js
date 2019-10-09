import Axios from 'axios';
import qs from 'qs';

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.data.token = localStorage.getItem('token');
  config.data.uid = localStorage.getItem('uid');
  config.data = qs.stringify(config.data);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default Axios;