import type { DataRepresentation, ImageRepresentation } from './representations';

export const FETCH_VALUES = 'FETCH_VALUES';
export const FETCH_VALUES_SUCCESS = 'FETCH_VALUES_SUCCESS';
export const FETCH_VALUES_ERROR = 'FETCH_VALUES_ERROR';

export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR';

export type FetchValuesAction = {
  type: typeof FETCH_VALUES;
};

export type FetchValuesSuccessAction = {
  type: typeof FETCH_VALUES_SUCCESS;
  data: DataRepresentation;
};

export type FetchValuesErrorAction = {
  type: typeof FETCH_VALUES_ERROR;
  error: string;
};

export type FetchImageAction = {
  type: typeof FETCH_IMAGE;
};

export type FetchImageSuccessAction = {
  type: typeof FETCH_IMAGE_SUCCESS;
  image: ImageRepresentation;
};

export type FetchImageErrorAction = {
  type: typeof FETCH_IMAGE_ERROR;
  error: string;
};

export type HomeActions =
  | FetchValuesAction
  | FetchValuesSuccessAction
  | FetchValuesErrorAction
  | FetchImageAction
  | FetchImageSuccessAction
  | FetchImageErrorAction;

export type HomeState = {
  data?: DataRepresentation;
  image?: ImageRepresentation;
};

export type ApiType = {
  get: (endpoint: string) => Promise<any>;
};

export type APIResponse<T> = {
  statusCode: number;
  data: T;
};
