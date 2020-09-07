import React from 'react';
import './probmakingdone.css';
import { useLocation } from 'react-router-dom';

interface Props {}
const ProbMakingDone = (props: Props) => {
  const location = useLocation();
  return (
    <article className="Desktop">
      <div className="Donetext">
        2020학년도 {location} 영역 적성평가 출제 완료 하셨습니다.
        <br />내 링크를 통해 결과를 확인할 수 있습니다.
      </div>
      <div className="Mylink">내 링크: asldkfjasdlfjalksdjfklasj</div>
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
  );
};

export default ProbMakingDone;
