import React, { Component } from 'react';
import UserInfo from './components/userinfo';
import ProbMaking from './components/probmaking';
import ProbMakeReady from './components/probmakeready';
import ProbMakingDone from './components/probmakingdone';
import ProbSolveReady from './components/probsolveready';
import Home from './components/Home';
import ProbSolving from './components/probsolving';
import ProbSolve from './components/probsolve';
import ProbSolveDone from './components/probsolvedone';
import PageError from './components/pageerror';

import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '오잉',
      userdata: [],
    };
  }
  handleChangeName = (inputName) => {
    this.setState({ name: inputName });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/userinfo" component={UserInfo} />
          <Route exact path="/probsolveready" component={ProbSolveReady}></Route>
          <Route exact path="/probmaking/:id/0" component={ProbMaking}></Route>
          <Route exact path="/probmakeready/:id/0" component={ProbMakeReady}></Route>
          <Route exact path="/probmakingdone/" component={ProbMakingDone}></Route>
          <Route exact path="/probsolving/" component={ProbSolving}></Route>
          <Route exact path="/probsolve/" component={ProbSolve}></Route>
          <Route exact path="/probsolvedone/"
          render={(props)=>(
            <ProbSolveDone {...props} isAuthed={true}/>
          )}
          />
          <Route component={PageError}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
