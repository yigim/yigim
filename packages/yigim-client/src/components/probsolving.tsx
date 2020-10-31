import React, { useState } from 'react';
import './probsolving.css';
import { useHistory, useParams } from 'react-router-dom';
import { chain } from 'lodash';
import { getCircleNumber } from '../helpers/getCircleNumber';
import { Problem, Result } from '../types/models';
import { httpClient } from '../helpers/httpClient';

interface Props {
  problems: Problem[];
  presenterName: string;
  name: string;
  testId: string;
}
const Osign = require('../images/Osign.png');
const Xsign = require('../images/xsign.png');

const ProbSolving = ({ problems, presenterName, name, testId }: Props) => {
  const history = useHistory();
  const [current, setCurrent] = useState<number>(0);
  const [result, setResult] = useState<number[]>([]);
  const [choose, setChoose] = useState<number | null>(null);

  const problem = problems[current];

  const scoreUser = chain(problems)
    .filter((problem, index) => {
      const choose = result[index];
      return problem.examples[choose] === problem.answer;
    })
    .map((problem) => problem.score)
    .sum()
    .value();

  const scoreTotal = chain(problems)
    .filter((problem, index) => {
      const choose = result[index];
      return problem.examples[choose] != null;
    })
    .map((problem) => problem.score)
    .sum()
    .value();

  const sign = (() => {
    // Not chosen
    if (choose === null) return '';
    // Right choose
    if (problem.examples[choose] === problem.answer) {
      return (
        <div className="Oani">
          <img className="Osign" src={Osign} alt="osign" />
        </div>
      );
    }
    // Wrong choose
    return (
      <div className="Xani">
        <img className="Xsign" src={Xsign} alt="xsign" />
      </div>
    );
  })();

  return (
    <div className="Desktop">
      <div className="Problemheader">
        <div className="Problemtype_">
          2020학년도 신개념 친구 적성평가 내 친구는 몇점짜리 친구일까?
        </div>
        {/* 아랫줄 {name} */}
        <div className="Problemtitle">{presenterName} 영역</div>
        <div className="Period">제 1교시</div>
        <div className="Nametag">성명</div>
        <div className="Name">{name}</div>
      </div>
      {sign}
      <div className="Problem">
        {current + 1}. {problem.question}
      </div>
      <div className="Choice">
        {problem.examples.map((example, index) => (
          <div>
            {choose === null ? (
              <button
                type="button"
                className="Buttonselect"
                id={String(index)}
                onClick={(e) => {
                  setChoose(index);
                  setResult(result.concat(index));
                }}
              >
                {getCircleNumber(index)} {example}
              </button>
            ) : (
              `${getCircleNumber(index)} ${example}`
            )}
          </div>
        ))}
      </div>
      <form
        onClick={async (e) => {
          e.preventDefault();
          if (current + 1 < problems.length) {
            setCurrent(current + 1);
            setChoose(null);
          } else {
            const {
              data: { result: myResult },
            } = await httpClient.post<{ result: Result }>(
              `/tests/${testId}/results`,
              {
                name,
                data: result,
              },
            );
            localStorage.setItem(myResult.testId, myResult.id);
            history.push('/prob-solve-done', {
              problems,
              myResultId: myResult.id,
              testId,
            });
          }
        }}
      >
        <input
          type="submit"
          className="NextButton"
          value={current + 1 < problems.length ? '다음문제' : '제출하기'}
        ></input>
      </form>
      <div className="grade">
        현재 점수:{' '}
        {scoreTotal === 0 ? 0 : Math.round((scoreUser * 100) / scoreTotal)}
        /100
      </div>
    </div>
  );
};
export default ProbSolving;
