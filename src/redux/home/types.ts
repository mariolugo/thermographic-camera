import type { DataRepresentation, ImageRepresentation } from './representations';

export const FETCH_VALUES = 'FETCH_VALUES';
export const FETCH_VALUES_SUCCESS = 'FETCH_VALUES_SUCCESS';
export const FETCH_VALUES_ERROR = 'FETCH_VALUES_ERROR';

export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR';

export type FetchValuesAction = {
  type: typeof FETCH_VALUES;
  timeStamp: number;
};

export type FetchValuesSuccessAction = {
  type: typeof FETCH_VALUES_SUCCESS;
  data: DataRepresentation;
  timeStamp: number;
};

export type FetchValuesErrorAction = {
  type: typeof FETCH_VALUES_ERROR;
  error: string;
  timeStamp: number;
};

export type FetchImageAction = {
  type: typeof FETCH_IMAGE;
  timeStamp: number;
};

export type FetchImageSuccessAction = {
  type: typeof FETCH_IMAGE_SUCCESS;
  image: ImageRepresentation;
  timeStamp: number;
};

export type FetchImageErrorAction = {
  type: typeof FETCH_IMAGE_ERROR;
  error: string;
  timeStamp: number;
};

export type HomeActions =
  | FetchValuesAction
  | FetchValuesSuccessAction
  | FetchValuesErrorAction
  | FetchImageAction
  | FetchImageSuccessAction
  | FetchImageErrorAction;

interface DataInterface {
  data?: DataRepresentation;
  image?: ImageRepresentation;
  timeStamp?: number;
}
export type HomeState = {
  [key: string]: DataInterface;
  current: DataInterface;
};

export type ApiType = {
  get: (endpoint: string) => Promise<any>;
  getImage: (endpoint: string) => Promise<any>;
};

export type APIResponse<T> = {
  statusCode: number;
  data: T;
};
