const TodoItem = props => {
  const { tarea } = props;

  return (
    <li>{tarea.title}</li>
  );
};

export default TodoItem;