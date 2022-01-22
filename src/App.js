import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './components/TodoItem';
import { pendingTareaAction, rejectedTareaAction, succededTareaAction } from './redux/actions/fetching/fetchAction';
import { agregarTareaAction, terminarIniciarTareaAction, filtrarTareaAction, cargarTareaAction } from './redux/actions/tareas/tareasAction';
import { tareasFilter } from './redux/selectores/tareasSelector';


const App = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(x => tareasFilter(x));
  const status = useSelector(s => s.todos.status);

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
    const newEntities = state.map(t => {
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

  const fetchThunk = () => async dispatch => {
    dispatch(pendingTareaAction());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todosAdrian');
      const data = await response.json();
      const tareas = data.slice(0, 10);

      dispatch(cargarTareaAction(tareas));
      dispatch(succededTareaAction())
    } catch (error) {
      dispatch(rejectedTareaAction(error.message));
    }
  };

  if (status.loading === 'pending') {
    return <p>Cargando...</p>
  }

  if (status.loading === 'rejected') {
    return <p>Error {status.error}</p>
  }

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
      <button onClick={() => dispatch(fetchThunk())}>Thunk</button>

      <ul>
        {
          state.map(tarea => (
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