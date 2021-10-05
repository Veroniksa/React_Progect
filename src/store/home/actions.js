import { onAuthStateChanged } from "@firebase/auth";
import { auth, login, signUp } from "../../services/firebase";

export const HANDEL_LOGIN = "HOME::HANDEL_LOGIN";
export const CHANGE_STATUS = "HOME::CHANGE_STATUS";

export const handelLodin = (email, pass ) => ({
  type: HANDEL_LOGIN,
  payload: {
    email,
    pass,
  },
});

export const authUser = (authed,  setAuthed) => ({
  type: CHANGE_STATUS,
  payload: {
    authed: true,
    setAuthed: true,
  }
});

export const handleLoginFb = (email, pass) => (dispatch) => {
  dispatch(handelLodin(email, pass));
  try {
    login(email, pass);
    //setAuthed(true);
  } catch (e) {
    console.log(e);
    //setError()
  }
};

export const unsubscribe = onAuthStateChanged(auth, (user) => (dispatch)=> {
  console.log(user);
  if (user) {
    dispatch(authUser);
  }
  return;
});

export const userLogin = (email, pass) => {
  try {
    login(email, pass);
    //setAuthed(true);
  } catch (e) {
    console.log(e);
    //setError()
  }
}

export const userSignUp = (email, pass) => {
  try {
    signUp(email, pass);
    //setAuthed(true);
  } catch (e) {
    console.log(e);
    //setError()
  }
}
