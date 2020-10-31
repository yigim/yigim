import React, { useEffect, useState } from 'react';
import './probmakedone.css';
import { useLocation } from 'react-router-dom';
import { httpClient } from '../helpers/httpClient';
import { Popover } from '@material-ui/core';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Problem, Result, Test } from '../types/models';
import { chain } from 'lodash';
import { FRONTEND_URL } from '../constants/constants';

const ProbMakeDone = () => {
  const {
    state: { name, problems },
  } = useLocation<{ name: string; problems: Problem[] }>();

  const [test, setTest] = useState<Test | null>(null);
  const [results, setResults] = useState<Result[]>([]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

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

  useEffect(() => {
    httpClient
      .post<{ test: Test }>(`/tests`, {
        name,
        problems,
      })
      .then(({ data: { test } }) => {
        setTest(test);
        localStorage.setItem(test.id, 'presenter');
      });
  }, [name, problems]);
  useEffect(() => {
    if (test)
      httpClient
        .get<{ results: Result[] }>(`/tests/${test.id}/results`)
        .then(({ data: { results } }) => {
          setResults(results);
        });
  }, [test]);

  if (!test || !results) return <div></div>;
  return (
    <div>
      <article className="Desktop">
        <div className="Donetext">
          2020학년도 영역 적성평가 출제 완료 하셨습니다.
        </div>
        <div className="Mylink">
          시험 응시 링크: {FRONTEND_URL}/{test.id}
        </div>
        <div className="Probdeliver">문제 배포</div>
        <button className="Facebook">페이스북</button>
        <button className="Kakaotalk">카카오톡</button>
        <button className="Instagram">인스타그램</button>
        <div>
          <CopyToClipboard text={`${FRONTEND_URL}/${test.id}`}>
            <button
              className="URLcopy"
              onClick={(event) => {
                setAnchorEl(event.currentTarget);
              }}
            >
              URL복사
            </button>
          </CopyToClipboard>
          <Popover
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
          >
            링크가 클립보드에 복사되었습니다.
          </Popover>
        </div>
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
      </article>
    </div>
  );
};

export default ProbMakeDone;
