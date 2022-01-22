import { agregarTarea, terminarIniciarTarea, filtrarTarea, cargarTarea } from '../actions/tareas/tareasType';
import { makeSetReducer } from './makeReducers/makeSetReducer';
import { reduceReducers } from './reduceReducers';

const initialState = {
  entities: [],
  filter: 'default'
};

const cargarTareaReducerElement = makeSetReducer([cargarTarea]);
const terminarIniciarTareaReducerElement = makeSetReducer([terminarIniciarTarea]);

const entitiesReducerElement = (stateEntities = initialState.entities, action) => {
  switch (action.type) {
    case agregarTarea:
      return [...stateEntities, action.payload];
    default:
      return stateEntities;
  }
};

export const entitiesReducer = reduceReducers(entitiesReducerElement, cargarTareaReducerElement, terminarIniciarTareaReducerElement);
export const filtersReducer = makeSetReducer([filtrarTarea]);