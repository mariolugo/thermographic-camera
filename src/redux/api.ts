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

type Response = {
  status: number;
  data: Record<string, unknown>;
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

export default { get };
