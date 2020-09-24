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
import { Problem } from './constants/constants';

const App = () => {
  const [name, setName] = useState('');
  const [isSolve, setIsSolve] = useState(false);
  const [userData, setUserData] = useState([0, 0]);
  const [test, setTest] = useState<Problem[]>([]);
  return (
    <Router>
      <Switch>
        <Route exact path="/user-info">
          <UserInfo getName={setName} isSolve={isSolve} />
        </Route>
        <Route exact path="/prob-ready">
          <ProbReady name={name} isSolve={isSolve} />
        </Route>
        <Route exact path="/prob-making">
          <ProbMaking name={name} />
        </Route>
        <Route exact path="/prob-making-done/">
          <ProbMakingDone name={name} />
        </Route>
        <Route exact path="/prob-solving">
          <ProbSolving name={name} test={test} functionData={setUserData} />
        </Route>
        <Route exact path="/prob-solve-done/:solveid">
          <ProbSolveDone name={name} data={userData} />
        </Route>
        <Route exact path="/page-error">
          <PageError />
        </Route>
        <Route exact path="/:solveId?">
          <Home onTest={setTest} onIsSolve={setIsSolve} getName={setName} isSolve={isSolve} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
