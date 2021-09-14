import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';

import { changeName, checkBoxOff, toggleShowName } from "../../store/profile/action";
import { ThemeContext } from "../utils/ThemeContext";

const withContext = (Component) => {//Дикоратор
  return (...props) => {
    const theme = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
  };
};

  export const Profile = ({theme}) => {
    const [value, setValue] = useState('');
    const showName = useSelector((state) => state.showName);
    const name = useSelector((state) => state.name);
    const dispatch = useDispatch();

    const checkBox = useSelector((state) => state.checkBox);
    const dispatchBox = useDispatch();

    const handelClick = () => {
      dispatch(toggleShowName); 
    };

    const onChange = () => {
      dispatchBox(checkBoxOff);
    };

    const handelSubmit = (e) => {
      e.preventDefault();
      //вызов этой функции вызываем на месте
      // и это есть объек со свойством payload = value 
      //и благодоря этому reducer получает это значение
      dispatch(changeName(value));
      setValue('');
    };

    const handelChange = (e) => {
      setValue(e.target.value);

    };

    return (
      <>
      <h2 style={{color: theme.theme === 'light' ? 'red' : 'blue'}}>This is page of profile</h2>
{/*       <button onClick={theme.changeTheme}>Toggle theme</button> */}
      <button onClick={handelClick}>Toggle show name</button>
      {showName && <div>{name}</div>}

      <form onClick={handelSubmit}>
        <input type="text" value={value} 
        onChange={handelChange} />
        <button>Submit</button>
      </form>

      <Checkbox value={checkBox} onChange={onChange}></Checkbox>
      {checkBox && <div>Check box is on</div>}

      </>
    )
  }

export const ThemeProfile = withContext(Profile);//дикороирование(обертка)