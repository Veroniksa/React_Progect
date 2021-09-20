import { CHANGE_NAME, CHECK_BOX, TOOGLE_SHOW_NAME } from "./action";

const initialState = {
    showName: false,
    checkBox: false,
    name: "default"
};

export const profileReducer = (state = initialState, {type, payload}) => { //{type, payload} деструктаризация action
    switch(type) {
        case TOOGLE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName
            };
        }
        case CHECK_BOX: {
            return {
                ...state,
                checkBox: !state.checkBox
            };
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: payload,
            };
        }
        default:
            return state;
    } 
};