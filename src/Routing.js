import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Form from './components/Form'
import People from './components/People'
import Auth from './components/Auth'

function Routing() {
  return(
    <Router>
        <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Form" component={Form} />
        <Route path="/People" component={People} />
        </Switch>
    </Router>
    );
}

export default Routing;