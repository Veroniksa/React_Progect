import { useEffect, useState, useCallback, useMemo } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { MessageList } from "../MessageList";
import "../MessageList/MessageList.css";
import "../Message.css";

import { AUTHORS } from "../utils/constans";
import { FormContainer } from "../Form/FormContainer";
import { ChartList } from "../ChstList";

import { addMessageWithReplay } from "../../store/messages/actions";
import { selectIfChatExists } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";

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

  const messagesList = useSelector(selectMessages);

  const selectCatExists = useMemo(() => selectIfChatExists(itemId), [itemId]);

  const chatExists = useSelector(selectCatExists);

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessageWithReplay(itemId, text, author));
    },
    [itemId]
  );


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
          <FormContainer onSubmit={handelAddMessage} />
          {(messagesList[itemId] || []).map((message, i) => (
            <MessageList key={message.id} text={message.text} />
          ))}
        </>
      )}
    </div>
  );
}

export default Chats;
