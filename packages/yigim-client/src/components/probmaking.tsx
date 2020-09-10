import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './probmaking.css';
import { useParams, useHistory } from 'react-router-dom';

//typescript image import 방식
const Checksign = require('../images/checksign.png');
const ProbMaking = () => {
  const { id } = useParams();
  const history = useHistory();
  const [probNumberAdd, setProbNumberAdd] = useState(-1);
  const [numberForCheck, setNumberForCheck] = useState(-1);
  const [scoreTotal, setScoreTotal] = useState(0);
  const [scoreUser, setScoreUser] = useState(0);
  const [mode, setMode] = useState('basic');
  const [q, setQ] = useState('');
  const [mention, setMention] = useState('수정하기');
  const [qnaExSets, setQnaExSets] = useState([
    {
      id: 1,
      question: id + '의 주량은?',
      answer: ['1병', '2병', '3병', '반 병병병병병병'],
      score: 3,
    },
    {
      id: 2,
      question: id + '의 입대 날짜는?',
      answer: ['17년 2월', '18년 2월', '19년 2월', '미필'],
      score: 3,
    },
    {
      id: 3,
      question: id + '의 나이는?',
      answer: ['10살', '20살', '22살', '30살'],
      score: 3,
    },
    {
      id: 4,
      question: id + '의 가족관계는?',
      answer: ['외동', '누나', '여동생', '누나, 여동생'],
      score: 3,
    },
    {
      id: 5,
      question: id + '이 좋아하는 숫자는?',
      answer: ['1', '2', '3', '4'],
      score: 3,
    },
    {
      id: 6,
      question: id + '이 싫어하는 숫자는??',
      answer: ['1', '2', '3', '4'],
      score: 3,
    },
    {
      id: 7,
      question: id + '이 좋아하는 알파벳은?',
      answer: ['a', 'b', 'c', 'd'],
      score: 3,
    },
    {
      id: 8,
      question: id + '이 싫어하는 알파벳은?',
      answer: ['a', 'b', 'c', 'd'],
      score: 3,
    },
    {
      id: 9,
      question: id + '은 남자인가?',
      answer: ['O', 'X'],
      score: 3,
    },
    {
      id: 10,
      question: id + '은 사람인가?',
      answer: ['O', 'X'],
      score: 3,
    },
  ]);

  const [additionalQnaSets, setAdditionalQnaSets] = useState([
    {
      id: 1,
      question: id + '의 연애 상태는?',
      answer: ['연애하는 중', '연애하지 않는 중', '썸타는 중'],
      score: 3,
    },
    {
      id: 2,
      question: id + '가 좋아하는 활동은?',
      answer: ['야외 활동', '실내 활동'],
      score: 3,
    },
    {
      id: 3,
      question: id + '가 다닌 고등학교는?',
      answer: ['영재고', '과학고', '자사고', '외고'],
      score: 3,
    },
    {
      id: 4,
      question: id + '는?',
      answer: ['첫째', '둘째', '막내', '외동'],
      score: 3,
    },
    {
      id: 5,
      question: id + '의 연령대는?',
      answer: ['청년층', '장년층', '노년층'],
      score: 3,
    },
    {
      id: 6,
      question: id + '의 연애 상태는?',
      answer: ['연애하는 중', '연애하지 않는 중', '썸타는 중'],
      score: 3,
    },
    {
      id: 7,
      question: id + '의 연애 상태는?',
      answer: ['연애하는 중', '연애하지 않는 중', '썸타는 중'],
      score: 3,
    },
    {
      id: 8,
      question: id + '의 연애 상태는?',
      answer: ['연애하는 중', '연애하지 않는 중', '썸타는 중'],
      score: 3,
    },
    {
      id: 9,
      question: id + '의 연애 상태는?',
      answer: ['연애하는 중', '연애하지 않는 중', '썸타는 중'],
      score: 3,
    },
    {
      id: 10,
      question: id + '가 가장 좋아하는 생선은?',
      answer: ['고등어', '갈치', '생일선물'],
      score: 3,
    },
  ]);
  //문제 만드는 사람이 만드는 데이터
  const [userQnaSets, setUserQnaSets] = useState([id]);
  const [probNumber, setProbNumber] = useState(0);

  //질문 수정 후 저장하는 함수
  const handleChangeQuestion = (i: number, value: string) => {
    const modifiedArray = qnaExSets.map((item) =>
      item.id === i + 1 ? { ...item, question: value } : item,
    );
    setQnaExSets(modifiedArray);
  };
  //답변 수정 후 저장하는 함수
  const handleChangeAnswer = (i: number, value: any) => {
    const modifiedArray = qnaExSets.map((item) =>
      item.id === i + 1 ? { ...item, answer: value } : item,
    );
    setQnaExSets(modifiedArray);
  };
  //난이도 버튼 배경 색을 바꾸는 함수
  //그냥 Element에서는 style 지정이 되지 않고 HTMLElement에서만 style 지정이 되어서 temp1이라는 임시 변수를 선언했습니다.
  const changeButtonColor = (i: number) => {
    const array = [1, 2, 3];
    const temp1 = ReactDOM.findDOMNode(document.getElementById(`level${j}`)) as HTMLElement;
    if (i === 0) {
      array.forEach((j) => (temp1.style.backgroundColor = '#F1EBE6'));
    } else {
      array.forEach((j) => {
        if (i === j) {
          temp1.style.backgroundColor = 'white';
        } else {
          temp1.style.backgroundColor = 'gray';
        }
      });
    }
  };
  var data = qnaExSets[probNumber];
  var question = data.question;
  var showQuestion = question;
  var answersEach = data.answer.map((string) => string);
  var article = [];
  var hidden = [];
  var j = 0;
  //mode가 basic일 때 문제 추천받는 버튼 생성용
  if (mode === 'basic') {
    if (probNumberAdd !== numberForCheck) {
      data = additionalQnaSets[probNumberAdd];
      question = data.question;
      showQuestion = question;
      answersEach = data.answer.map((string) => string);
      article = [];
      hidden = [];
      j = 0;
    }
    var showQuestion = question;
    hidden.push(
      <input
        type="button"
        className="Anotherquestion"
        onClick={(e) => {
          e.preventDefault();
          //함수에 input값 추가
          handleChangeQuestion(probNumber, additionalQnaSets[probNumberAdd].question);
          handleChangeAnswer(probNumber, additionalQnaSets[probNumberAdd].answer);
          setProbNumberAdd((probNumberAdd + 1) % additionalQnaSets.length);
        }}
        value="이 문제 건너뛰기"
      ></input>,
    );
    while (j < data.answer.length) {
      const array = [0, 1, 2, 3];
      switch (j) {
        case 0:
          article.push(
            <div>
              <button
                id={'button1'}
                className="Buttonselect"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  array.forEach((i) => {
                    if (i < data.answer.length) {
                      const temp1 = document.querySelector('#checkbox' + i) as HTMLInputElement;
                      temp1.checked = false;
                      const temp2 = ReactDOM.findDOMNode(
                        document.getElementById(`Checkdiv${i}`),
                      ) as HTMLElement;
                      temp2.className = 'Checkdiv';
                    }
                  });
                  const temp1 = document.querySelector('#checkbox' + 0) as HTMLInputElement;
                  temp1.checked = true;
                  const temp2 = ReactDOM.findDOMNode(
                    document.getElementById(`Checkdiv0`),
                  ) as HTMLInputElement;
                  temp2.className = 'Checkani';
                }}
              >
                ① {answersEach[j]}
                <div className="Checkdiv" id="Checkdiv0">
                  <img className="Checksign" src={Checksign} alt="checksign" />
                </div>
              </button>
              <input id={'checkbox' + j} type="checkbox" className="Checkbox"></input>
            </div>,
          );
          break;
        case 1:
          article.push(
            <div>
              <button
                className="Buttonselect"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  array.forEach((i) => {
                    if (i < data.answer.length) {
                      const temp1 = document.querySelector('#checkbox' + i) as HTMLInputElement;
                      temp1.checked = false;
                      const temp2 = ReactDOM.findDOMNode(
                        document.getElementById(`Checkdiv${i}`),
                      ) as HTMLInputElement;
                      temp2.className = 'Checkdiv';
                    }
                  });
                  const temp1 = document.querySelector('#checkbox' + 1) as HTMLInputElement;
                  temp1.checked = true;
                  const temp2 = ReactDOM.findDOMNode(
                    document.getElementById(`Checkdiv1`),
                  ) as HTMLElement;
                  temp2.className = 'Checkani';
                }}
              >
                ② {answersEach[j]}
                <div className="Checkdiv" id="Checkdiv1">
                  <img className="Checksign" src={Checksign} alt="checksign" />
                </div>
              </button>
              <input id={'checkbox' + j} type="checkbox" className="Checkbox"></input>
            </div>,
          );
          break;
        case 2:
          article.push(
            <div>
              <button
                className="Buttonselect"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  array.forEach((i) => {
                    if (i < data.answer.length) {
                      const temp1 = document.querySelector('#checkbox' + i) as HTMLInputElement;
                      temp1.checked = false;
                      const temp2 = ReactDOM.findDOMNode(
                        document.getElementById(`Checkdiv${i}`),
                      ) as HTMLInputElement;
                      temp2.className = 'Checkdiv';
                    }
                  });
                  const temp1 = document.querySelector('#checkbox' + 2) as HTMLInputElement;
                  temp1.checked = true;
                  const temp2 = ReactDOM.findDOMNode(
                    document.getElementById(`Checkdiv2`),
                  ) as HTMLElement;
                  temp2.className = 'Checkani';
                }}
              >
                ③ {answersEach[j]}
                <div className="Checkdiv" id="Checkdiv2">
                  <img className="Checksign" src={Checksign} alt="checksign" />
                </div>
              </button>
              <input id={'checkbox' + j} type="checkbox" className="Checkbox"></input>
            </div>,
          );
          break;
        case 3:
          article.push(
            <div>
              <button
                className="Buttonselect"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  array.forEach((i) => {
                    if (i < data.answer.length) {
                      const temp1 = document.querySelector('#checkbox' + i) as HTMLInputElement;
                      temp1.checked = false;
                      const temp2 = ReactDOM.findDOMNode(
                        document.getElementById(`Checkdiv${i}`),
                      ) as HTMLElement;
                      temp2.className = 'Checkdiv';
                    }
                  });
                  const temp1 = document.querySelector('#checkbox' + 3) as HTMLInputElement;
                  temp1.checked = true;
                  const temp2 = ReactDOM.findDOMNode(
                    document.getElementById(`Checkdiv3`),
                  ) as HTMLElement;
                  temp2.className = 'Checkani';
                }}
              >
                ④ {answersEach[j]}
                <div className="Checkdiv" id="Checkdiv3">
                  <img className="Checksign" src={Checksign} alt="checksign" />
                </div>
              </button>
              <input id={'checkbox' + j} type="checkbox" className="Checkbox"></input>
            </div>,
          );
          break;
        default:
          break;
      }

      j = j + 1;
    }
  } else if (mode === 'modify') {
    const showQuestion = (
      <input
        className="Modifyproblem"
        type="text"
        value={question}
        onChange={(e) => handleChangeQuestion(probNumber, e.target.value)}
      ></input>
    );
    while (j < data.answer.length) {
      switch (j) {
        case 0:
          article.push(
            <div>
              ①
              <input
                className="Modifychoice"
                type="text"
                id={String(j)}
                value={answersEach[j]}
                onChange={(e) => {
                  answersEach[Number(e.target.id)] = e.target.value;
                  handleChangeAnswer(probNumber, answersEach);
                }}
              ></input>
            </div>,
          );
          break;
        case 1:
          article.push(
            <div>
              ②
              <input
                className="Modifychoice"
                type="text"
                id={String(j)}
                value={answersEach[j]}
                onChange={(e) => {
                  answersEach[Number(e.target.id)] = e.target.value;
                  handleChangeAnswer(probNumber, answersEach);
                }}
              ></input>
            </div>,
          );
          break;
        case 2:
          article.push(
            <div>
              ③
              <input
                className="Modifychoice"
                type="text"
                id={String(j)}
                value={answersEach[j]}
                onChange={(e) => {
                  answersEach[Number(e.target.id)] = e.target.value;
                  handleChangeAnswer(probNumber, answersEach);
                }}
              ></input>
            </div>,
          );
          break;
        case 3:
          article.push(
            <div>
              ④
              <input
                className="Modifychoice"
                type="text"
                id={String(j)}
                value={answersEach[j]}
                onChange={(e) => {
                  answersEach[Number(e.target.id)] = e.target.value;
                  handleChangeAnswer(probNumber, answersEach);
                }}
              ></input>
            </div>,
          );
          break;
        default:
          break;
      }
      j = j + 1;
    }
  }
  //문제 난이도
  var problevel = (
    <div className="Problemlevel">
      문제 난이도:
      <input
        className="Pseudobutton"
        value="상"
        type="button"
        id="level3"
        onClick={(e) => {
          e.preventDefault();
          const array = qnaExSets;
          const modifiedArray = array.map((item) =>
            item.id === probNumber + 1 ? { ...item, score: 4 } : item,
          );
          setQnaExSets(modifiedArray);
          changeButtonColor(3);
          console.log(qnaExSets);
        }}
      />
      <input
        className="Pseudobutton"
        value="중"
        type="button"
        id="level2"
        onClick={(e) => {
          e.preventDefault();
          const array = qnaExSets;
          const modifiedArray = array.map((item) =>
            item.id === probNumber + 1 ? { ...item, score: 3 } : item,
          );
          setQnaExSets(modifiedArray);
          changeButtonColor(2);
        }}
      />
      <input
        className="Pseudobutton"
        value="하"
        type="button"
        id="level1"
        onClick={(e) => {
          e.preventDefault();
          const array = qnaExSets;
          const modifiedArray = array.map((item) =>
            item.id === probNumber + 1 ? { ...item, score: 2 } : item,
          );
          setQnaExSets(modifiedArray);
          changeButtonColor(1);
        }}
      />
    </div>
  );
  return (
    <article className="Desktop">
      <div className="Problemheader">
        <h1 className="Problemtype_">
          2020학년도 신개념 친구 적성평가 내 친구는 몇점짜리 친구일까?
        </h1>
        <h2 className="Problemtitle">{id} 영역</h2>
        <p className="Period">제 1교시</p>
        <p className="Nametag">성명</p>
        <p className="Name">{id}</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          changeButtonColor(0);
          var j = 0;
          var k = 0;
          const array = [0, 1, 2, 3];
          array.forEach((i) => {
            if (i < data.answer.length) {
              const temp2 = ReactDOM.findDOMNode(
                document.getElementById(`Checkdiv${i}`),
              ) as HTMLInputElement;
              temp2.className = 'Checkdiv';
            }
          });
          if (mode === 'basic') {
            while (j < data.answer.length) {
              const temp1 = document.querySelector('#checkbox' + j) as HTMLInputElement;
              if (temp1.checked === true) k = k + 10 + j;
              temp1.checked = false;
              j = j + 1;
            }
            if (k < 10) {
              alert('nothing selected');
            } else if (k > 20) {
              alert('multiply selected!');
            }
            //정답이 하나 선택된 상태로 제출될 시, numberForCheck를 probNumber_add로 update.
            //다음 문제로 가면 추천 문제 리스트의 그 다음 문항부터 추천해주기 위함.
            else {
              setProbNumber(probNumber + 1);
              setNumberForCheck(probNumberAdd);
              setUserQnaSets(
                userQnaSets.concat({
                  id: probNumber,
                  picked_number: k - 9,
                  question: showQuestion,
                  answer: answersEach,
                  score: qnaExSets[probNumber - 1].score,
                }),
              );
            }
            if (probNumber === 10) {
              //축적된 데이터(UserQnALists) 업로드하도록
              history.push('/prob-making-done', {
                data: userQnaSets,
              });
            }
          }
        }}
      >
        <div className="Problem">
          {hidden}
          {probNumber + 1}.{showQuestion}
        </div>
        <div className="Choice">
          <ol>
            {problevel}
            {article}
            <input
              className="Modify"
              id="modechange"
              type="button"
              value={mention}
              onClick={(e) => {
                if (mode === 'basic') {
                  setMode('modify');
                  setMention('수정 완료');
                } else if (mode === 'modify') {
                  setMode('basic');
                  setMention('수정하기');
                }
              }}
            />
            <input
              className="Submit"
              id="next"
              type="submit"
              value={probNumber === 9 ? '제출하기' : '다음문제'}
            ></input>
          </ol>
        </div>
      </form>
      <div className="Pagenumber">-{probNumber + 1}-</div>
    </article>
  );
};

export default ProbMaking;
