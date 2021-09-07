import { List, ListItem } from "@material-ui/core";
import React from "react";
import { ButtonTop } from "../ButtonTop";

export const ChartList = ({ items }) => {
    return (
      <List> 
        {items.map((item) => (
          <ListItem 
          key={item.id} 
          className="item">{item.name}</ListItem>
        ))}
        <ButtonTop>Add Chat</ButtonTop>
      </List>
    );
};