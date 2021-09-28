import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";

import { ThemeContext } from "../utils/ThemeContext";
import { selectProfileCheckBox } from "../../store/profile/selectors";
import { checkBoxOff } from "../../store/profile/action";
import { ProfileTop } from "../ProfileTop";
import { ProfileForm } from "../ProfileForm";

const withContext = (Component) => {
  return (...props) => {
    const theme = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
  };
};

export const Profile = ({ theme, onLogaut }) => {
  const checkBox = useSelector(selectProfileCheckBox);
  const dispatchBox = useDispatch();

  const onChange = () => {
    dispatchBox(checkBoxOff);
  };

  const handelClick = () => {
    onLogaut();
  };

  return (
    <>
      <ProfileTop theme={theme} />
      <button onClick={handelClick}>Logaut</button>

      <ProfileForm />

      <Checkbox value={checkBox} onChange={onChange}></Checkbox>
      {checkBox && <div>Check box is on</div>}
    </>
  );
};

export const ThemeProfile = withContext(Profile);
