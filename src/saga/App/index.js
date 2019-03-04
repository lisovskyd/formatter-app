import { put, takeLatest } from 'redux-saga/effects';

import * as AT  from '../../action-types';

export function* getSynonymsWatcher() {
  yield takeLatest(AT.SEND_GET_SYNONYMS_REQUEST, getSynonymsWorker);
}

function* getSynonymsWorker({ payload }) {
  try {
  const datamuse = require('datamuse');
  const words = yield datamuse.request(`words?rel_syn=${payload}`);
  const synonymsArr = yield words.map(elem => {
    return elem.word
  })
  yield put({type: "SEND_GET_SYNONYMS_REQUEST_SUCCESS", synonymsArr});  
  } catch (err) {
    console.log('Error:', err)
  }
}