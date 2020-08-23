

import React, { Component } from "react";
import UserInfo from "./components/userinfo";
import ProbMaking from "./components/probmaking";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  handleChangeName = (inputName) => {
    this.setState({ name: inputName });
  };
  render() {
    return (
      <div>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/userinfo">
                <UserInfo
                  onChangeName={(e) => this.handleChangeName(e)}
                />
              </Route>
              <Route exact path="/probmaking">
                <ProbMaking name={this.state.name} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
