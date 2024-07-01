import { AxiosInstance } from 'axios';
import addAuthorizationHeader from './addAuthorization';

export const addInterceptors = (axios: AxiosInstance) => {
  const authorization = axios.interceptors.request.use(addAuthorizationHeader);
  return { authorization };
};
