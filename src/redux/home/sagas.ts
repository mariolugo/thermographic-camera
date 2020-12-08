import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { FETCH_VALUES, FETCH_IMAGE } from './types';

import type {
  FetchValuesSuccessAction,
  FetchValuesErrorAction,
  FetchImageSuccessAction,
  FetchImageErrorAction,
  ApiType,
} from './types';

import { homeActions } from './actions';

import HomeApi from './api';

function* checkValuesWorker(api: ApiType) {
  try {
    const valuesResponse = yield call(HomeApi(api).getValues);
    const successAction: FetchValuesSuccessAction = homeActions.fetchValuesActionSuccess(
      valuesResponse.data,
    );
    yield put(successAction);
  } catch (e) {
    const errorAction: FetchValuesErrorAction = homeActions.fetchValuesActionError(e);
    yield put(errorAction);
  }
}

function* checkImageWorker(api: ApiType) {
  try {
    const imageResponse = yield call(HomeApi(api).getImage);
    const successAction: FetchImageSuccessAction = homeActions.fetchImageActionSuccess(
      imageResponse.data,
    );
    yield put(successAction);
  } catch (e) {
    const errorAction: FetchImageErrorAction = homeActions.fetchImageActionError(e);
    yield put(errorAction);
  }
}

function* watchValues(api: ApiType) {
  yield takeEvery(FETCH_VALUES, checkValuesWorker, api);
}

function* watchImages(api: ApiType) {
  yield takeEvery(FETCH_IMAGE, checkImageWorker, api);
}

// Bootstrap Functions App
export default function* root(api: ApiType): Generator {
  yield fork(watchValues, api);
  yield fork(watchImages, api);
}
