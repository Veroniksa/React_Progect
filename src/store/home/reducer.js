import { HANDEL_LOGIN } from "./actions";

const initialState = {
  email: [],
  pass: [],
};

export const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDEL_LOGIN: {
      return {
        ...state,
      };
    }
  }
};
