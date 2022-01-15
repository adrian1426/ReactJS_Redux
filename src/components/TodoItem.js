const TodoItem = props => {
  const { tarea, actualizarTarea } = props;

  return (
    <li
      style={{
        textDecoration: tarea.completed ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
      onClick={() => actualizarTarea(tarea)}
    >
      {tarea.title}
    </li>
  );
};

export default TodoItem;