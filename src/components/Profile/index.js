import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';

import { checkBoxOff, toggleShowName } from "../../store/profile/action";
import { ThemeContext } from "../utils/ThemeContext";

const withContext = (Component) => {//Дикоратор
  return (...props) => {
    const theme = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
  };
};

  export const Profile = ({theme}) => {
    const showName = useSelector((state) => state.showName);
    const dispatch = useDispatch();

    const checkBox = useSelector((state) => state.checkBox);
    const dispatchBox = useDispatch();

    const handelClick = () => {
      dispatch(toggleShowName); 
    };

    const onChange = () => {
      dispatchBox(checkBoxOff);
    };

    return (
      <>
      <h2 style={{color: theme.theme === 'light' ? 'red' : 'blue'}}>This is page of profile</h2>
      <button onClick={theme.changeTheme}>Toggle theme</button>
      <button onClick={handelClick}>Toggle show name</button>
      {showName && <div>Show name is true</div>}
      <Checkbox checked={true} onChange={onChange}></Checkbox>
      {checkBox && <div>Check box is on</div>}

      </>
    )
  }

export const ThemeProfile = withContext(Profile);//дикороирование(обертка)