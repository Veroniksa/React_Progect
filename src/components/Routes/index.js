import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Home } from "../Home";
import Chats from "../Chats/";
import { Profile, ThemeProfile } from "../Profile";

import "./style.css";
import { News } from "../News";
import { Weather } from "../Weather";
import { PrivateRoute } from "../PrivateRoute";
import { useEffect, useState } from "react";
import { PublicRoute } from "../PublicRoute";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, login, signUp, signOut } from "../../services/firebase";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if(user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });

    return unsubscribe;
  },[]);

   const handleLogin = async(email, pass) => {
    try{
      await login(email, pass);
      setAuthed(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    setAuthed(false);
  };

  const handleSignUp = () => {
    console.log("hello");
  }
  
  return (
    <BrowserRouter className="router">
      <div className="nav">
        <ul className="links">
          <li className="link">
            <Link to="chats">Chats</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="news">News</Link>
          </li>
          <li>
            <Link to="weather">Weather</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <PrivateRoute path="/profile" authed={authed}>
          <ThemeProfile onLogaut={handleLogout} />
        </PrivateRoute>
        <PrivateRoute static path="/chats/:itemId?" authed={authed}>
          <Chats />
        </PrivateRoute>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <PublicRoute path="/login" exact authed={authed}>
          <Home onLogin={handleLogin} />
        </PublicRoute>
        <PublicRoute path="/signup" exact authed={authed}>
          <Home onSignUp={handleSignUp} />
        </PublicRoute>
        <Route>
          <h3>Error: 404</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
