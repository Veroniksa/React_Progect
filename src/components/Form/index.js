import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { AUTHORS } from '../utils';

const mess = {text:"", author: AUTHORS.HUMAN};

export const Form = ({onSubmit}) => {
  const inputRef = useRef(null);

  const[messageAdd, setMessageAdd] = useState(mess);


  const handelChange = useCallback((event) => {
    setMessageAdd({...messageAdd, text: event.target.value});
  },[]);


  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(messageAdd);

    inputRef.current.focus();
  };


  return (
    <FormControl 
    className="MessageListForm" 
    onSubmit={handelSubmit}>
      <TextField autoFocus 
      label="Message"
      inputRef={inputRef} 
      className="MessageListInput" 
      value={messageAdd.text}
      onChange={handelChange}/>
      <Button 
      variant="outlined" 
      size="small" 
      onClick={handelSubmit} 
      className="MessageListBTN"
      >ADD</Button>
    </FormControl>
  )
}