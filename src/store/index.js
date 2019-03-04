import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import app from '../reducers/';
import rootSaga from '../saga/';

const sagaMiddleware  = createSagaMiddleware();

export const store = createStore(
  app, 
  composeWithDevTools(applyMiddleware(
    sagaMiddleware
  ))
);

sagaMiddleware.run(rootSaga);