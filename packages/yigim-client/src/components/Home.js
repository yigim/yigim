import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
class Home extends Component {
  render() {
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
  }
}
export default Home;
