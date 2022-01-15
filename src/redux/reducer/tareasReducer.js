import { agregarTarea, terminarIniciarTarea, filtrarTarea } from '../actions/tareas/tareasType';

const initialState = {
  entities: [],
  filter: 'default'
};

const tareasReducer = (state = initialState, action) => {
  switch (action.type) {
    case agregarTarea:
      return {
        ...state,
        entities: [...state.entities, action.payload]
      }
    case terminarIniciarTarea:
      return {
        ...state,
        entities: action.payload
      }
    case filtrarTarea:
      return {
        ...state,
        filter: action.payload
      }
    default:
      return state;
  }
};

export default tareasReducer;