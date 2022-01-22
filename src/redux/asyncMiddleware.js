export const asyncMiddleware = store => next => action => {
  console.log(typeof action);
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};