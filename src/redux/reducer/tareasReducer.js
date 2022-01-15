import { agregarTarea } from '../actions/tareas/tareasType';

const initialState = {
  entities: []
};

const tareasReducer = (state = initialState, action) => {
  switch (action.type) {
    case agregarTarea:
      return {
        ...state,
        entities: [...state.entities, action.payload]
      }
    default:
      return state;
  }
};

export default tareasReducer;