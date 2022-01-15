import { useSelector, useDispatch } from 'react-redux';
import { agregarTareaAction } from './redux/actions/tareas/tareasAction';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(x => x);

  const agregarTareas = () => {
    dispatch(agregarTareaAction({}));
  };

  return (
    <div>
      <form action="">
        <input type="text" />
      </form>

      <button onClick={agregarTareas}>Mostrar todos</button>
      <button>Completados</button>
      <button>Incompletos</button>

      <ul>
        <li>ToDo 1</li>
        <li>ToDo 2</li>
      </ul>
    </div>
  );
};

export default App;