import './App.css';
//import { Message } from './components/Message';
import "./components/Message.css";
import {Counter} from './components/Counter';
import { useEffect, useState, useRef, useCallback } from 'react';
import {MessageList} from './components/MessageList';
import './components/MessageList/MessageList.css';
import { Chat } from './components/Chat';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';





const list = [
  {name: "Leonardo",
   id: "1"},
   {name: "Alieno",
   id: "2"},
   {name: "Maria",
   id: "3"},
];


const requestBot = [
  {id:1, text: "I am stupid bot"},
  {id:2, text: "Next"},
  {id:3, text: "Jast Do It"}
];

const mess = {text:"", author:"bot"};

function App() {

  const inputRef = useRef(null);

  const [listsItem, setListItem] = useState([
    {name: "Leonardo",
     id: "1"},
     {name: "Aiello",
     id: "2"},
     {name: "Maria",
     id: "3"},
  ]);

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
     inputRef.current.focus();
   }
  },[messagesList]);

/* 
  const handelAddMessage = () => {
    setMessagesList((prevMessagesList) => [...prevMessagesList, 
      {text: "Message UMANO", author: "Umano"}]);
  }; */

  const handelChange = useCallback((event) => {
    setMessageAdd({...messageAdd, text: event.target.value});
    console.log(messagesList.length);
  },[messagesList]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setMessagesList([...messagesList, messageAdd]);
    setMessageAdd("");
    inputRef.current.focus();
  };

  return (
    <div className="MessageList">
      {/* <div onClick={toggleCounter}>Toggle Counter</div> */}
      {/* <Message name="Leonardo" age={26} text={a} /> */}
      {/* <button onClick={handelAddMessage}>Add Message</button> */}
      {listsItem.map((item, id) => <ListItem key={id} className="listItem">{item.name}</ListItem>)}
      <FormControl 
      className="MessageListForm" 
      onSubmit={handelSubmit}>
        <TextField autoFocus 
        label="Message"
        inputRef={inputRef} 
        className="MessageListInput" 
        value={messageAdd.text} 
        onChange={handelChange}/>
        <Button 
        variant="outlined" 
        size="small" 
        onClick={handelSubmit} 
        className="MessageListBTN"
        >ADD</Button>
      </FormControl>
      {messagesList.map((message, i) => <MessageList key={i} text = {message.text} />)}
      {/* {showCounter && <Counter />} */}
    </div>
  );
}

export default App;
