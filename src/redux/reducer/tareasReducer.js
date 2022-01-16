import { agregarTarea, terminarIniciarTarea, filtrarTarea } from '../actions/tareas/tareasType';

const initialState = {
  entities: [],
  filter: 'default'
};

const entitiesReducer = (stateEntities = initialState.entities, action) => {
  switch (action.type) {
    case agregarTarea:
      return [...stateEntities, action.payload];
    case terminarIniciarTarea:
      return action.payload;
    default:
      return stateEntities;
  }
};

const filtersReducer = (stateFilter = initialState.filter, action) => {
  switch (action.type) {
    case filtrarTarea:
      return action.payload;
    default:
      return stateFilter;
  }
};

const tareasReducer = (state = initialState, action) => {
  return {
    entities: entitiesReducer(state.entities, action),
    filter: filtersReducer(state.filter, action)
  };
};

export default tareasReducer;