import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from '../Home';
import Chats from "../Chats/";

export const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/chats">
                <Chats />
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