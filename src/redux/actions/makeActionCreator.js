export const makeActionCreator = (actionType, ...objNames) => (...valuesObjNames) => {
  const action = {
    type: actionType
  };

  objNames.forEach((arg, index) => {
    action[arg] = valuesObjNames[index];
  });

  return action;
};