import { List } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { ChatItem } from "../ChatItem";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export const ChartList = ({ items, onDeleteChat, onAddChat }) => {
  const [value, setValue] = useState('');

  const handelChange = (e) => {
      setValue(e.target.value);
  };

  const handelSubmit = (e) => {
      e.preventDefault();
      onAddChat(value);
  };
    return (
      <>
      <List> 
        {items.map((item) => (
          <ChatItem item={item} 
          key={item.id} 
          id={item.id} 
          onDelete={onDeleteChat}/>
        ))}
        <form onSubmit={handelSubmit}>
          <TextField
            autoFocus
            value={value}
            label="New chat"
            type="text"
            onChange={handelChange}
            />
            <Button 
            variant="outlined" 
            disabled={!value} 
            onClick={handelSubmit}
            >Add Chat
            </Button>
         </form>
      </List>
      </>
    );
};