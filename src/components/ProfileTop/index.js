import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowName } from "../../store/profile/action";

import {
  selectProfileName,
  selectProfileShowName,
} from "../../store/profile/selectors";
import { ThemeContext } from "../utils/ThemeContext";

export const ProfileTop = ({onLogaut}) => {
  const showName = useSelector(selectProfileShowName);
  const name = useSelector(selectProfileName);
  const theme = useContext(ThemeContext);

  const handelClick = () => {
    onLogaut();
  };

  return (
    <>
      <h2 style={{ color: theme.theme === "light" ? "red" : "blue" }}>
        This is page of profile
      </h2>
      <button onClick={handelClick}>Logaut</button>
      {showName && <div>{name}</div>}
    </>
  );
};
