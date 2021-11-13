import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [counter, setCounter] = useState(0);

  const incrementFunc = () => setCounter(counter + 1);

  const decrementFunc = () => setCounter(counter - 1);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={incrementFunc}>+</button>
      <button onClick={decrementFunc}>-</button>
      <ToDoList />
    </div>
  );
}

export default App;
