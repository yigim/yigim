import React, { useState } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import './userinfo.css';

interface Props {
  getName?: (name: string) => void;
}
const UserInfo = ({ getName }: Props) => {
  const { solveIdInParam } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [mode, setMode] = useState('');
  const [solveId, setSolveId] = useState('');
  const buttonValue = mode === 'making' ? '출제하기' : '응시하기';
  const modeSet = () => {
    if (mode === 'making' || mode === 'solving') {
    } else {
      if (solveId === undefined) {
        setMode('making');
      } else {
        setMode('solving');
        setSolveId(solveIdInParam);
      }
    }
  };
  modeSet();
  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (mode === 'making') {
            history.push('/prob-make-ready/' + name + '/0');
          } else if (mode === 'solving') {
            getName(name);
            history.push('/prob-solving/' + solveId);
          }
        }}
      >
        <div className="Desktop10">
          <h1>2020학년도 너 나 알아? 친구 영역</h1>
          <h2>친구 적성평가</h2>
          <p className="Problemtype">홀수형</p>
          <p className="Inputname1">성명</p>
          <input
            className="Inputname2"
            type="text"
            name="username"
            placeholder="이름을 입력해주세요."
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          ></input>
          <p className="Inputstudentid1">학번</p>
          <input className="Inputstudentid2" type="text"></input>
          <p className="Inputgender1">성별</p>
          <input type="button" className="Inputgender2" value="남자"></input>
          <input type="button" className="Inputgender3" value="여자"></input>
          <p className="Caution">※시험이 시작되기 전까지 표지를 넘기지 마시오.</p>
          <input type="submit" className="button1" value={buttonValue}></input>
          <NavLink to="/">
            <input type="button" className="button2" value="뒤로"></input>
          </NavLink>
        </div>
      </form>
    </article>
  );
};
export default UserInfo;

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route} from "react-router-dom";

// const UserInfo = ({history}) => {
//     return(
//       <div>
//         <button onClick={()=>{history.push('/')}}>
//           버어어튼
//           </button>
//       </div>
//     );
// }
// export default UserInfo;
