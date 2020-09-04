import React, { Component } from 'react';
import UserInfo from './components/userinfo';
import ProbMaking from './components/probmaking';
import ProbMakingDone from './components/probmakingdone';
import ProbReady from './components/probready';
import Home from './components/Home';
import ProbSolving from './components/probsolving';
import ProbSolveDone from './components/probsolvedone';
import PageError from './components/pageerror';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userdata: [0, 0],
    };
  }
  handleDataGet = (_data) => {
    this.setState({
      QnASets: _data,
    });
  };
  handleNameSubmit = (_name) => {
    this.setState({
      name: _name,
    });
  };
  handleDataSubmit = (_userdata) => {
    this.setState({
      userdata: _userdata,
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user-info" component={UserInfo} />
          <Route
            exact
            path="/user-info/:solveid"
            render={(props) => <UserInfo get_name={this.handleNameSubmit} {...props} isAuthed={true} />}
          />
          <Route
            exact
            path="/prob-solve-ready/:solveid"
            render={(props) => <ProbReady data_get={this.handleDataGet} {...props} isAuthed={true} />}
          ></Route>
          <Route exact path="/prob-making/:id/0" render={(props) => <ProbMaking {...props} />} />
          <Route exact path="/prob-make-ready/:id/0" component={ProbReady}></Route>
          <Route exact path="/prob-making-done/" component={ProbMakingDone}></Route>

          {/* <Route exact path="/prob-solving/" component={ProbSolving}></Route> */}
          <Route
            exact
            path="/prob-solving/:solveid"
            render={(props) => (
              <ProbSolving name={this.state.name} function_data={this.handleDataSubmit} {...props} isAuthed={true} />
            )}
          />
          <Route
            exact
            path="/prob-solve-done/:solveid"
            render={(props) => (
              <ProbSolveDone name={this.state.name} data={this.state.userdata} {...props} isAuthed={true} />
            )}
          />
          <Route component={PageError}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
