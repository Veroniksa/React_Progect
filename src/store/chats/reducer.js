import {ADD_CHAT, DELETE_CHAT, CHECK_BOX} from './actions'

const initalState ={
    items: [],
};

export const chatsReducer = (state = initalState, {type, payload}) => {
    switch(type) {
        case ADD_CHAT: {
            return {
                ...state,
                items: [...state.items, {id:`chat-${Date.now()}`, name: payload}],
            };
        }
/*         case CHECK_BOX: {
            return {
                ...state,
                checkBox: !state.checkBox
            };
        } */
        case DELETE_CHAT: {
            const newChats = state.items(({id}) => id !== payload);
            return {
                ...state,
                items: newChats,
            };
        }
        default:
            return state;
    } 
};