import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import "./components/Message.css";

const a = "Vivo in Italia e mangio la pizza... che buona la pizza";

function App() {
  return (
    <div className="Message">
      <Message name="Leonardo" age={26} text={a} />
    </div>
  );
}

export default App;
