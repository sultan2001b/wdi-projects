import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import Login from "./Login";
import Main from "./Main";
import SignUp from "./SignUp";


class Routes extends React.Component {
    render() {
        return <HashRouter>
            <div>
              <nav>
                <Link to="/">Login</Link>
                <Link to="/Main">Main</Link>
                <Link to="/SignUp">SignUp</Link>
              </nav>

              <Route exact path="/" component={Login} />
              <Route path="/Login" component={Login} />
              <Route path="/Main" component={Main} />
              <Route path="/SignUp" component={SignUp} />
            </div>
          </HashRouter>;
    }
}

export default Routes;
