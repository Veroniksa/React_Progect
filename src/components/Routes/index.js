import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Home } from "../Home";
import Chats from "../Chats/";
import { Profile, ThemeProfile } from "../Profile";

import "./style.css";
import { News } from "../News";
import { Weather } from "../Weather";

export const Routes = () => {
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
        <Route path="/profile">
          <ThemeProfile />
        </Route>
        <Route static path="/chats/:itemId?">
          <Chats />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route>
          <h3>Error: 404</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
