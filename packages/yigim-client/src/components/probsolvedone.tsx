import { chain } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { httpClient } from '../helpers/httpClient';
import { Problem, Result } from '../types/models';

const ProbSolveDone = () => {
  const {
    state: { problems, myResultId, testId },
  } = useLocation<{
    problems: Problem[];
    myResultId: string;
    testId: string;
  }>();

  const history = useHistory();
  const [results, setResults] = useState<Result[]>([]);
  const scoreUsers = chain(results)
    .map<{ id: string; name: string; score: number }>((result) => {
      const { id, name, data } = result;
      const score = chain(problems)
        .filter((problem, index) => {
          const choose = data[index];
          return problem.examples[choose] === problem.answer;
        })
        .map((problem) => problem.score)
        .sum()
        .value();
      return { id, name, score };
    })
    .value();
  console.log(myResultId);
  console.log(results);
  const myResult = results.find((result) => result.id === myResultId);

  useEffect(() => {
    httpClient
      .get<{ results: Result[] }>(`/tests/${testId}/results`)
      .then(({ data: { results } }) => {
        setResults(results);
      });
  }, [testId]);

  const scoreTotal = chain(problems)
    .map((problem) => problem.score)
    .sum()
    .value();
  const getRanking = () => {};

  getRanking();
  return (
    <div className="Desktop">
      성명: {myResult?.name}
      <br />
      점수: {scoreTotal}
      <br />
      순위: <br />
      <table className="Scoretable">
        <thead>
          <tr>
            <th>
              <span>석차</span>
            </th>
            <th>
              <span>성명</span>
            </th>
            <th>
              <span>점수</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {chain(scoreUsers)
            .sort((a, b) => b.score - a.score)
            .map(({ id, name, score }, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{score}</td>
              </tr>
            ))
            .value()}
        </tbody>
      </table>
      {/*일단 푼 사람들의 모든 데이터 보여주기*/}
      {/* 순위를 표로 만들어서 제공하면 좋을 듯 */}
      <button
        onClick={(e) => {
          console.log(history);
          history.push('');
        }}
      >
        나만의 퀴즈 만들기{' '}
      </button>
    </div>
  );
};
export default ProbSolveDone;
