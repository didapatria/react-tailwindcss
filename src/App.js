import React, {useState} from 'react';
import { FunctionalCounter } from './pages/FunctionalCounter';

function App() {
  //Declare the state and method, and also init the value of state
  let [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => {
    setCount(count-1);
  }

  return (
    <h1 className="flex justify-center items-center min-h-screen bg-slate-900 font-bold text-3xl text-center text-sky-600">
      <div className="space-y-8">
        <div className="flex justify-center animate-bounce">
          <img src="./images/didapatria.png" alt="logo" className="rounded-full w-40 h-40" />
        </div>
        <div>Tailwind CSS with Create React App</div>
        <div className="border p-5 rounded-xl bg-slate-300 shadow-lg">
          <FunctionalCounter count={count} inc={increment} dec={decrement}/>
        </div>
      </div>
    </h1>
  );
}

export default App;
