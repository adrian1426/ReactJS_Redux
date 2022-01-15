import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './components/TodoItem';
import { agregarTareaAction, terminarIniciarTareaAction } from './redux/actions/tareas/tareasAction';

const App = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(x => x);

  const agregarTareas = e => {
    e.preventDefault();

    if (!value.trim()) {
      return;
    }

    const tarea = {
      id: Math.random().toString(36),
      title: value,
      completed: false
    };

    dispatch(agregarTareaAction(tarea));
    setValue('');
  };

  const actualizarTarea = tarea => {

    const newEntities = state.entities.map(t => {
      if (t.id === tarea.id) {
        return { ...t, completed: !t.completed }
      }

      return t;
    });

    dispatch(terminarIniciarTareaAction(newEntities));
  };

  return (
    <div>
      <form onSubmit={agregarTareas}>
        <input
          type="text"
          onChange={e => setValue(e.target.value)}
          value={value}
        />
      </form>

      <button>Mostrar todos</button>
      <button>Completados</button>
      <button>Incompletos</button>

      <ul>
        {
          state.entities.map(tarea => (
            <TodoItem
              key={tarea.id}
              tarea={tarea}
              actualizarTarea={actualizarTarea}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default App;