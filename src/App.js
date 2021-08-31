import './App.css';
import { Message } from './components/Message';
import "./components/Message.css";
import {Counter} from './components/Counter';

const a = "Vivo in Italia e mangio la pizza... che buona la pizza";

function App() {
  return (
    <div className="Message">
      <Message name="Leonardo" age={26} text={a} />
      <Counter />
    </div>
  );
}

export default App;
