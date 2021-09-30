import { ListItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteChat } from "../../store/chats/actions";
import { selectChats, selectChatsLength, selectFerstChatId } from "../../store/chats/selectors";

import "./style.css";
import { ChatItemView } from "./ChatItenView";


export const ChatItemContainer = ({ item }) => {
  const { itemId } = useParams();
  const ferstChatId = useSelector(selectFerstChatId);
  const chatsLength = useSelector(selectChatsLength);

  const history = useHistory();

  const dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(deleteChat(item.id));

    if (itemId !== item.id) {
      return;
    }

    if (!chatsLength === 1) {
      history.push(`/chats/${ferstChatId}`);
    } else {
      history.push(`/chats`);
    }
  };


  return <ChatItemView name={item.name} id={item.id} onDelete={handelDelete} />
};
