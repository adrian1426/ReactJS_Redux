import { agregarTarea, terminarIniciarTarea, filtrarTarea } from './tareasType';

export const agregarTareaAction = payload => ({
  type: agregarTarea,
  payload
});

export const terminarIniciarTareaAction = payload => ({
  type: terminarIniciarTarea,
  payload
});

export const filtrarTareaAction = payload => ({
  type: filtrarTarea,
  payload
});