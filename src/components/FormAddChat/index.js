import React from "react";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const FormAddChat = ({onAddChat}) => {

  const [value, setValue] = useState('');

  const handelChange = (e) => {
    setValue(e.target.value);
};

const handelSubmit = (e) => {
    e.preventDefault();
    onAddChat(value);
    setValue('');
};

return(
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
    type="submit"
    >Add Chat
    </Button>
 </form>
)
}