import React from "react";
import { List } from "@material-ui/core";
import { ChatItem } from "../ChatItem";
import { FormAddChat } from "../FormAddChat";


export const ChartList = ({ items, onDeleteChat, onAddChat }) => {

    return (
      <>
      <List> 
        {items.map((item) => (
          <ChatItem item={item} 
          key={item.id} 
          id={item.id} 
          onDelete={onDeleteChat}/>
        ))}
        <FormAddChat onAddChat={onAddChat} />
      </List>
      </>
    );
};