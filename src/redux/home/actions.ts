import {
  FETCH_VALUES,
  FETCH_VALUES_ERROR,
  FETCH_VALUES_SUCCESS,
  FETCH_IMAGE,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_ERROR,
} from './types';

import type {
  FetchValuesAction,
  FetchValuesSuccessAction,
  FetchValuesErrorAction,
  FetchImageAction,
  FetchImageSuccessAction,
  FetchImageErrorAction,
} from './types';

import type { ImageRepresentation, DataRepresentation } from './representations';

const fetchValuesAction = (): FetchValuesAction => {
  return {
    type: FETCH_VALUES,
  };
};

const fetchValuesActionSuccess = (data: DataRepresentation): FetchValuesSuccessAction => {
  return {
    type: FETCH_VALUES_SUCCESS,
    data,
  };
};

const fetchValuesActionError = (error: string): FetchValuesErrorAction => {
  return {
    type: FETCH_VALUES_ERROR,
    error,
  };
};

const fetchImageAction = (): FetchImageAction => {
  return {
    type: FETCH_IMAGE,
  };
};

const fetchImageActionSuccess = (image: ImageRepresentation): FetchImageSuccessAction => {
  return {
    type: FETCH_IMAGE_SUCCESS,
    image,
  };
};

const fetchImageActionError = (error: string): FetchImageErrorAction => {
  return {
    type: FETCH_IMAGE_ERROR,
    error,
  };
};

export const homeActions = {
  fetchValuesAction,
  fetchValuesActionSuccess,
  fetchValuesActionError,
  fetchImageAction,
  fetchImageActionSuccess,
  fetchImageActionError,
};
