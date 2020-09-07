import React, { useState } from 'react';
import UserInfo from './components/userinfo';
import ProbMaking from './components/probmaking';
import ProbMakingDone from './components/probmakingdone';
import ProbReady from './components/probready';
import Home from './components/Home';
import ProbSolving from './components/probsolving';
import ProbSolveDone from './components/probsolvedone';
import PageError from './components/pageerror';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const [name, setName] = useState('');
  const [userData, setUserData] = useState([0, 0]);
  const [qnaSets, setQnaSets] = useState();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user-info">
          <UserInfo />
        </Route>
        <Route exact path="/user-info/:solveid">
          <UserInfo getName={setName} />
        </Route>
        <Route exact path="/prob-solve-ready/:solveid">
          <ProbReady dataGet={setQnaSets} />
        </Route>
        <Route exact path="/prob-making/:id/0">
          <ProbMaking />
        </Route>
        <Route exact path="/prob-make-ready/:id/0">
          <ProbReady />
        </Route>
        <Route exact path="/prob-making-done/">
          <ProbMakingDone />
        </Route>
        <Route exact path="/prob-solving/:solveid">
          <ProbSolving name={name} functionData={setUserData} />
        </Route>
        <Route exact path="/prob-solve-done/:solveid">
          <ProbSolveDone name={name} data={userData} />
        </Route>
        <Route>
          <PageError />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
