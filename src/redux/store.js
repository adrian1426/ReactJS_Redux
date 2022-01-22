import { createStore, applyMiddleware } from 'redux';
import { asyncMiddleware } from './asyncMiddleware';
import reducer from './reducer/tareasReducer';

export const store = createStore(reducer, applyMiddleware(asyncMiddleware));