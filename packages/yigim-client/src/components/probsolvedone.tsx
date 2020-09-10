import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

interface Props {
  name: string;
  data: any[];
}
const ProbSolveDone = ({ data, name }: Props, { match }) => {
  const solveId = match.params.solveId;
  const history = useHistory();
  const [peopleSolved, setPeopleSolved] = useState([]);
  const getRanking = () => {
    axios
      .get('http://localhost:3000/' + solveId)
      .then((response: any) => {
        setPeopleSolved(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getRanking();
  return (
    <div className="Desktop">
      성명: {name}
      <br />
      점수: {data[0]}/{data[1]}
      <br />
      순위: <br />
      {/*일단 푼 사람들의 모든 데이터 보여주기*/}
      {peopleSolved}
      {/* 순위를 표로 만들어서 제공하면 좋을 듯 */}
      <button
        onClick={(e) => {
          console.log(history);
          history.push('/user-info');
        }}
      >
        나만의 퀴즈 만들기{' '}
      </button>
    </div>
  );
};
export default ProbSolveDone;
