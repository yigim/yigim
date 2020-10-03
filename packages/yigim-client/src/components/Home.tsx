import React, { useEffect } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './Home.css';
import { httpClient } from '../helpers/httpClient';
import { Problem } from '../types/models';
import { useState } from 'react';
import './Home.css';
type Props = {
  onTest: (test: Problem[]) => void;
  onIsSolve: (isSolve: boolean) => void;
  getName: (name: string) => void;
};

const Home = ({ onTest, onIsSolve, getName }: Props) => {
  const { solveId } = useParams<{ solveId: string }>();
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
    if (solveId) {
      httpClient
        .get(`/tests/${solveId}`)
        .then((response) => {
          onTest(response.data.test.data);
          onIsSolve(true);
        })
        .catch((error) => {
          console.error(error);
          history.push('/page-error');
        });
      history.push('/user-info');
    }
  }, [history, onIsSolve, onTest, solveId]);

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
            나만의 시험지 만들기
          </button>
        ) : (
          <article>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                getName(name);
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
                value="나만의 문제 출제하러 가기! GO!"
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
