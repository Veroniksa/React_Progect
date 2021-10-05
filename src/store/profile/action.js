import { onValue, ref, set } from "@firebase/database";
import { db } from "../../services/firebase";


export const TOOGLE_SHOW_NAME = "PROFILE::TOGGLE_SHOW_NAME";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const CHECK_BOX = "PROFILE::CHECK_BOX";
export const ON_AUTH = "PROFILE::ON_AUTH";

export const toggleShowName = {
  type: TOOGLE_SHOW_NAME,
};

export const checkBoxOff = {
  type: CHECK_BOX,
};

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: name,
});

export const onAuth = (user) => ({
  type: ON_AUTH,
  payload: user,
});

/* export const onAuthFb = onAuthStateChanged(auth, (user) => (dispatch) => {
    dispatch(onAuth);
    console.log(user);
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
}); */

export const userChange = () => (dispatch) => {
  const userDbRef = ref(db, "user");
  onValue(userDbRef, (snapshot) => {
    const data = snapshot.val();
    console.log("-----------", data);
    dispatch(onAuth(Object.values(data.username || "")));
    //setName(data?.username || '');
  });
};

export const userNameChange = (value) => (dispatch) => {
    set(ref(db, "user"), {
        username: value,
      });
};