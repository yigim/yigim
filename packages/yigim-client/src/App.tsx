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
declare namespace JSX {
  interface IntrinsicElements {
    ProbReady: any;
  }
}
const App = () => {
  const [name, setName] = useState('');
  const [userData, setUserData] = useState([0, 0]);
  const [qnaSets, setQnaSets] = useState<any>();
  const [temp, setTemp] = useState<any>('');
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
          <ProbReady data_get={setQnaSets} />
        </Route>
        <Route exact path="/prob-making/:id/0">
          <ProbMaking />
        </Route>
        <Route exact path="/prob-make-ready/:id/0">
          {/* 위의 prob-solve-ready에서와 같은 컴포넌트를 사용해서 data_get props를 사용하지 않지만 값을 주어야 오류가 안 생기는 것 같습니다. */}
          <ProbReady data_get={temp} />
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
