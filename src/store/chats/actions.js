export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload:name
});

export const deleteChat = (id) => ({
    type: ADD_CHAT,
    payload: id
});