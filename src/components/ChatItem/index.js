import { ListItem } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ChatItem = ({ item }) => {
  const showName = useSelector((state) => state.showName);
  console.log(showName);
    return (
            <ListItem>
              <Link to={`/chats/${item.id}`}>{item.name}</Link>
            </ListItem>
    );
};