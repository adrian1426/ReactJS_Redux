import { pendingTarea, rejectedTarea, succededTarea } from "./fetchType";

export const pendingTareaAction = () => ({
  type: pendingTarea
});

export const succededTareaAction = () => ({
  type: succededTarea
});

export const rejectedTareaAction = payload => ({
  type: rejectedTarea,
  payload
});