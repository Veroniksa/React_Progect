import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Home } from "../Home";
import Chats from "../Chats/";
import { Profile, ThemeProfile } from "../Profile";

import "./style.css";
import { News } from "../News";
import { Weather } from "../Weather";
import { PrivateRoute } from "../PrivateRoute";
import { useState } from "react";
import { PublicRoute } from "../PublicRoute";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);
  const handelLogin = () => {
    setAuthed(true);
  };

  const handelLogaut = () => {
    setAuthed(false);
  };

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
          <ThemeProfile onLogaut={handelLogaut} />
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
        <PublicRoute path="/" exact authed={authed}>
          <Home onLogin={handelLogin} />
        </PublicRoute>
        <Route>
          <h3>Error: 404</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
