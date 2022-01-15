import { agregarTarea, terminarIniciarTarea } from './tareasType';

export const agregarTareaAction = payload => ({
  type: agregarTarea,
  payload
});

export const terminarIniciarTareaAction = (payload) => ({
  type: terminarIniciarTarea,
  payload
});