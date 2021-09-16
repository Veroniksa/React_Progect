import { useEffect, useState, useCallback, useMemo } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import "../Message.css";
import { MessageList } from "../MessageList";
import "../MessageList/MessageList.css";

import { AUTHORS } from "../utils/constans";
import { Form } from "../Form";
import { ChartList } from "../ChstList";
import { useSelector, useDispatch } from "react-redux";

import { deleteChat } from "../../store/chats/actions";
import { addMessage } from "../../store/messages/actions";
import { selectChats, selectIfChatExists } from "../../store/chats/selectors";
import {selectMessages} from '../../store/messages/selectors';

const initialMessages = {
  "Leonardo-1": [
    { text: "Ciao", author: "HUMAN", id: "mess-2" },
    { text: "Come va?", author: "HUMAN", id: "mess-1" },
  ],
  "Alieno-2": [
    { text: "Pizza", author: "HUMAN", id: "mess-3" },
    { text: "Ti va?", author: "HUMAN", id: "mess-4" },
  ],
  "Maria-3": [],
};

const list = [
  { name: "Leonardo", id: "Leonardo-1" },
  { name: "Alieno", id: "Alieno-2" },
  { name: "Maria", id: "Maria-3" },
];

function Chats() {

  const { itemId } = useParams();

  const dispatch = useDispatch();

  const items = useSelector(selectChats);

  const messagesList = useSelector(selectMessages);

  const selectCatExists = useMemo(
    () => selectIfChatExists(itemId),[
      itemId
    ]);

    const chatExists = useSelector(selectCatExists);

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessage(itemId, text, author));
    },
    [itemId]
  );

  useEffect(() => {
    let timer;
    const curMess = messagesList[itemId];

    if (!!itemId && curMess?.[curMess.length - 1]?.author === AUTHORS.HUMAN) {
      timer = setTimeout(() => {
        sendMessage("Hello", AUTHORS.bot);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [messagesList]);

  const handelAddMessage = useCallback(
    (text) => {
      sendMessage(text, AUTHORS.HUMAN);
    },
    [sendMessage]
  );



  return (
    <div className="MessageList">
      <ChartList itemId={itemId} />
      {!!itemId && chatExists && (
        <>
          <Form onSubmit={handelAddMessage} />
          {(messagesList[itemId] || []).map((message, i) => (
            <MessageList key={message.id} text={message.text} />
          ))}
        </>
      )}
    </div>
  );
}

export default Chats;
