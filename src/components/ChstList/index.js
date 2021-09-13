import { List, ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { ButtonTop } from "../ButtonTop";
import { ChatItem } from "../ChatItem";

export const ChartList = ({ items }) => {
    return (
      <List> 
        {items.map((item) => (
          <ChatItem item={item} key={item.id}/>
        ))}
        <ButtonTop>Add Chat</ButtonTop>
      </List>
    );
};