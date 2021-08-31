import './App.css';
import { Message } from './components/Message';
import "./components/Message.css";
import {Counter} from './components/Counter';
import { useState } from 'react';

const a = "Vivo in Italia e mangio la pizza... che buona la pizza";

function App() {
  const [showCounter, setShowCounte] = useState(true);

  const toggleCounter = () => {
    setShowCounte(!showCounter);
  }

  return (
    <div className="Message">
      <div onClick={toggleCounter}>Toggle Counter</div>
      <Message name="Leonardo" age={26} text={a} />
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
