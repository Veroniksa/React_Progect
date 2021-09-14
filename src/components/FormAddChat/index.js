import React from "react";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const FormAddChat = ( onAddChat) => {

    const [value, setValue] = useState('');

    const handelChange = (e) => {
        setValue(e.target.value);
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        onAddChat(value);
    };
      
        return (
          <div>
            <Dialog onSubmit={handelSubmit} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Digita il nome del nuovo chat.
                </DialogContentText>
                <TextField
                  autoFocus
                  value={value}
                 /*  id={item.id} */
                  label="Name"
                  type="text"
                  onChange={handelChange}
                />
              </DialogContent>
              <DialogActions>
              <Button variant="outlined" disabled={!value}>Add Chat</Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
