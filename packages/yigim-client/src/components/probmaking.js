import React, {Component} from 'react';
import './probmaking.css';

class ProbMaking extends Component{
    probNumber=0;
    state={
        mode: 'basic',
        q: '',
        mention: '수정하기',
        QnAExSets: [
            {id: 1, question: this.props.match.params.id+'의 주량은?', answer: ['1병' , '2병', '3병', '반 병']},
            {id: 2, question: this.props.match.params.id+'의 입대 날짜는?', answer: ['17년 2월', '18년 2월', '19년 2월', '미필']},
            {id: 3, question: this.props.match.params.id+'의 나이는?', answer: ['10살', '20살', '22살', '30살']},
            {id: 4, question: this.props.match.params.id+'의 가족관계는?', answer: ['외동', '누나', '여동생', '누나, 여동생']},
            {id: 5, question: this.props.match.params.id+'이 좋아하는 숫자는?', answer: ['1', '2', '3', '4']},
            {id: 6, question: this.props.match.params.id+'이 싫어하는 숫자는??', answer: ['1', '2', '3', '4']},
            {id: 7, question: this.props.match.params.id+'이 좋아하는 알파벳은?', answer: ['a', 'b', 'c', 'd']},
            {id: 8, question: this.props.match.params.id+'이 싫어하는 알파벳은?', answer: ['a', 'b', 'c', 'd']},
            {id: 9, question: this.props.match.params.id+'은 남자인가?', answer: ['O', 'X']},
            {id: 10, question: this.props.match.params.id+'은 사람인가?', answer: ['O', 'X']}
        ],
        UserQnASets: [this.props.match.params.id],
    }
    handleChangeQuestion = (i, value) => {
        const array = this.state.QnAExSets;
        const modifiedArray = array.map(
            item => item.id===i+1
            ?({...item, question: value})
            : item
        )
        this.setState({
            QnAExSets: modifiedArray
        })
    }
    handleChangeAnswer = (i, value) => {
        const array = this.state.QnAExSets;
        const modifiedArray = array.map(
            item => item.id===i+1
            ?({...item, answer: value})
            : item
        )
        this.setState({
            QnAExSets: modifiedArray
        })
    }
    render(){
        var answers_each=[];
        var data=this.state.QnAExSets[this.probNumber];
        var question=data.question
        var j=0;
       /* const array=this.state.QnAExSets.map(
            item => item.id===0
            ? item
            : ({...item, answer: answers_each})
        )*/
        while (j<data.answer.length){
            answers_each.push(
                data.answer[j]
            )
            j=j+1;
        }
        var article=[];
        var j=0;
        if (this.state.mode === 'basic'){
            var show_question=question;
            while (j<data.answer.length){
                switch(j) {
                    case 0:
                        article.push(
                            <div>①<input id={'checkbox'+j} type="checkbox" className="Checkbox"></input>{answers_each[j]}</div>
                        )
                      break;
                    case 1:
                        article.push(
                            <div>②<input id={'checkbox'+j} type="checkbox" className="Checkbox"></input>{answers_each[j]}</div>
                        )
                      break;
                    case 2:
                        article.push(
                            <div>③<input id={'checkbox'+j} type="checkbox" className="Checkbox"></input>{answers_each[j]}</div>
                        )
                      break;
                    case 3:
                        article.push(
                            <div>④<input id={'checkbox'+j} type="checkbox" className="Checkbox"></input>{answers_each[j]}</div>
                        )
                      break;      
                    default:
                      break;
                  }

                j=j+1;
            }
        }else if(this.state.mode ==='modify'){
            var show_question=<input className="Modifyproblem" type="text" value={question} 
            onChange={(e)=>this.handleChangeQuestion(this.probNumber, e.target.value)}
            ></input>
            while (j<data.answer.length){
                switch(j) {
                    case 0:
                        article.push(
                            <div>①<input className="Modifychoice" type="text" id={j} value={answers_each[j]} onChange={(e)=>{
                                answers_each[e.target.id]=e.target.value;
                                this.handleChangeAnswer(this.probNumber, answers_each)}}
                            ></input></div>
                        )
                      break;
                    case 1:
                        article.push(
                            <div>②<input className="Modifychoice" type="text" id={j} value={answers_each[j]} onChange={(e)=>{
                                answers_each[e.target.id]=e.target.value;
                                this.handleChangeAnswer(this.probNumber, answers_each)}}
                            ></input></div>
                        )
                      break;
                    case 2:
                        article.push(
                            <div>③<input className="Modifychoice" type="text" id={j} value={answers_each[j]} onChange={(e)=>{
                                answers_each[e.target.id]=e.target.value;
                                this.handleChangeAnswer(this.probNumber, answers_each)}}
                            ></input></div>
                        )
                      break;
                    case 3:
                        article.push(
                            <div>④<input className="Modifychoice" type="text" id={j} value={answers_each[j]} onChange={(e)=>{
                                answers_each[e.target.id]=e.target.value;
                                this.handleChangeAnswer(this.probNumber, answers_each)}}
                            ></input></div>
                        )
                      break;      
                    default:
                      break;
                  }
                j=j+1;
            }
        }
        var problevel = <div className="Problemlevel">
                            문제 난이도:
                            <input className="pseudobutton" value="★" type="radio" id="level1"></input>
                            <input className="pseudobutton" value="★" type="radio" id="level2"></input>
                            <input className="pseudobutton" value="★" type="radio" id="level3"></input>
                        </div>
        return(
            <article className="Desktop">
                <div className="Problemheader">
                    <h1 className="Problemtype_">2020학년도 신개념 친구 적성평가 내 친구는 몇점짜리 친구일까?</h1>
                    <h2 className="Problemtitle">{this.props.match.params.id} 영역</h2>
                    <p className="Period">제 1교시</p>
                    <p className="Nametag">성명</p>
                    <p className="Name">{this.props.match.params.id}</p>
                </div>
                
                <form onSubmit = {(e)=>{
                    e.preventDefault();
                    var j=0;
                    var k=0;
                    if (this.state.mode==='basic'){
                    while (j<data.answer.length){
                        if (document.querySelector('#checkbox'+j).checked===true)
                        k=k+10+j;
                        document.querySelector('#checkbox'+j).checked=false;
                        j=j+1;
                    }
                    if(k<10){
                        alert('nothing selected');
                    }
                    else if(k>20){
                        alert('multiply selected!');
                    }else{
                        this.probNumber=this.probNumber+1;
                        this.setState({
                            UserQnASets: this.state.UserQnASets.concat({id: this.probNumber,picked_number: k-9,question: show_question, answer: answers_each})
                        })
                    }
                    if (this.probNumber===10){
                        //축적된 데이터(UserQnALists) 업로드하도록
                        this.props.history.push(
                            '/probmakingdone',
                            {
                                data: this.state.UserQnASets
                            }
                            )
                    }
                }
                }}>
                <div className="Problem">
                {this.probNumber+1}.{show_question}
                </div>
                <div className="Choice">
                    <ol>
                        {article}
                        <input className="Modify" id='modechange' type="button" value={this.state.mention} onClick={(e)=>{
                            if(this.state.mode==='basic'){
                            this.setState({
                                mode: 'modify',
                                mention: '수정 완료',
                            });                            
                        }else if(this.state.mode==='modify'){
                          this.setState({
                              mode: 'basic',
                              mention: '수정하기'
                          });
                        }
                        }}/>
                         <input className="Submit" id="next" type="submit" value={this.probNumber===9 ? '제출하기' : '다음문제'}></input>
                    </ol>
                </div>
                </form>
                    <div className="Pagenumber">-{this.probNumber+1}-</div>
            </article>
        );
    }
}

export default ProbMaking;

// onSubmit={(e)=>{
//     if (this.state.mode === 'basic'){
//     e.preventDefault();
//     if (this.state.i<8){
//     this.setState({
//         i:this.state.i+1
//     })
// }
// // 마지막 문제 되면 다음 버튼을 출제 완료하기 버튼으로 바꾸기-not working:(
//     else if(this.state.i===8){
//         document.querySelector('#next').value="출제 완료하기"
//         this.setState({
//             i:this.state.i+1
//         })
//     }
// else{
//     this.props.history.push('/probmakingdone')
// }}}}