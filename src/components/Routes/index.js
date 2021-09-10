import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Home } from '../Home';
import Chats from "../Chats/";
import { Profile } from "../Profile";
import { Nochats } from "../Nochats";



export const Routes = () => {

    return (
        <BrowserRouter>
        <div>
            <h3>Menu</h3>
            <ul>
                <li>
                    <Link to="chats">Chats</Link>
                </li>
                <li>
                    <Link to="profile">Profile</Link>
                </li>
            </ul>
        </div>

          <Switch>
            <Route path="/profile">
                <Profile />
            </Route>
{/*             <Route path="/chats/:(/\d+)?">
                <Chats />
            </Route> */}
            <Route static path="/chats/:itemId?">
                <Chats />
            </Route>
            <Route path="/nochats">
                <Nochats />
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route>
                <h3>Error: 404</h3>
            </Route>
          </Switch>
        </BrowserRouter>
    )
}