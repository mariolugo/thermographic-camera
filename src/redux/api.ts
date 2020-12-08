import axios from 'axios';
import { URL } from '../constants';

/**
 * Create the axios client
 * We can add headers and maybe security tokens
 */
const getClient = () => {
  const apiUrl = URL;

  const config = {
    baseURL: apiUrl,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const axiosInstance = axios.create(config);

  return axiosInstance;
};

/**
 * Create the axios client
 * We can add headers and maybe security tokens
 */
const getImageClient = () => {
  const apiUrl = URL;

  const config = {
    baseURL: apiUrl,
    timeout: 30000,
    responseType: 'arraybuffer',
  };

  const axiosInstance = axios.create(config);

  return axiosInstance;
};

type Response = {
  status: number;
  data: Record<string, unknown>;
  headers: any;
};
// Standardize API response format across the application
const _parseResponse = ({ status, data }: Response) => ({
  statusCode: status,
  data: data,
});

/**
 *
 * @param {string} endpoint endpoint to call
 */
const get = (endpoint: string) => {
  const client = getClient();
  return client
    .get(endpoint)
    .then((response: Response) => _parseResponse(response))
    .catch((error: any) => {
      return Promise.reject(error);
    });
};

/**
 *
 * @param {string} endpoint endpoint to call
 */
const getImage = (endpoint: string) => {
  const client = getImageClient();
  return client
    .get(endpoint)
    .then(async (response: Response) => {
      const image = btoa(String.fromCharCode(...new Uint8Array(response.data)));

      if (typeof response.headers['content-type'] === 'undefined') {
        return {
          data: undefined,
          error: 404,
        };
      }
      return {
        // data: await Buffer.from(response.data, 'binary').toString('base64'),
        data: `data:${response.headers['content-type']};base64,${image}`,
        status: response.status,
      };
    })
    .catch((error: any) => {
      return Promise.reject(error);
    });
};

export default { get, getImage };
