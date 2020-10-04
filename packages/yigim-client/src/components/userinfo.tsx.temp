import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './userinfo.css';

interface Props {
  getName: (name: string) => void;
  isSolve: boolean;
}
const UserInfo = ({ getName, isSolve }: Props) => {
  const history = useHistory();

  const [name, setName] = useState('');

  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getName(name);
          history.push('/prob-ready');
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
          />
          <p className="Inputstudentid1">학번</p>
          <input className="Inputstudentid2" type="text"></input>
          <p className="Inputgender1">성별</p>
          <input type="button" className="Inputgender2" value="남자"></input>
          <input type="button" className="Inputgender3" value="여자"></input>
          <p className="Caution">
            ※시험이 시작되기 전까지 표지를 넘기지 마시오.
          </p>
          <input
            type="submit"
            className="button1"
            value={isSolve ? '응시하기' : '출제하기'}
          ></input>
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
