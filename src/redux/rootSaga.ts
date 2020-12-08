import homeSaga from './home/sagas';
import { fork } from 'redux-saga/effects';
import { ApiType } from './home/types';

/**
 * Single entry point to start all our sagas
 */
export default function* rootSaga(api: ApiType): Generator {
  yield fork(homeSaga, api);
}
