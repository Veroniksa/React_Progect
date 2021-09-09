import { List, ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { ButtonTop } from "../ButtonTop";

export const ChartList = ({ items }) => {
    return (
      <List> 
        {items.map((item) => (
          <ListItem 
          key={item.id} 
          className="item"><Link to={`/chats/${item.id}`}>{item.name}</Link></ListItem>
        ))}
        <ButtonTop>Add Chat</ButtonTop>
      </List>
    );
};