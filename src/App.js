import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './components/TodoItem';
import { agregarTareaAction, terminarIniciarTareaAction, filtrarTareaAction } from './redux/actions/tareas/tareasAction';

const tareasFilter = state => {
  const { entities, filter } = state;

  switch (filter) {
    case 'completed':
      return {
        ...state,
        entities: entities.filter(x => x.completed)
      }
    case 'incompleted':
      return {
        ...state,
        entities: entities.filter(x => !x.completed)
      }
    default:
      return state;
  }
};

const App = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(x => tareasFilter(x));

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

  const filtrarTareas = filtro => {
    dispatch(filtrarTareaAction(filtro));
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

      <button onClick={() => filtrarTareas('default')}>Mostrar todos</button>
      <button onClick={() => filtrarTareas('completed')}>Completados</button>
      <button onClick={() => filtrarTareas('incompleted')}>Incompletos</button>

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