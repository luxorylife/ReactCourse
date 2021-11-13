import { useState } from 'react';
import Cat from './components/Cat';
import Example from './components/Example';

function App() {
  const [isExampleShow, setIsExampleShow] = useState(true);

  const showHideExample = () => {
    setIsExampleShow(!isExampleShow); // toggle
  };

  return (
    <div className="App">
      {/* { <Cat /> } */}
      <button onClick={showHideExample}>Показать / скрыть Example</button>
      {isExampleShow && <Example />}
    </div>
  );
}

export default App;
