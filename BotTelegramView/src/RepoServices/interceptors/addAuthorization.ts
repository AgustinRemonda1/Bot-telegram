import axios, { AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';

/**
 * Send the cookie X-FVG-TOKEN-CORS as part of the authorization header in every request
 * @returns
 */
const GetToken = () => Cookie.get('X-FVG-TOKEN-CORS') || '';

const AddAuthorizationHeader = (
  config: AxiosRequestConfig,
  token: string
): AxiosRequestConfig => {
  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: `Bearer ${token}`
    }
  };
};

const addAuthorizationHeader = (config: AxiosRequestConfig) => {
  const token = GetToken();
  return AddAuthorizationHeader(config, token);
};

export default addAuthorizationHeader;

export const remove = (id: number) => {
  axios.interceptors.request.eject(id);
};
