import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

  const withContext = (Component) => {
    return(props) => {
      const theme = useContext(ThemeContext);
      return <Component {...props} theme={theme} />
    };
  };

  export const Profile = ({theme}) => {
    return (
      <>
      <h2 style={{color: theme.theme === 'light' ? 'red' : 'blue'}}>This is page of profile</h2>
      <button onClick={theme.changeTheme}>Toggle theme</button>
      </>
    )
  }

export const ThemeProfile = withContext(Profile);