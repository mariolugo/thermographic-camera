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
        [action.timeStamp]: {
          ...state[action.timeStamp],
          data: {
            fetching: true,
          },
        },
        current: {
          ...state.current,
          data: {
            fetching: true,
          },
        },
      };
    case FETCH_VALUES_ERROR:
      return {
        ...state,
        [action.timeStamp]: {
          ...state[action.timeStamp],
          data: {
            error: action.error,
            fetching: false,
          },
        },
        current: {
          ...state.current,
          data: {
            error: action.error,
            fetching: false,
          },
        },
      };
    case FETCH_VALUES_SUCCESS:
      return {
        ...state,
        [action.timeStamp]: {
          ...state[action.timeStamp],
          data: {
            ...action.data,
            fetching: false,
          },
        },
        current: {
          ...state.current,
          data: {
            ...action.data,
            fetching: false,
          },
        },
      };
    case FETCH_IMAGE:
      return {
        ...state,
        [action.timeStamp]: {
          ...state[action.timeStamp],
          image: {
            fetching: true,
          },
        },
        current: {
          ...state.current,
          image: {
            fetching: true,
          },
        },
      };
    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        [action.timeStamp]: {
          ...state[action.timeStamp],
          image: {
            image: action.image,
            fetching: false,
          },
        },
        current: {
          ...state.current,
          image: {
            image: action.image,
            fetching: false,
          },
        },
      };
    case FETCH_IMAGE_ERROR:
      return {
        ...state,
        [action.timeStamp]: {
          ...state[action.timeStamp],
          image: {
            error: action.error,
            fetching: false,
          },
        },
        current: {
          ...state.current,
          image: {
            error: action.error,
            fetching: false,
          },
        },
      };
    default:
      return state;
  }
};
