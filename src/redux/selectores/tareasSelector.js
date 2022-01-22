export const tareasFilter = state => {
  const { todos: { entities }, filter } = state;

  switch (filter) {
    case 'completed':
      return entities.filter(x => x.completed);
    case 'incompleted':
      return entities.filter(x => !x.completed);
    default:
      return entities;
  }
};