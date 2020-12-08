import {
  FETCH_VALUES,
  FETCH_VALUES_ERROR,
  FETCH_VALUES_SUCCESS,
  FETCH_IMAGE,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_ERROR,
} from './types';

import type { HomeActions, HomeState } from './types';

const initialState = {};

export default (state: HomeState = initialState, action: HomeActions) => {
  switch (action.type) {
    case FETCH_VALUES:
      return {
        ...state,
        data: {
          ...state.data,
          fetching: true,
        },
      };
    case FETCH_VALUES_ERROR:
      return {
        ...state,
        data: {
          ...state.data,
          error: action.error,
          fetching: false,
        },
      };
    case FETCH_VALUES_SUCCESS:
      return {
        ...state,
        data: {
          ...action.data,
          fetching: false,
        },
      };
    case FETCH_IMAGE:
      return {
        ...state,
        data: {
          ...state.data,
          fetching: true,
        },
      };
    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        image: {
          ...action.image,
          fetching: false,
        },
      };
    case FETCH_IMAGE_ERROR:
      return {
        ...state,
        image: {
          ...state.image,
          error: action.error,
          fetching: false,
        },
      };
    default:
      return state;
  }
};
