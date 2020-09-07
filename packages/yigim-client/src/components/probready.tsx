import React, { useState } from 'react';
import './probready.css';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

interface Props {
  data_get: (_solveId: string, data: any) => void;
}
const ProbReady = ({ data_get }: Props) => {
  const history = useHistory();
  const { solveId, id } = useParams();
  const [mode, setMode] = useState('undefined');
  const name = mode === 'solving' ? '응시자' : '출제자';
  const buttonValue = mode === 'solving' ? '응시하기' : '출제하기';
  const dataGet = (_solveId: string) => {
    axios
      .get('https://localhost:3000/' + _solveId)
      .then((response) => {
        //handle success
        data_get(_solveId, response.data);
        history.push('/user-info/' + solveId);
      })
      .catch((error) => {
        history.push('/user-info/' + solveId);
      })
      .then(() => {
        console.log('next');
      });
  };
  if (mode === 'solving' || mode === 'making') {
  } else if (id === undefined) {
    setMode('soving');
  } else {
    setMode('making');
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (mode === 'solving') {
          dataGet(solveId);
        } else if (mode === 'making') {
          history.push('/prob-making/' + id + '/0');
        }
      }}
    >
      <div className="Desktop14">
        <h1 className="Title">&lt;{name} 주의사항 및 공지사항&gt;</h1>
        <div className="Border_"></div>
        <p className="Text">
          ○ 문제지의 해당란에 <b>성명</b>과 <b>수험번호</b>를 쓰시오.
          <br />
          <br />○ 답안지의 필적 확인란에 다음의 문구를 <b>정자로 기재</b>하시오.
          <br />
          <br />
          <br />
          <br />○ 답안지의 해당란에 <b>성명</b>과 <b>수험번호</b>를 쓰고, 또 <b>수험번호</b>,{' '}
          <b>답</b>을 정확히 표시하시오.
          <br />
          <br />○ 문항에 따라 배점이 다릅니다. <b>3점 문항</b>에만 점수가 표시되어 있습니다. 점수
          표시가 없는 문항은 모두 <b>2점</b>입니다.
        </p>
        <div className="Textexample">돈 꾸면서도 살 건 사는데 꿈꾸면서 사는 건 아까운지</div>
      </div>

      <button type="submit" className="probsolvebutton">
        {' '}
        {buttonValue}{' '}
      </button>
    </form>
  );
};
export default ProbReady;
