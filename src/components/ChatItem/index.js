import { ListItem } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';

export const ChatItem = ({ item, onDelete, id }) => {
  const showName = useSelector((state) => state.showName);
  console.log(showName);

  const handelDelete = () => {
    onDelete(id);
  };

    return (
            <ListItem>
              <Link to={`/chats/${item.id}`}>{item.name}</Link>
              <span onClick={handelDelete}>Delete<DeleteIcon  /></span>
            </ListItem>
    );
};