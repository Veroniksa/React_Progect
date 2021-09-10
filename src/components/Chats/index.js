
import {useEffect, useState, useCallback } from 'react';
import { Redirect, useParams } from "react-router";
import "../Message.css";
import {MessageList} from '../MessageList';
import '../MessageList/MessageList.css';

import { AUTHORS } from '../utils/constans';
import { Form } from '../Form';
import { ChartList } from '../ChstList';
import { ButtonTop } from '../ButtonTop';


const initialMessages = {
  'Leonardo-1': [
    {text: "Ciao", author: "HUMAN", id: "mess-2"},
    {text: "Come va?", author: "HUMAN", id: "mess-1"}
  ],
  'Alieno-2': [
    {text: "Pizza", author: "HUMAN", id: "mess-3"},
    {text: "Ti va?", author: "HUMAN", id: "mess-4"}
  ],
  'Maria-3': []
};

const list = [
  {name: "Leonardo",
   id: "Leonardo-1"},
   {name: "Alieno",
   id: "Alieno-2"},
   {name: "Maria",
   id: "Maria-3"},
];

/* const mess = {text:"", author: AUTHORS.HUMAN}; */

function Chats() {

  const {itemId} = useParams();

  const [items, setItems] = useState(list);

  const [messagesList, setMessagesList] = useState(initialMessages);

  const sendMessage = useCallback((messagesList) => {
    setMessagesList((prevMessage) => ({
      ...prevMessage,
      [itemId]:[...prevMessage[itemId], messagesList]
  }));
  }, [itemId]);

  useEffect(()=> {
    let timer;
    const curMess = messagesList[itemId];

   if(!!itemId && curMess?.[curMess.length - 1]?.author === AUTHORS.HUMAN){
      timer = setTimeout(()=>{
        sendMessage({
        text: "Hello", 
        author: AUTHORS.bot,
        id: `mess-${Date.now()}`
      });
      }, 2000); 
   }
    return () => clearTimeout(timer);
  },[messagesList]);


  const handelAddMessage = useCallback(
    (text) => {
      sendMessage(
        {
          text,
          author: AUTHORS.HUMAN,
          id: `mess-${Date.now()}` ,
        }
      );
  },[itemId, sendMessage]); 

/*   const handelAddMessage = useCallback(
    ({text: text}) => {
      setMessagesList((prevMessage) => [
        ...prevMessage, 
        text
      ]);
  },[]); */

/*   if(!items[itemId]){
    return (<Redirect to="nochats"/>)
  } */
  
  return (
    <div className="MessageList">
      <ChartList items={items}/>
        {!!itemId && (
          <>
            <Form onSubmit={handelAddMessage} />
            {messagesList[itemId].map((message, i) => ( 
            <MessageList key={message.id} text = {message.text} />))}
            </>
        )}
      </div>       
  );
}

export default Chats;
