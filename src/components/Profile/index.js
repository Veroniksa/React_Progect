import { useContext } from "react";
import { store } from "../../store";
import { toggleShowName } from "../../store/profile/action";
import { ThemeContext } from "../utils/ThemeContext";

const withContext = (Component) => {//Дикоратор
  return (...props) => {
    const theme = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
  };
};

  export const Profile = ({theme}) => {
    const state = store.getState();

    console.log(state);

    const handelClick = () => {
      store.dispatch(toggleShowName); 
    };

    return (
      <>
      <h2 style={{color: theme.theme === 'light' ? 'red' : 'blue'}}>This is page of profile</h2>
      <button onClick={theme.changeTheme}>Toggle theme</button>
      <button onClick={handelClick}>Toggle show name</button>
      {state.showName && <div>Show name is true</div>}

      </>
    )
  }

export const ThemeProfile = withContext(Profile);//дикороирование(обертка)