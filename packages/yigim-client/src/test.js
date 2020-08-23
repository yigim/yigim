import React, { Component } from 'react';

class Test extends Component{
    state={
        mode: 'basic',
        q: '',
        mention: '수정하기',
        i:0,
        QnAExSets: [
            {id: 1, question: '의 주량은?', answer: ['1병' , '2병', '3병', '반 병']},
            {id: 2, question: '의 입대 날짜는?', answer: ['17년 2월', '18년 2월', '19년 2월', '미필']},
            {id: 3, question: '의 나이는?', answer: ['10살', '20살', '22살', '30살']},
            {id: 4, question: '의 가족관계는?', answer: ['외동', '누나', '여동생', '누나, 여동생']},
            {id: 5, question: '이 좋아하는 숫자는?', answer: ['1', '2', '3', '4']},
            {id: 6, question: '이 싫어하는 숫자는??', answer: ['1', '2', '3', '4']},
            {id: 7, question: '이 좋아하는 알파벳은?', answer: ['a', 'b', 'c', 'd']},
            {id: 8, question: '이 싫어하는 알파벳은?', answer: ['a', 'b', 'c', 'd']},
            {id: 9, question: '은 남자인가?', answer: ['O', 'X', '세모', '네모']},
            {id: 10, question: '은 사람인가?', answer: ['O', 'X','세모', '네모']}
        ],
        UserQnASets: [],
    }
    render(){
        const name='kim'
        const array=this.state.QnAExSets.map(
            item=>item.id===0
            ? item
            : ({...item, question: '김재환'+'우우우'})
        )
        return(
            <div>
                실행중
                <button onClick={(e)=>{
                    e.preventDefault();
                    this.setState({
                        QnAExSets: array
                    })
                }}>버튼</button>
            </div>
        );
    }
}
export default Test;