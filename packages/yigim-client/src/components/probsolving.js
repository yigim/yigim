import React, { Component } from 'react';
import './probsolving.css';
import Osign from '../images/Osign.png';
import Xsign from '../images/Xsign.png';
class ProbSolving extends Component {
  probNumber = 1;
  state = {
    chosennumber: 0,
    score_total: 0,
    score_user: 0,
    result: 'default',
    userdata: [
      '길동홍',
      {
        id: 1,
        question: '길동홍의 주량은?',
        answer: ['1병', '2병', '3병', '반 병병병병병병'],
        picked_number: 2,
        score: 1,
      },
      {
        id: 2,
        question: '길동홍의 입대 날짜는?',
        answer: ['17년 2월', '18년 2월', '19년 2월', '미필'],
        picked_number: 1,
        score: 2,
      },
      {
        id: 3,
        question: '길동홍의 나이는?',
        answer: ['10살', '20살', '22살', '30살'],
        picked_number: 1,
        score: 3,
      },
      {
        id: 4,
        question: '길동홍의 가족관계는?',
        answer: ['외동', '누나', '여동생', '누나, 여동생'],
        picked_number: 1,
        score: 2,
      },
      {
        id: 5,
        question: '길동홍이 좋아하는 숫자는?',
        answer: ['1', '2', '3', '4'],
        picked_number: 1,
        score: 1,
      },
      {
        id: 6,
        question: '길동홍이 싫어하는 숫자는??',
        answer: ['1', '2', '3', '4'],
        picked_number: 1,
        score: 2,
      },
      {
        id: 7,
        question: '길동홍이 좋아하는 알파벳은?',
        answer: ['a', 'b', 'c', 'd'],
        picked_number: 1,
        score: 3,
      },
      {
        id: 8,
        question: '길동홍이 싫어하는 알파벳은?',
        answer: ['a', 'b', 'c', 'd'],
        picked_number: 1,
        score: 1,
      },
      {
        id: 9,
        question: '길동홍은 남자인가?',
        answer: ['O', 'X'],
        picked_number: 1,
        score: 2,
      },
      {
        id: 10,
        question: '길동홍은 사람인가?',
        answer: ['O', 'X'],
        picked_number: 1,
        score: 3,
      },
    ],
  };
  //정답이 맞는 함수
  rightanswer = () => {
    this.setState({
      result: 'right',
      score_total: Number(this.state.score_total) + Number(this.state.userdata[this.probNumber].score),
      score_user: Number(this.state.score_user) + Number(this.state.userdata[this.probNumber].score),
    });
  };
  //정답이 틀리는 함수
  wronganswer = () => {
    this.setState({
      result: 'wrong',
      score_total: Number(this.state.score_total) + Number(this.state.userdata[this.probNumber].score),
    });
  };
  render() {
    // const {
    //   name,
    //   function_data,
    //   match: { params },
    //   history,
    // } = this.props;
    var prob = this.state.userdata[Number(this.probNumber)];
    var question = this.probNumber + '. ' + prob.question;
    var answer = [];
    var hidden = [];
    var sign = [];
    var i = 0;
    while (i < prob.answer.length) {
      switch (i) {
        case 0:
          answer.push(
            <div>
              <button
                type="button"
                className="Buttonselect"
                id={i}
                onClick={(e) => {
                  if (Number(prob.picked_number) === Number(e.target.id) + 1) {
                    this.rightanswer();
                  } else {
                    this.wronganswer();
                  }
                  this.setState({
                    chosennumber: 0,
                  });
                }}
              >
                ① {prob.answer[i]}
              </button>
            </div>,
          );
          break;
        case 1:
          answer.push(
            <div>
              <button
                type="button"
                className="Buttonselect"
                id={i}
                onClick={(e) => {
                  if (Number(prob.picked_number) === Number(e.target.id) + 1) {
                    this.rightanswer();
                  } else {
                    this.wronganswer();
                  }
                  this.setState({
                    chosennumber: 1,
                  });
                }}
              >
                ② {prob.answer[i]}
              </button>
            </div>,
          );
          break;
        case 2:
          answer.push(
            <div>
              <button
                type="button"
                className="Buttonselect"
                id={i}
                onClick={(e) => {
                  if (Number(prob.picked_number) === Number(e.target.id) + 1) {
                    this.rightanswer();
                  } else {
                    this.wronganswer();
                  }
                  this.setState({
                    chosennumber: 2,
                  });
                }}
              >
                ③ {prob.answer[i]}
              </button>
            </div>,
          );
          break;
        case 3:
          answer.push(
            <div>
              <button
                type="button"
                className="Buttonselect"
                id={i}
                onClick={(e) => {
                  if (Number(prob.picked_number) === Number(e.target.id) + 1) {
                    this.rightanswer();
                  } else {
                    this.wronganswer();
                  }
                  this.setState({
                    chosennumber: 3,
                  });
                }}
              >
                ④ {prob.answer[i]}
              </button>
            </div>,
          );
          break;
        default:
          break;
      }

      i = i + 1;
    }
    if (this.state.result === 'right') {
      answer = [];
      i = 0;
      sign = [];
      sign.push(
        <div className="Oani">
          <img className="Osign" src={Osign} alt="osign" />
        </div>,
      );
      while (i < prob.answer.length) {
        switch (i) {
          case 0:
            answer.push(<div>① {prob.answer[i]}</div>);
            break;
          case 1:
            answer.push(<div>② {prob.answer[i]}</div>);
            break;
          case 2:
            answer.push(<div>③ {prob.answer[i]}</div>);
            break;
          case 3:
            answer.push(<div>④ {prob.answer[i]}</div>);
            break;
          default:
            break;
        }
        i = i + 1;
      }
      hidden.push(<input type="submit" value="다음 문제" className="NextButton"></input>);
    } else if (this.state.result === 'wrong') {
      answer = [];
      i = 0;
      sign = [];
      sign.push(
        <div className="Xani">
          <img className="Xsign" src={Xsign} alt="xsign" />
        </div>,
      );
      while (i < prob.answer.length) {
        switch (i) {
          case 0:
            answer.push(<div>① {prob.answer[i]}</div>);
            break;
          case 1:
            answer.push(<div>② {prob.answer[i]}</div>);
            break;
          case 2:
            answer.push(<div>③ {prob.answer[i]}</div>);
            break;
          case 3:
            answer.push(<div>④ {prob.answer[i]}</div>);
            break;
          default:
            break;
        }
        i = i + 1;
      }
      hidden.push(<input type="submit" value="다음 문제" className="NextButton"></input>);
    }
    return (
      <div>
        <article className="Desktop">
          <div className="Problemheader">
            <h1 className="Problemtype_">2020학년도 신개념 친구 적성평가 내 친구는 몇점짜리 친구일까?</h1>
            <h2 className="Problemtitle">{this.state.userdata[0]} 영역</h2>
            <p className="Period">제 1교시</p>
            <p className="Nametag">성명</p>
            <p className="Name">{this.state.userdata[0]}</p>
          </div>
          {sign}
          <div className="Problem">{question}</div>
          <div className="Choice">
            <ol>{answer}</ol>
          </div>
          <form
            onClick={(e) => {
              e.preventDefault();
              if (this.probNumber !== 10) {
                this.probNumber = this.probNumber + 1;
                console.log(this.probNumber);
                this.setState({
                  result: 'default',
                });
              } else {
                e.preventDefault();
                this.props.function_data([this.state.score_user, this.state.score_total]);
                this.props.history.push('/prob-solve-done/' + this.props.match.params.solveid);
              }
            }}
          >
            {hidden}
          </form>
          <div className="grade">
            현재 점수: {this.state.score_user}/{this.state.score_total}
          </div>
        </article>
      </div>
    );
  }
}
export default ProbSolving;
