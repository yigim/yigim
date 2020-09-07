import React, { Component } from 'react';
import axios from 'axios';

class ProbSolveDone extends Component {
  state = {
    people_solved: [],
  };
  get_ranking = () => {
    axios
      .get('http://localhost:3000/' + this.props.solveid)
      .then((response) => {
        this.setState({
          people_solved: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    this.get_ranking();
    return (
      <div className="Desktop">
        성명: {this.props.name}
        <br />
        점수: {this.props.data[0]}/{this.props.data[1]}
        <br />
        순위: <br />
        {/*일단 푼 사람들의 모든 데이터 보여주기*/}
        {this.state.people_solved}
        {/* 순위를 표로 만들어서 제공하면 좋을 듯 */}
        <button
          onClick={(e) => {
            console.log(this.props.history);
            this.props.history.push('/user-info');
          }}
        >
          나만의 퀴즈 만들기{' '}
        </button>
      </div>
    );
  }
}
export default ProbSolveDone;
