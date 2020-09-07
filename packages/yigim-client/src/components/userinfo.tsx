import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './userinfo.css';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mode: '',
      solveid: '',
    };
  }
  buttonValue = () => {
    if (this.state.mode === 'making') {
      return '출제하기';
    } else if (this.state.mode === 'solving') {
      return '응시하기';
    }
  };
  modeSet = () => {
    if (this.state.mode === 'making' || this.state.mode === 'solving') {
    } else {
      if (this.props.match.params.solveid === undefined) {
        this.setState({
          mode: 'making',
        });
      } else {
        this.setState({
          mode: 'solving',
          solveid: this.props.match.params.solveid,
        });
      }
    }
  };
  render() {
    this.modeSet();
    return (
      <article>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (this.state.mode === 'making') {
              this.props.history.push('/prob-make-ready/' + this.state.name + '/0');
            } else if (this.state.mode === 'solving') {
              this.props.get_name(this.state.name);
              this.props.history.push('/prob-solving/' + this.state.solveid);
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
                this.setState({
                  name: e.target.value,
                });
              }}
            ></input>
            <p className="Inputstudentid1">학번</p>
            <input className="Inputstudentid2" type="text"></input>
            <p className="Inputgender1">성별</p>
            <input type="button" className="Inputgender2" value="남자"></input>
            <input type="button" className="Inputgender3" value="여자"></input>
            <p className="Caution">※시험이 시작되기 전까지 표지를 넘기지 마시오.</p>
            <input type="submit" className="button1" value={this.buttonValue()}></input>
            <NavLink to="/">
              <input type="button" className="button2" value="뒤로"></input>
            </NavLink>
          </div>
        </form>
      </article>
    );
  }
}
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
