import {
  agregarTarea, terminarIniciarTarea, filtrarTarea, loadingTarea, errorTarea, cargarTarea
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

export const loadingTareaAction = () => ({
  type: loadingTarea
});

export const errorTareaAction = payload => ({
  type: errorTarea,
  payload
});

export const cargarTareaAction = payload => ({
  type: cargarTarea,
  payload
});