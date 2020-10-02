import React, { useState } from 'react';
import './probmaking.css';
import { useHistory } from 'react-router-dom';
import { DefaultQuestions, Problem } from '../constants/constants';
import { getCircleNumber } from '../helpers/getCircleNumber';

//typescript image import 방식
const Checksign = require('../images/checksign.png');
interface Props {
  name: string;
}

enum Level {
  low = '하',
  mid = '중',
  high = '상',
}

enum Mode {
  basic = 'basic',
  modify = 'modify',
}

const ProbMaking = ({ name }: Props) => {
  const history = useHistory();
  const [scoreTotal, setScoreTotal] = useState(0);
  const [scoreUser, setScoreUser] = useState(0);
  const [mode, setMode] = useState(Mode.basic);
  const [level, setLevel] = useState<Level | null>(null);
  const [mention, setMention] = useState('수정하기');
  const questions = DefaultQuestions(name);
  //문제 만드는 사람이 만드는 데이터
  const [test, setTest] = useState<Problem[]>([]);
  const [pickedNumber, setPickedNumber] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(questions[0]);

  //질문 수정 후 저장하는 함수
  const handleChangeQuestion = (value: string) => {
    setQuestion({ ...question, question: value });
  };

  //보기 수정 후 저장하는 함수
  const handleChangeExamples = (value: string[]) => {
    setQuestion({ ...question, examples: value });
  };

  //난이도 수정하는 함수
  const handleChangeScore = (value: number) => {
    setQuestion({ ...question, score: value });
  };

  //문제 난이도
  var problevel = (
    <div className="Problemlevel">
      문제 난이도:
      <input
        className={
          level
            ? level === Level.high
              ? 'PseudobuttonSelected'
              : 'PseudobuttonUnselected'
            : 'PseudobuttonDefault'
        }
        value="상"
        type="button"
        id="level3"
        onClick={(e) => {
          e.preventDefault();
          handleChangeScore(4);
          setLevel(Level.high);
        }}
      />
      <input
        className={
          level
            ? level === Level.mid
              ? 'PseudobuttonSelected'
              : 'PseudobuttonUnselected'
            : 'PseudobuttonDefault'
        }
        value="중"
        type="button"
        id="level2"
        onClick={(e) => {
          e.preventDefault();
          handleChangeScore(3);
          setLevel(Level.mid);
        }}
      />
      <input
        className={
          level
            ? level === Level.low
              ? 'PseudobuttonSelected'
              : 'PseudobuttonUnselected'
            : 'PseudobuttonDefault'
        }
        value="하"
        type="button"
        id="level1"
        onClick={(e) => {
          e.preventDefault();
          e.preventDefault();
          handleChangeScore(2);
          setLevel(Level.low);
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
        <h2 className="Problemtitle">{name} 영역</h2>
        <p className="Period">제 1교시</p>
        <p className="Nametag">성명</p>
        <p className="Name">{name}</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(pickedNumber);
          console.log(test);
          if (pickedNumber !== null) {
            setLevel(null);
            setQuestion(questions[questionIndex + 1]);
            setQuestionIndex((questionIndex + 1) % questions.length);
            setPickedNumber(null);
            setTest(
              test.concat({
                ...question,
                answer: question.examples[pickedNumber],
              }),
            );
            // 왜인지는 모르겠지만 아래 값이 10이면 11번 문제까지 만들게 돼서 9로 바꿔놨습니다.
            // console.log로 확인해보니 7문제를 제출했으면 6번 문제까지의 데이터만 저장돼서 이것도 수정이 필요할 것 같습니다.
            if (test.length >= 9) {
              //축적된 데이터(UserQnALists) 업로드하도록
              history.push('/prob-making-done', {
                data: test,
              });
            }
          } else {
            alert('nothing selected');
          }
        }}
      >
        <div className="Problem">
          {mode === Mode.basic ? (
            <input
              type="button"
              className="Anotherquestion"
              onClick={(e) => {
                e.preventDefault();
                setLevel(null);
                setQuestion(questions[questionIndex + 1]);
                setQuestionIndex((questionIndex + 1) % questions.length);
                setPickedNumber(null);
              }}
              value="이 문제 건너뛰기"
            ></input>
          ) : (
            ''
          )}
          {test.length + 1}.
          {mode === Mode.basic ? (
            question.question
          ) : (
            <input
              className="Modifyproblem"
              type="text"
              value={question.question}
              onChange={(e) => handleChangeQuestion(e.target.value)}
            ></input>
          )}
        </div>
        <div className="Choice">
          <ol>
            {problevel}
            {mode === Mode.basic
              ? question.examples.map((value, index) => (
                  <div>
                    <button
                      id={`button${index}`}
                      className="Buttonselect"
                      type="button"
                      onClick={() => {
                        setPickedNumber(index);
                      }}
                    >
                      {getCircleNumber(index) + value}
                      <div
                        className={
                          pickedNumber === index ? 'Checkani' : 'Checkdiv'
                        }
                        id={`Checkdiv${index}`}
                      >
                        <img
                          className="Checksign"
                          src={Checksign}
                          alt="checksign"
                        />
                      </div>
                    </button>
                    <input
                      id={'checkbox' + index}
                      type="checkbox"
                      className="Checkbox"
                    ></input>
                  </div>
                ))
              : question.examples.map((value, index) => (
                  <div>
                    {getCircleNumber(index)}
                    <input
                      className="Modifychoice"
                      type="text"
                      id={String(index)}
                      value={value}
                      onChange={(e) => {
                        handleChangeExamples(
                          question.examples.map((example, index2) =>
                            index2 === index ? e.target.value : example,
                          ),
                        );
                      }}
                    ></input>
                  </div>
                ))}
            <input
              className="Modify"
              id="modechange"
              type="button"
              value={mention}
              onClick={(e) => {
                if (mode === Mode.basic) {
                  setMode(Mode.modify);
                  setMention('수정 완료');
                } else {
                  setMode(Mode.basic);
                  setMention('수정하기');
                }
              }}
            />
            {mode === Mode.basic ? (
              <input
                className="Submit"
                id="next"
                type="submit"
                value={test.length === 9 ? '제출하기' : '다음문제'}
              ></input>
            ) : (
              ''
            )}
          </ol>
        </div>
      </form>
      <div className="Pagenumber">-{test.length + 1}-</div>
    </article>
  );
};

export default ProbMaking;
