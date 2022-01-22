import { agregarTarea, terminarIniciarTarea, filtrarTarea, cargarTarea } from '../actions/tareas/tareasType';

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

export const filtersReducer = (stateFilter = initialState.filter, action) => {
  switch (action.type) {
    case filtrarTarea:
      return action.payload;
    default:
      return stateFilter;
  }
};