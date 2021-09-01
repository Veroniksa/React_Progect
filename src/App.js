import './App.css';
//import { Message } from './components/Message';
import "./components/Message.css";
import {Counter} from './components/Counter';
import { useEffect, useState } from 'react';
import {MessageList} from './components/MessageList';

const a = "Vivo in Italia e mangio la pizza... che buona la pizza";

const requestBot = [
  {id:1, text: "I am stupid bot"},
  {id:2, text: "Next"},
  {id:3, text: "Jast Do It"}
];

function App() {
/*   const [showCounter, setShowCounte] = useState(true);

  const toggleCounter = () => {
    setShowCounte(!showCounter);
  } */


  const [value, setValue] = useState("");

  const [messagesList, setMessagesList] = useState([]);



  useEffect(()=> {
    if(messagesList[messagesList.length - 1]?.author === "Umano"){
      setMessagesList((prevMessagesList) => [
        ...prevMessagesList,
        {text: "I am robo", author:"robo"},
      ]);
    }
  },[messagesList]);

  const handelAddMessage = () => {
    setMessagesList((prevMessagesList) => [...prevMessagesList, 
      {text: "Message UMANO", author: "Umano"}]);
  };

  const handelChange = (event) => {
    setValue(event.target.value);
  };

  const handelSubmit = (event) => {
    setValue(event.target.value);
  };

  const addMessage = (e) => {
    console.log("Hia clicatto Add");
    setMessagesList((prevMessagesList) => [...prevMessagesList, 
      {text: "Message", author: "Umano"}]);
    e.preventDefault();
  };

  return (
    <div className="MessageList">
      {/* <div onClick={toggleCounter}>Toggle Counter</div> */}
      {/* <Message name="Leonardo" age={26} text={a} /> */}
      <button onClick={handelAddMessage}>Add Message</button>
      <form className="MessageListForm" onSubmit={handelSubmit}>
        <input value={value} onChange={handelChange}/>
        <button onClick={addMessage}>ADD</button>
      </form>
      {messagesList.map((message, i) => <MessageList key={i} 
      text = {message.text} />)}
      {/* {showCounter && <Counter />} */}
    </div>
  );
}

export default App;
