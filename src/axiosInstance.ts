import axios, { AxiosResponse } from 'axios';

axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response.data.status === 500) {
      // TODO エラーハンドリングを書く
      return false;
    }
  }
);
