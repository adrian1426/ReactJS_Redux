import { agregarTarea } from './tareasType';

export const agregarTareaAction = payload => ({
  type: agregarTarea,
  payload
});