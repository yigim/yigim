import React, { Component } from 'react';
import './probready.css';
import axios from 'axios';

class ProbReady extends Component {
  state = {
    mode: 'undefined',
  };
  name = () => {
    if (this.state.mode === 'solving') {
      return '응시자';
    } else if (this.state.mode === 'making') {
      return '출제자';
    }
  };
  button_value = () => {
    if (this.state.mode === 'solving') {
      return '응시하기';
    } else if (this.state.mode === 'making') {
      return '출제하기';
    }
  };
  data_get = (_solveid) => {
    axios
      .get('https://localhost:3000/' + _solveid)
      .then((response) => {
        //handle success
        this.props.data_get(_solveid, response.data);
        this.props.history.push('/user-info/' + this.props.match.params.solveid);
      })
      .catch((error) => {
        this.props.history.push('/user-info/' + this.props.match.params.solveid);
      })
      .then(() => {
        console.log('next');
      });
  };
  render() {
    if (this.state.mode === 'solving' || this.state.mode === 'making') {
    } else if (this.props.match.params.id === undefined) {
      this.setState({
        mode: 'solving',
      });
    } else {
      this.setState({
        mode: 'making',
      });
    }
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (this.state.mode === 'solving') {
            this.data_get(this.props.match.params.solveid);
          } else if (this.state.mode === 'making') {
            this.props.history.push('/prob-making/' + this.props.match.params.id + '/0');
          }
        }}
      >
        <div className="Desktop14">
          <h1 className="Title">&lt;{this.name()} 주의사항 및 공지사항&gt;</h1>
          <div className="Border_"></div>
          <p className="Text">
            ○ 문제지의 해당란에 <b>성명</b>과 <b>수험번호</b>를 쓰시오.
            <br />
            <br />○ 답안지의 필적 확인란에 다음의 문구를 <b>정자로 기재</b>하시오.
            <br />
            <br />
            <br />
            <br />○ 답안지의 해당란에 <b>성명</b>과 <b>수험번호</b>를 쓰고, 또 <b>수험번호</b>, <b>답</b>을 정확히
            표시하시오.
            <br />
            <br />○ 문항에 따라 배점이 다릅니다. <b>3점 문항</b>에만 점수가 표시되어 있습니다. 점수 표시가 없는 문항은
            모두 <b>2점</b>입니다.
          </p>
          <div className="Textexample">돈 꾸면서도 살 건 사는데 꿈꾸면서 사는 건 아까운지</div>
        </div>

        <button type="submit" className="probsolvebutton">
          {' '}
          {this.button_value()}{' '}
        </button>
      </form>
    );
  }
}
export default ProbReady;
