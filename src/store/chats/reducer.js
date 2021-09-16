import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initalState = {
  items: [],
};

export const chatsReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      return {
        ...state,
        items: [...state.items, { id: `chat-${Date.now()}`, name: payload }],
      };
    }
    case DELETE_CHAT: {
      const newChats = state.items.filter(({ id }) => id !== payload);
      return {
        ...state,
        items: newChats,
      };
    }
    default:
      return state;
  }
};
