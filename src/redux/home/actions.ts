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

const fetchValuesAction = (timeStamp: number): FetchValuesAction => {
  return {
    type: FETCH_VALUES,
    timeStamp,
  };
};

const fetchValuesActionSuccess = (
  data: DataRepresentation,
  timeStamp: number,
): FetchValuesSuccessAction => {
  return {
    type: FETCH_VALUES_SUCCESS,
    data,
    timeStamp,
  };
};

const fetchValuesActionError = (error: string, timeStamp: number): FetchValuesErrorAction => {
  return {
    type: FETCH_VALUES_ERROR,
    error,
    timeStamp,
  };
};

const fetchImageAction = (timeStamp: number): FetchImageAction => {
  return {
    type: FETCH_IMAGE,
    timeStamp,
  };
};

const fetchImageActionSuccess = (
  image: ImageRepresentation,
  timeStamp: number,
): FetchImageSuccessAction => {
  return {
    type: FETCH_IMAGE_SUCCESS,
    image,
    timeStamp,
  };
};

const fetchImageActionError = (error: string, timeStamp: number): FetchImageErrorAction => {
  return {
    type: FETCH_IMAGE_ERROR,
    error,
    timeStamp,
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
