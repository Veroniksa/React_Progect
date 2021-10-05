import { CHANGE_STATUS, HANDEL_LOGIN } from "./actions";

const initialState = {
  email: "",
  pass: "",
  authed: false,
  setAuthed: false,
};

export const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDEL_LOGIN: {
      return {
          ...state,
          email: state.email,
          pass: state.pass,
      };
  }
    case CHANGE_STATUS: {
      return {
        ...state,
      };
    }
  }
};
