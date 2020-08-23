import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import ProbMaking from "./probmaking";


const UserInfo = (props) => {
  onChangeState = (e) => {
    this.props.onChangeName(e.target.value)
  }
  return(
    <article>
        <form 
        onSubmit={(event)=>{
          event.preventDefault();
          this.props.linkchange();
        }
      }
        >
          <div>이름 입력</div>
          <input type="text" name="username" placeholder="이름"
          onChange={this.onChangeState}></input>
          <br />
          <input type="checkbox" value="M"></input>남자
          <input type="checkbox" value="F"></input>여자
          <NavLink to="/probmaking">
            <input type="button" value="probmaking"></input>
          </NavLink>
          <input
            type="submit"
            value="출제하기"
          ></input>
          <NavLink to="/">
            <input type="button" value="뒤로"></input>
          </NavLink>
        </form>
      </article>
  );
}
export default UserInfo;