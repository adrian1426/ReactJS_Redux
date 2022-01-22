import { pendingTarea, rejectedTarea, succededTarea } from "../actions/fetching/fetchType";
import { makeFetchingReducer } from "./makeReducers/makeFetchingReducer";

export const fetchingReducer = makeFetchingReducer([
  pendingTarea, succededTarea, rejectedTarea
]);