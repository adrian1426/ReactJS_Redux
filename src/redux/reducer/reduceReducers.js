export const reduceReducers = (...reducers) => (state, action) => {
  return reducers.reduce((acomulador, elemento) => elemento(acomulador, action), state);
};