import './App.css';
//import { Message } from './components/Message';
import "./components/Message.css";
import {Counter} from './components/Counter';
import { useEffect, useState } from 'react';
import {MessageList} from './components/MessageList';
import './components/MessageList/MessageList.css';

const a = "Vivo in Italia e mangio la pizza... che buona la pizza";

const requestBot = [
  {id:1, text: "I am stupid bot"},
  {id:2, text: "Next"},
  {id:3, text: "Jast Do It"}
];

const mess = {text:"", author:"bot"};

function App() {
/*   const [showCounter, setShowCounte] = useState(true);

  const toggleCounter = () => {
    setShowCounte(!showCounter);
  } */


  //const [value, setValue] = useState("");

  const [messagesList, setMessagesList] = useState([]);


  const[messageAdd, setMessageAdd] = useState(mess);

  useEffect(()=> {
   if(messagesList.length){
     const ansver = {text: "Hello", author: "robot"};
     if(messagesList[messagesList.length - 1].author !== "robot"){
      setTimeout(()=>{
        setMessagesList([...messagesList, ansver]);
      }, 1000);
     }
   }
  },[messagesList]);



  const handelAddMessage = () => {
    setMessagesList((prevMessagesList) => [...prevMessagesList, 
      {text: "Message UMANO", author: "Umano"}]);
  };

  const handelChange = (event) => {
    setMessageAdd({...messageAdd, text: event.target.value});
  };

/*   const handelSubmit = (event) => {
    setMessageAdd(event.target.value);
    setMessagesList([...MessageList, message.text]);
  }; */

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Hia clicatto Add");
    setMessagesList([...messagesList, messageAdd]);
  };

  return (
    <div className="MessageList">
      {/* <div onClick={toggleCounter}>Toggle Counter</div> */}
      {/* <Message name="Leonardo" age={26} text={a} /> */}
      {/* <button onClick={handelAddMessage}>Add Message</button> */}
      <form className="MessageListForm" onSubmit={handelSubmit}>
        <input className="MessageListInput" value={messageAdd.text} onChange={handelChange}/>
        <button className="MessageListBTN">ADD</button>
      </form>
      {messagesList.map((message, i) => <MessageList key={i} text = {message.text} />)}
      {/* {showCounter && <Counter />} */}
    </div>
  );
}

export default App;
