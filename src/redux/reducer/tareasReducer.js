import { agregarTarea, terminarIniciarTarea, filtrarTarea, cargarTarea } from '../actions/tareas/tareasType';
import { makeSetReducer } from './makeReducers/makeSetReducer';

const initialState = {
  entities: [],
  filter: 'default'
};

export const entitiesReducer = (stateEntities = initialState.entities, action) => {
  switch (action.type) {
    case agregarTarea:
      return [...stateEntities, action.payload];
    case terminarIniciarTarea:
      return action.payload;
    case cargarTarea:
      return action.payload;
    default:
      return stateEntities;
  }
};

export const filtersReducer = makeSetReducer([filtrarTarea]);