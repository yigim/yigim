import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Home.css';
import { httpClient } from '../helpers/httpClient';
import { Problem, Test } from '../types/models';
import { useState } from 'react';
type Props = {
  onProblems: (problems: Problem[]) => void;
  onIsSolve: (isSolve: boolean) => void;
  onPresenterName: (presenterName: string) => void;
  onTestId: (testId: string) => void;
  onName: (name: string) => void;
};

const Home = ({
  onProblems,
  onIsSolve,
  onPresenterName,
  onTestId,
  onName,
}: Props) => {
  const { testId } = useParams<{ testId: string }>();
  const history = useHistory();
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(0);

  var today = new Date();
  var d = '';
  var m = '';
  var y = '';
  var dd = today.getDate();
  var mm = today.getMonth() + 1; // Jan is 0
  var yyyy = today.getFullYear();
  var tod = '';

  if (dd < 10) {
    d = '0' + +dd;
  } else {
    d = '' + +dd;
  }

  if (mm < 10) {
    m = '0' + +mm;
  } else {
    m = '' + +mm;
  }

  tod = +yyyy + m + d;
  useEffect(() => {
    if (testId) {
      onTestId(testId);
      const resultId = localStorage.getItem(testId);
      httpClient
        .get<{ test: Test }>(`/tests/${testId}`)
        .then((response) => {
          const { problems, name } = response.data.test;
          if (resultId === 'presenter') {
            history.push('/prob-make-done', {
              problems,
              testId,
            });
            return;
          }
          if (resultId) {
            history.push('/prob-solve-done', {
              problems,
              myResultId: resultId,
              testId,
            });
            return;
          }
          console.log('asadsda');
          console.log(response.data);
          onProblems(problems);
          onPresenterName(name);
          onIsSolve(true);
        })
        .catch((error) => {
          console.error(error);
          history.push('/page-error');
        });
    }
  }, [history, onIsSolve, onPresenterName, onProblems, onTestId, testId]);

  return (
    <div className="Home_Container">
      <div className="Header_Container">
        <div className="Sub_title">2020학년도 너 나 알까? 친구 영역</div>
        <div className="Main_title">친구 적성평가</div>
        <div className="Problemtype">홀수형</div>
      </div>
      <div className="Bottom_Container">
        {checked === 0 ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setChecked(1);
            }}
            className="Problemmakestart"
            type="button"
          >
            {testId ? '문제 풀기' : '나만의 시험지 만들기'}
          </button>
        ) : (
          <article>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onName(name);
                history.push('/prob-ready');
              }}
            >
              <div className="Inputname">
                <label>성명 </label>
                <input
                  type="text"
                  name="username"
                  placeholder="이름을 입력해주세요."
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                  }}
                ></input>
              </div>

              <div className="Inputstudentid">
                <label>학번 </label>
                <div className="Inputstudentid2">{tod}</div>
              </div>

              <div className="Inputgender">
                <label>성별 </label>
                <input
                  type="button"
                  className="Inputgender1"
                  value="남자"
                ></input>
                <input
                  type="button"
                  className="Inputgender2"
                  value="여자"
                ></input>
              </div>
              <input
                type="submit"
                className="button1"
                value={
                  testId ? '문제 풀기! GO!' : '나만의 문제 출제하러 가기! GO!'
                }
              ></input>
            </form>
          </article>
        )}

        <div className="Caution">
          ※시험이 시작되기 전까지 표지를 넘기지 마시오.
        </div>
      </div>
    </div>
  );
};
export default Home;
