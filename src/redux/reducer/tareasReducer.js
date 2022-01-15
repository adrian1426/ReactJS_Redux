import { agregarTarea } from '../actions/tareas/tareasType';

const initialState = {
  entities: []
};

const tareasReducer = (state = initialState, action) => {
  switch (action.type) {
    case agregarTarea:
      return {
        ...state,
        entities: [{}]
      }
    default:
      return state;
  }
};

export default tareasReducer;