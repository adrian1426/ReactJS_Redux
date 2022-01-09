import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

//createStore: recibe una función, se le conoce como reducer
const store = createStore((state = 0, action) => {
  //action={type:'string',payload:any}

  switch (action.type) {
    case 'incrementar':
      return state + 1;
    case 'decrementar':
      return state - 1;
    case 'set':
      return action.payload;
    default:
      return state;
  }
});

store.dispatch({ type: 'nada' });
console.log('nada: ', store.getState());


store.dispatch({ type: 'incrementar' });
console.log('incrementar: ', store.getState());

store.dispatch({ type: 'decrementar' });
console.log('decrementar: ', store.getState());

store.dispatch({ type: 'set', payload: 15 });
console.log('set: ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
