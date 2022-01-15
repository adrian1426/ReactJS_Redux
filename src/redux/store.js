import { createStore } from 'redux';
import reducer from './reducer/tareasReducer';

export const store = createStore(reducer);