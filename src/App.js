import { Routes } from './components/Routes';
import './App.css';
import { ThemeContext } from './components/utils/ThemeContext';
import { useCallback, useState } from 'react';
  
function App() {

  const [theme, setTheme] = useState("light");

  const changeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <Routes />
    </ThemeContext.Provider>
  );
}

export default App;
