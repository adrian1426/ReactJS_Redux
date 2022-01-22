import { createStore, applyMiddleware, combineReducers } from 'redux';
import { asyncMiddleware } from './asyncMiddleware';
import { entitiesReducer, filtersReducer } from './reducer/tareasReducer';
import { fetchingReducer } from './reducer/fetchingReducer';

const reducerGlobal = combineReducers({
  todos: combineReducers({
    entities: entitiesReducer,
    status: fetchingReducer
  }),
  filter: filtersReducer
});

export const store = createStore(reducerGlobal, applyMiddleware(asyncMiddleware));