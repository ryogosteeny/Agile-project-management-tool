import axios from 'axios';

axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response.data.status === 500) {
      // TODO 500ページへ遷移する処理を書く
      return false;
    }
  }
);
