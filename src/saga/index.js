import { all } from 'redux-saga/effects';

import { getSynonymsWatcher } from './App/';


export default function* rootSaga() {
  yield all([
    getSynonymsWatcher()
  ])
};