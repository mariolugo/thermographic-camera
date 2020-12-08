import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { FETCH_VALUES, FETCH_IMAGE } from './types';

import type {
  FetchImageAction,
  FetchValuesAction,
  FetchValuesSuccessAction,
  FetchValuesErrorAction,
  FetchImageSuccessAction,
  FetchImageErrorAction,
  ApiType,
} from './types';

import { homeActions } from './actions';

import HomeApi from './api';

/**
 *
 * @param {*} api
 * In here we call the api and dispatch either a succes or error action
 */
function* checkValuesWorker(api: ApiType, action: FetchValuesAction) {
  try {
    const valuesResponse = yield call(HomeApi(api).getValues);
    const successAction: FetchValuesSuccessAction = homeActions.fetchValuesActionSuccess(
      valuesResponse.data,
      action.timeStamp,
    );
    yield put(successAction);
  } catch (e) {
    const errorAction: FetchValuesErrorAction = homeActions.fetchValuesActionError(
      e,
      action.timeStamp,
    );
    yield put(errorAction);
  }
}

/**
 *
 * @param {*} api
 * In here we call the api and dispatch either a succes or error action
 */

function* checkImageWorker(api: ApiType, action: FetchImageAction) {
  try {
    const imageResponse = yield call(HomeApi(api).getImage);

    const successAction: FetchImageSuccessAction = homeActions.fetchImageActionSuccess(
      imageResponse.data,
      action.timeStamp,
    );
    yield put(successAction);
  } catch (e) {
    const errorAction: FetchImageErrorAction = homeActions.fetchImageActionError(
      e,
      action.timeStamp,
    );
    yield put(errorAction);
  }
}

/**
 *
 * @param {*} api
 * Spawns a saga on each action dispatched to the Store that matches pattern.
 */
function* watchValues(api: ApiType) {
  yield takeEvery(FETCH_VALUES, checkValuesWorker, api);
}

/**
 *
 * @param {*} api
 * Spawns a saga on each action dispatched to the Store that matches pattern.
 */
function* watchImages(api: ApiType) {
  yield takeEvery(FETCH_IMAGE, checkImageWorker, api);
}

/**
 *
 * @param {*} api
 * Creates an Effect description that instructs the middleware to perform a non-blocking call
 */
export default function* root(api: ApiType): Generator {
  yield fork(watchValues, api);
  yield fork(watchImages, api);
}
