import React, { useEffect, useState } from 'react';
import './probmakedone.css';
import { useLocation, useHistory } from 'react-router-dom';
import { httpClient } from '../helpers/httpClient';
import { Popover } from '@material-ui/core';
import CopyToClipboard from 'react-copy-to-clipboard';

const ProbMakeDone = () => {
  const location = useLocation<{ id: string }>();
  const { id } = location.state;
  const [scoreData, setScoreData] = useState<Number>();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  useEffect(() => {
    httpClient
      .get(`/tests/${id}/results`)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <article className="Desktop">
        <div className="Donetext">
          2020학년도 영역 적성평가 출제 완료 하셨습니다.
        </div>
        <div className="Mylink">시험 응시 링크: localhost:3000/{id}</div>
        <div className="Probdeliver">문제 배포</div>
        <button className="Facebook">페이스북</button>
        <button className="Kakaotalk">카카오톡</button>
        <button className="Instagram">인스타그램</button>
        <div>
          <CopyToClipboard text={`localhost:3000/${id}`}>
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
            <td>{scoreData}</td>
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
    </div>
  );
};

export default ProbMakeDone;
