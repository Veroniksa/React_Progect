import { ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export const ChatItem = ({ item }) => {
    return (
            <ListItem>
              <Link to={`/chats/${item.id}`}>{item.name}</Link>
            </ListItem>
    );
};