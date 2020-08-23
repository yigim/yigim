import React, {Component} from 'react';
import './probmaking.css';

class ProbSolve extends Component{
    probNumber = 1;
    state = {
        userdata: [
            "길동홍",
            {id: 1, question: '길동홍의 주량은?', answer: ['1병' , '2병', '3병', '반 병병병병병병'], picked_number: 1},
            {id: 2, question: '길동홍의 입대 날짜는?', answer: ['17년 2월', '18년 2월', '19년 2월', '미필'], picked_number: 1},
            {id: 3, question: '길동홍의 나이는?', answer: ['10살', '20살', '22살', '30살'], picked_number: 1},
            {id: 4, question: '길동홍의 가족관계는?', answer: ['외동', '누나', '여동생', '누나, 여동생'], picked_number: 1},
            {id: 5, question: '길동홍이 좋아하는 숫자는?', answer: ['1', '2', '3', '4'], picked_number: 1},
            {id: 6, question: '길동홍이 싫어하는 숫자는??', answer: ['1', '2', '3', '4'], picked_number: 1},
            {id: 7, question: '길동홍이 좋아하는 알파벳은?', answer: ['a', 'b', 'c', 'd'], picked_number: 1},
            {id: 8, question: '길동홍이 싫어하는 알파벳은?', answer: ['a', 'b', 'c', 'd'], picked_number: 1},
            {id: 9, question: '길동홍은 남자인가?', answer: ['O', 'X'], picked_number: 1},
            {id: 10, question: '길동홍은 사람인가?', answer: ['O', 'X'], picked_number: 1}
        ]
    }
    render(){
        var prob = this.state.userdata[Number(this.probNumber)];
        var question = this.probNumber+'. '+prob.question;
        var answer = [];
        var i=0;
        while (i<prob.answer.length){
            answer.push(
            <li><input type="button" id={i} value="★" onClick={(e)=>{
                // button id 받아와서 picked_number와 비교하기부터 다시 ㄱㄱ
                if(Number(prob.picked_number)===1){
                 alert('right')
                }
                else{
                    alert(i)
                }
            }}></input>{prob.answer[i]}</li>
            )
            i=i+1;
        }
        return(
            <div>
                <article className="Desktop">
                <div className="Problemheader">
                    <h1 className="Problemtype_">2020학년도 신개념 친구 적성평가 내 친구는 몇점짜리 친구일까?</h1>
                    <h2 className="Problemtitle">{this.state.userdata[0]} 영역</h2>
                    <p className="Period">제 1교시</p>
                    <p className="Nametag">성명</p>
                    <p className="Name">{this.state.userdata[0]}</p>
                </div>
                <div className="Problem">
                {question}
                </div>
                <div className="Choice">
                    <ol>
                        {answer}
                    </ol>
                </div>
                <form onClick = {(e)=>{
                    e.preventDefault();
                    this.probNumber = this.probNumber+1
                    console.log(this.probNumber)
                }}>
                <button>
                    다음문제
                </button>
                </form>
                </article>
            </div>
        );
    }
}
export default ProbSolve;