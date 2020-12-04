import { useState } from 'react';
function Home() {
  const [counter, setCounter] = useState(1);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addCounter}>Add</button>
    </div>
  );
}

export default Home;
