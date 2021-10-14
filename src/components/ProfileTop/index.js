import { useContext, useState } from "react";
import { useSelector } from "react-redux";

import {
  selectProfileName,
  selectProfileShowName,
} from "../../store/profile/selectors";
import { ThemeContext } from "../utils/ThemeContext";

export const ProfileTop = ({onLogaut}) => {
  const showName = useSelector(selectProfileShowName);
  //const name = useSelector(selectProfileName);
  const theme = useContext(ThemeContext);
  const [name, setName] = useState("");

  /* const handelClick = () => {
    onLogaut();
  }; */


  return (
    <>
      <h2 style={{ color: theme.theme === "light" ? "blueviolet" : "blue" }}>
        This is page of profile
      </h2>
      <hr/>
      {(!{name} && <h3>Welcome, {name}</h3>)}
      {/* <button onClick={handelClick}>Logaut</button> */}
      {<div>{name}</div>}
    </>
  );
};
