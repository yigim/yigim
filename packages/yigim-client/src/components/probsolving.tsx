import React, { useState } from 'react';
import './probsolving.css';
import { useHistory, useParams } from 'react-router-dom';
import { Problem } from '../constants/constants';

interface Props {
  functionData: (userData: any[]) => void;
  test: Problem[];
  name: string;
}
const Osign = require('../images/Osign.png');
const Xsign = require('../images/xsign.png');
const ProbSolving = ({ functionData, test }: Props) => {
  const history = useHistory();
  const { solveId } = useParams();
  const [probNumber, setProbNumber] = useState(0);
  const [chosenNubmer, setChosenNumber] = useState(0);
  const [scoreTotal, setScoreTotal] = useState(0);
  const [scoreUser, setScoreUser] = useState(0);
  const [result, setResult] = useState('default');
  const [userName, setUserName] = useState('길동홍');

  //정답이 맞는 함수
  const rightAnswer = () => {
    setResult('right');
    setScoreTotal(scoreTotal + test[probNumber].score);
    setScoreUser(scoreUser + test[probNumber].score);
  };
  //정답이 틀리는 함수
  const wrongAnswer = () => {
    setResult('wrong');
    setScoreTotal(scoreTotal + test[probNumber].score);
  };

  const getCircleNumber = (index: number) => {
    switch (index) {
      case 0:
        return `①`;
      case 1:
        return `②`;
      case 2:
        return `③`;
      default:
        return `④`;
    }
  };
  const problem = test[probNumber];
  const question = probNumber + '. ' + problem.question;
  problem.examples.map((example, index) => (
    <div>
      <button
        type="button"
        className="Buttonselect"
        id={String(index)}
        onClick={(e) => {
          if (problem.answer === example) {
            rightAnswer();
          } else {
            wrongAnswer();
          }
          setChosenNumber(0);
        }}
      >
        {getCircleNumber(index)} {example}
      </button>
    </div>
  ));

  if (result === 'right') {
    answer = [];
    i = 0;
    sign = [];
    sign.push(
      <div className="Oani">
        <img className="Osign" src={Osign} alt="osign" />
      </div>,
    );
    while (i < prob.answer.length) {
      switch (i) {
        case 0:
          answer.push(<div>① {prob.answer[i]}</div>);
          break;
        case 1:
          answer.push(<div>② {prob.answer[i]}</div>);
          break;
        case 2:
          answer.push(<div>③ {prob.answer[i]}</div>);
          break;
        case 3:
          answer.push(<div>④ {prob.answer[i]}</div>);
          break;
        default:
          break;
      }
      i = i + 1;
    }
    hidden.push(<input type="submit" value="다음 문제" className="NextButton"></input>);
  } else if (result === 'wrong') {
    answer = [];
    i = 0;
    sign = [];
    sign.push(
      <div className="Xani">
        <img className="Xsign" src={Xsign} alt="xsign" />
      </div>,
    );
    while (i < prob.answer.length) {
      switch (i) {
        case 0:
          answer.push(<div>① {prob.answer[i]}</div>);
          break;
        case 1:
          answer.push(<div>② {prob.answer[i]}</div>);
          break;
        case 2:
          answer.push(<div>③ {prob.answer[i]}</div>);
          break;
        case 3:
          answer.push(<div>④ {prob.answer[i]}</div>);
          break;
        default:
          break;
      }
      i = i + 1;
    }
  }
  return (
    <div>
      <article className="Desktop">
        <div className="Problemheader">
          <h1 className="Problemtype_">
            2020학년도 신개념 친구 적성평가 내 친구는 몇점짜리 친구일까?
          </h1>
          <h2 className="Problemtitle">{name} 영역</h2>
          <p className="Period">제 1교시</p>
          <p className="Nametag">성명</p>
          <p className="Name">{userData[0]}</p>
        </div>
        {sign}
        <div className="Problem">{question}</div>
        <div className="Choice">
          <ol>{answer}</ol>
        </div>
        <form
          onClick={(e) => {
            e.preventDefault();
            if (probNumber !== 10) {
              setProbNumber(probNumber + 1);
              console.log(probNumber);
              setResult('default');
            } else {
              e.preventDefault();
              functionData([scoreUser, scoreTotal]);
              history.push('/prob-solve-done/' + solveId);
            }
          }}
        >
          <input type="submit" value="다음 문제" className="NextButton"></input>
        </form>
        <div className="grade">
          현재 점수: {scoreUser}/{scoreTotal}
        </div>
      </article>
    </div>
  );
};
export default ProbSolving;
