import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";

import { ThemeContext } from "../utils/ThemeContext";
import { selectProfileCheckBox } from "../../store/profile/selectors";
import { checkBoxOff, onLogout } from "../../store/profile/action";
import { ProfileTop } from "../ProfileTop";
import { ProfileForm } from "../ProfileForm";
import { Button } from "@material-ui/core";

const withContext = (Component) => {
  return (...props) => {
    const theme = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
  };
};

export const Profile = ({ theme }) => {
  const checkBox = useSelector(selectProfileCheckBox);
  const dispatchBox = useDispatch();
  const dispatch = useDispatch();

  const onChange = () => {
    dispatchBox(checkBoxOff);
  };

  const handleLogout = () => {
    dispatch(onLogout);
  };

  return (
    <div className="profile">
      <ProfileTop theme={theme} />
      <ProfileForm />
      <br/>
      <hr/>
      <Button variant="outlined" onClick={handleLogout}>Logaut</Button>

{/*       <Checkbox value={checkBox} onChange={onChange}></Checkbox>
      {checkBox && <div>Check box is on</div>} */}
    </div>
  );
};

export const ThemeProfile = withContext(Profile);
