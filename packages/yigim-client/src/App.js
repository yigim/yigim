import React, { Component } from 'react';
import UserInfo from './components/userinfo';
import ProbMaking from './components/probmaking';
import ProbMakeReady from './components/probmakeready';
import ProbMakingDone from './components/probmakingdone';
import ProbSolveReady from './components/probsolveready';
import Home from './components/Home';
import ProbSolve from './components/probsolve';
import ProbSolveDone from './components/probsolvedone';
import PageError from './components/pageerror';
import ProbLinkInput from './components/problinkinput';

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
          <Route exact path="/user-info" component={UserInfo} />
          <Route exact path="/prob-solve-ready" component={ProbSolveReady}></Route>
          <Route exact path="/prob-making/:id/0" component={ProbMaking}></Route>
          <Route exact path="/prob-make-ready/:id/0" component={ProbMakeReady}></Route>
          <Route exact path="/prob-making-done/" component={ProbMakingDone}></Route>
          <Route exact path="/prob-link-input/" component={ProbLinkInput}></Route>
          <Route exact path="/prob-solve/" component={ProbSolve}></Route>
          <Route exact path="/prob-solve-done/"
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
