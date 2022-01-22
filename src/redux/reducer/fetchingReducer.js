import { pendingTarea, rejectedTarea, succededTarea } from "../actions/fetching/fetchType";

const inactivo = 'idle';
const pendiente = 'pending';
const cargado = 'succeded';
const error = 'rejected';

const initialState = {
  loading: inactivo,
  error: null
};

export const fetchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case pendingTarea:
      return { ...state, loading: pendiente }
    case succededTarea:
      return { ...state, loading: cargado };
    case rejectedTarea:
      return { loading: error, error: action.payload };
    default:
      return state;
  }
};