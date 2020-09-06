import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './Home.css';
class Home extends Component {
  render() {
    return (
      <div className="Home_Container">
        <div className="Header_Container">
          <div className="Sub_title">2020학년도 너 나 알까? 친구 영역</div>
          <div className="Main_title">친구 적성평가</div>
          <div className="Problemtype">홀수형</div>
        </div>
        <div className="Bottom_Container">
          <NavLink to="/user-info">
            <button className="Problemmakestart" type="button">
              나만의 시험지 만들기
            </button>
          </NavLink>
          <div className="Caution">※시험이 시작되기 전까지 표지를 넘기지 마시오.</div>
        </div>
      </div>
    );
  }
}
export default Home;
