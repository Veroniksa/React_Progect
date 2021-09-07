import "../Message.css";
import { useEffect, useState, useCallback } from 'react';
import {MessageList} from '../MessageList';
import '../MessageList/MessageList.css';

import {ThemeProvider} from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

import { AUTHORS } from '../utils';
import { Form } from '../Form';
import { ChartList } from '../ChstList';
import { ButtonTop } from '../ButtonTop';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: blue[500],
    },
  },
});

const list = [
  {name: "Leonardo",
   id: "1"},
   {name: "Alieno",
   id: "2"},
   {name: "Maria",
   id: "3"},
];


/* const requestBot = [
  {id:1, text: "I am stupid bot"},
  {id:2, text: "Next"},
  {id:3, text: "Jast Do It"}
];
 */

const mess = {text:"", author: AUTHORS.HUMAN};

function Chats() {

  const [items, setItems] = useState([
    {name: "Leonardo",
     id: "1"},
     {name: "Aiello",
     id: "2"},
     {name: "Maria",
     id: "3"},
  ]);

  const [messagesList, setMessagesList] = useState([]);

  useEffect(()=> {
   if(messagesList.length && messagesList[messagesList.length - 1].author !== AUTHORS.HUMAN){
     const ansver = {text: "Hello", author: AUTHORS.bot};
      const timer = setTimeout(()=>{
        setMessagesList([...messagesList, ansver]);
      }, 1000); 
     return () => clearTimeout(timer);
   }
  },[messagesList]);


  const handelAddMessage = useCallback(
    (text) => {
      setMessagesList((prevMess) => [
        ...prevMess, 
        {
          text,
          author: AUTHORS.HUMAN,
          id: `mess-${Date.now()}` ,
        }
      ]);
  },[]);
  
  return (
    <ThemeProvider theme={theme}>
    <div className="MessageList">
      <ChartList items={items}/>
      <Form onSubmit={handelAddMessage}/>
      {messagesList.map((message, i) => ( 
      <MessageList key={i} text = {message.text} />))}
    </div>
    <ButtonTop>Add Massage</ButtonTop>
    </ThemeProvider>
  );
}

export default Chats;
