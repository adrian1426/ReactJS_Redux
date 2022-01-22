import {
  agregarTarea, terminarIniciarTarea, filtrarTarea, cargarTarea
}
  from './tareasType';

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

export const cargarTareaAction = payload => ({
  type: cargarTarea,
  payload
});