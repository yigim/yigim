import React, { useState } from 'react';
import ProbMaking from './components/probmaking';
import ProbReady from './components/probready';
import Home from './components/Home';
import ProbSolving from './components/probsolving';
import ProbSolveDone from './components/probsolvedone';
import PageError from './components/pageerror';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Problem } from './types/models';
import ProbMakeDone from './components/probmakedone';

const App = () => {
  const [name, setName] = useState<string>('');
  const [isSolve, setIsSolve] = useState(false);
  const [problems, setProblems] = useState<Problem[]>([]);
  const [testId, setTestId] = useState<string>('');
  const [presenterName, setPresenterName] = useState<string>('');
  return (
    <Router>
      <Switch>
        <Route exact path="/prob-ready">
          <ProbReady name={name} isSolve={isSolve} />
        </Route>
        <Route exact path="/prob-making">
          <ProbMaking name={name} />
        </Route>
        <Route exact path="/prob-solving">
          <ProbSolving
            presenterName={presenterName}
            name={name}
            testId={testId}
            problems={problems}
          />
        </Route>
        <Route exact path="/prob-solve-done">
          <ProbSolveDone />
        </Route>
        <Route exact path="/page-error">
          <PageError />
        </Route>
        <Route exact path="/prob-make-done">
          <ProbMakeDone />
        </Route>
        <Route exact path="/:testId?">
          <Home
            onProblems={setProblems}
            onIsSolve={setIsSolve}
            onTestId={setTestId}
            onPresenterName={setPresenterName}
            onName={setName}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
