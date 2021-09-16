import React, { useCallback } from "react";
import { List } from "@material-ui/core";
import { ChatItem } from "../ChatItem";
import { FormAddChat } from "../FormAddChat";
import { useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";

export const ChartList = ({ itemId }) => {

  const items = useSelector(selectChats);
  return (
    <>
      <List>
        {items.map((item) => (
          <ChatItem
            item={item}
            itemId={itemId}
            key={item.id}
            id={item.id}
          />
        ))}
        <FormAddChat />
      </List>
    </>
  );
};
