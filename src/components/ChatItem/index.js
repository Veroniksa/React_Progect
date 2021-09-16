import { ListItem } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";

import "./style.css";

export const ChatItem = ({ item, id, itemId }) => {
  const items = useSelector(selectChats);

  const history = useHistory();

  const dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(deleteChat(id));

    if (itemId !== id) {
      return;
    }

    if (!!items.length === 1) {
      history.push(`/chats/${items[0].id}`);
    } else {
      history.push(`/chats`);
    }
  };

  return (
    <ListItem className="ListItem">
      <Link to={`/chats/${item.id}`}>{item.name}</Link>
      <DeleteIcon className="ListBTN" onClick={handelDelete} />
    </ListItem>
  );
};
