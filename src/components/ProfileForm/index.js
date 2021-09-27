import { useState } from "react";
import { useDispatch } from "react-redux";

import { changeName } from "../../store/profile/action";

export const ProfileForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue("");
  };

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onClick={handelSubmit}>
      <input type="text" value={value} onChange={handelChange} />
      <button>Submit</button>
    </form>
  );
};
