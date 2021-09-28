import { ref, set, onValue } from "@firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../services/firebase";

import { changeName } from "../../store/profile/action";

export const ProfileForm = () => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    setValue("");
    set(ref(db, "user"), {
      username: value,
    });
  };

  const handelChange = (e) => {
    setValue(e.target.value);
  };


  useEffect(() => {
    const userDbRef = ref(db, "user");
    onValue(userDbRef, (snapshot) => {
      const data = snapshot.val();
      console.log('------------', data);
      setName(data?.username || '')
    });
  },[]);

  return (
    <form onClick={handelSubmit}>
      <input type="text" value={value} onChange={handelChange} />
      <button>Submit</button>
    </form>
  );
};
