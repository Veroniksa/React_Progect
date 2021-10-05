import { login } from "../../services/firebase";

export const HANDEL_LOGIN = "HOME::HANDEL_LOGIN";

export const handelLodin = (email, pass) => ({
  type: HANDEL_LOGIN,
  payload: {
    email,
    pass,
  },
});

export const handleLoginFb = (email, pass) => () => {
  try {
    login(email, pass);
    //setAuthed(true);
  } catch (e) {
    console.log(e);
    //setError()
  }
};
