import { combineReducers } from 'redux';
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

const tareasReducer = combineReducers({
  entities: entitiesReducer,
  filter: filtersReducer
});

export default tareasReducer;