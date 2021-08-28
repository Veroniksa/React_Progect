import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import "./components/Message.css"

function App() {
  return (
    <div className="Message">
      <Message name="Leonardo" age={26} text="Vivo in Italia e mangio la pizza"/>
    </div>
  );
}

export default App;
