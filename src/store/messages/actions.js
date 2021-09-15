export const ADD_MESSAGE = 'MESSAGESS::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGESS::DELETE_MESSAGE';

export const addMessage = (itemId, text, author) => ({
    type: ADD_MESSAGE,
    payload:{
        itemId,
        text,
        author,
    }
});

export const deleteMessage = (itemId, id) => ({
    type: DELETE_MESSAGE,
    payload: {
        itemId,
        id,
    }
})