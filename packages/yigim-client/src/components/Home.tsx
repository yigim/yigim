import React, { useEffect } from 'react';
import axios from 'axios';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './Home.css';
import { BACKEND_URL, Problem } from '../constants/constants';
type Props = {
  onTest: (test: Problem[]) => void;
  onIsSolve: (isSolve: boolean) => void;
};
const Home = ({ onTest, onIsSolve }: Props) => {
  const { solveId } = useParams<{ solveId: string }>();
  const history = useHistory();

  useEffect(() => {
    if (solveId) {
      axios
        .get(`${BACKEND_URL}/tests/${solveId}`)
        .then((response) => {
          console.log(response);
          //handle success
          onTest(response.data.test);
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
    <div className="Desktop13">
      <h1>2020학년도 너 나 알까? 친구 영역</h1>
      <h2>친구 적성평가</h2>
      <p className="Problemtype">홀수형</p>
      <NavLink to="/user-info">
        <button className="Problemmakestart" type="button">
          나만의 시험지 만들기
        </button>
      </NavLink>
      <p className="Caution">※시험이 시작되기 전까지 표지를 넘기지 마시오.</p>
    </div>
  );
};
export default Home;
