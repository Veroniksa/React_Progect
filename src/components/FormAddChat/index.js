import React, { useEffect } from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { onValue, ref, set } from "@firebase/database";
import { db } from "../../services/firebase";

export const FormAddChat = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState();

  const [value, setValue] = useState("");

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const itemsDbRef = ref(db, "items");
    onValue(itemsDbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("-----", data);
      setItems(Object.values(data || {}));
    });
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();

    const newId = `chats-${Date.now()}`;

    const itemsDbRef = ref(db, `items/${newId}`);

    set(itemsDbRef, {
      id: newId,
      name: value,
    });

    //dispatch(addChat(value));
    setValue("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <TextField
        autoFocus
        value={value}
        label="New chat"
        type="text"
        onChange={handelChange}
      />
      <Button variant="outlined" disabled={!value} type="submit">
        Add Chat
      </Button>
    </form>
  );
};
