const initialState = {
  entities: [],
  filter: 'default'
};

export const makeSetReducer = actions => (stateFilter = initialState.filter, action) => {
  switch (action.type) {
    case actions[0]:
      return action.payload;
    default:
      return stateFilter;
  }
};