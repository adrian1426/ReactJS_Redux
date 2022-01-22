const inactivo = 'idle';
const pendiente = 'pending';
const cargado = 'succeded';
const error = 'rejected';

const initialState = {
  loading: inactivo,
  error: null
};

//High Order Reducer
export const makeFetchingReducer = actions => (state = initialState, action) => {
  switch (action.type) {
    case actions[0]:
      return { ...state, loading: pendiente }
    case actions[1]:
      return { ...state, loading: cargado };
    case actions[2]:
      return { loading: error, error: action.payload };
    default:
      return state;
  }
};