import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import "./App.css";
import UpdateForm from "./UpdateForm";
import Smurfs from "./Smurfs";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  render() {
    return (
      <Router>
        <NavLink to="/">Home</NavLink>
        <Switch>
          <Route path="/" exact component={Smurfs} />
          <Route path="/update/:id" component={UpdateForm} />
          <Route path="*" render={()=> <h1>NOT FOUND</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
