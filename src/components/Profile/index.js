import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";

import {
  changeName,
  checkBoxOff,
  toggleShowName,
} from "../../store/profile/action";
import { ThemeContext } from "../utils/ThemeContext";
import {
  selectProfileCheckBox,
  selectProfileName,
  selectProfileShowName,
} from "../../store/profile/selectors";

const withContext = (Component) => {
  return (...props) => {
    const theme = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
  };
};

export const Profile = ({ theme }) => {
  const [value, setValue] = useState("");
  const showName = useSelector(selectProfileShowName);
  const name = useSelector(selectProfileName);
  const dispatch = useDispatch();

  const checkBox = useSelector(selectProfileCheckBox);
  const dispatchBox = useDispatch();

  const handelClick = () => {
    dispatch(toggleShowName);
  };

  const onChange = () => {
    dispatchBox(checkBoxOff);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue("");
  };

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h2 style={{ color: theme.theme === "light" ? "red" : "blue" }}>
        This is page of profile
      </h2>
      <button onClick={handelClick}>Toggle show name</button>
      {showName && <div>{name}</div>}

      <form onClick={handelSubmit}>
        <input type="text" value={value} onChange={handelChange} />
        <button>Submit</button>
      </form>

      <Checkbox value={checkBox} onChange={onChange}></Checkbox>
      {checkBox && <div>Check box is on</div>}
    </>
  );
};

export const ThemeProfile = withContext(Profile);
