import React, { useEffect, useState } from 'react';
import './probmakingdone.css';
import { useLocation, useHistory } from 'react-router-dom';
import { httpClient } from '../helpers/httpClient';
import { Problem } from '../types/models';

interface Props {
  name: string;
}
const ProbMakingDone = ({ name }: Props) => {
  const location = useLocation<{ test: Problem[] }>();
  const { test } = location.state;
  const [id, setId] = useState<string>();
  const history = useHistory();
  const [scoreData, setScoreData] = useState<Number>();
  useEffect(() => {
    httpClient
      .post<{ test: { id: string } }>(`/tests`, { test })
      .then((response) => {
        setId(response.data.test.id);
      })
      .catch((error) => {
        console.log(error);
      });
    //resultReadList 함수
    // axios
    //   .get(`${BACKEND_URL}/tests/` + id + '/results')
    //   .then((response: any) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [test]);
  return (
    <div>
      {id ? (
        <article className="Desktop">
          <div className="Donetext">
            2020학년도 {name} 영역 적성평가 출제 완료 하셨습니다.
            <br />내 링크를 통해 결과를 확인할 수 있습니다.
          </div>
          <div className="Mylink">내 링크: localhost:3000/{id}</div>
          <div className="Probdeliver">문제 배포</div>
          <button className="Facebook">페이스북</button>
          <button className="Kakaotalk">카카오톡</button>
          <button className="Instagram">인스타그램</button>
          <button className="URLcopy">URL복사</button>
          <div className="Border"></div>
          <div className="Scoretitle">우수 응시자 성적 공개</div>
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
              <tr>
                <td>{scoreData}</td>
                <td>1</td>
                <td>A</td>
                <td>100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>B</td>
                <td>95</td>
              </tr>
              <tr>
                <td>3</td>
                <td>C</td>
                <td>90</td>
              </tr>
              <tr>
                <td>4</td>
                <td>D</td>
                <td>85</td>
              </tr>
              <tr>
                <td>5</td>
                <td>E</td>
                <td>80</td>
              </tr>
            </tbody>
          </table>
          <div className="Scorecheck">전체 응시자 성적 확인하기</div>
        </article>
      ) : (
        ''
      )}
    </div>
  );
};

export default ProbMakingDone;
