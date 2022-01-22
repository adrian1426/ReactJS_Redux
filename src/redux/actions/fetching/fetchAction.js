import { makeActionCreator } from "../makeActionCreator";
import { pendingTarea, rejectedTarea, succededTarea } from "./fetchType";

export const pendingTareaAction = makeActionCreator(pendingTarea);
export const succededTareaAction = makeActionCreator(succededTarea);
export const rejectedTareaAction = makeActionCreator(rejectedTarea, 'payload');