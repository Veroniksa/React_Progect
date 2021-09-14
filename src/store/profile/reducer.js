import { CHECK_BOX, TOOGLE_SHOW_NAME } from "./action";

const initialState = {
    showName: false,
    checkBox: false,
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
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
        default:
            return state;
    } 
};