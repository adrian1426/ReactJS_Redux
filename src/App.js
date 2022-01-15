import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './components/TodoItem';
import { agregarTareaAction } from './redux/actions/tareas/tareasAction';

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
          state.entities.map(tarea => <TodoItem key={tarea.id} tarea={tarea} />)
        }
      </ul>
    </div>
  );
};

export default App;