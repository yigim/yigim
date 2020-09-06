import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ProbMaking from './probmaking';
import './userinfo.css';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <article>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.history.push('/prob-make-ready/' + this.state.name + '/0');
          }}
        >
          <div className="Home_Container">
            <div className="Sub_title">2020학년도 너 나 알까? 친구 영역</div>
            <div className="Main_title">친구 적성평가</div>
            <div className="Problemtype">홀수형</div>
            <div className="Inputname">
              <label>성명 </label>
              <input
                type="text"
                name="username"
                placeholder="이름을 입력해주세요."
                onChange={(e) => {
                  e.preventDefault();
                  this.setState({
                    name: e.target.value,
                  });
                }}
              ></input>
            </div>

            <div className="Inputstudentid">
              <label>학번 </label>
              <input className="Inputstudentid2" type="text"></input>
            </div>

            <div className="Inputgender">
              <label>성별 </label>
              <input type="button" className="Inputgender2" value="남자"></input>
              <input type="button" className="Inputgender3" value="여자"></input>
            </div>

            <div className="Problemmakestart-1">
              <input
                type="submit"
                className="button1"
                value="나만의 문제 출제하러 가기! GO!"
              ></input>
            </div>
            <div className="Caution">※시험이 시작되기 전까지 표지를 넘기지 마시오.</div>
          </div>
        </form>
      </article>
    );
  }
}
export default UserInfo;
