import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './probmaking.css';

class ProbMaking extends Component{
    state={
        probNumber_add: -1,
        numberForCheck: -1,
        score_total: 0,
        score_user: 0,
        mode: 'basic',
        q: '',
        mention: '수정하기',
        QnAExSets: [
            {id: 1, question: this.props.match.params.id+'의 주량은?', answer: ['1병' , '2병', '3병', '반 병병병병병병'], score: 3},
            {id: 2, question: this.props.match.params.id+'의 입대 날짜는?', answer: ['17년 2월', '18년 2월', '19년 2월', '미필'], score: 3},
            {id: 3, question: this.props.match.params.id+'의 나이는?', answer: ['10살', '20살', '22살', '30살'], score: 3},
            {id: 4, question: this.props.match.params.id+'의 가족관계는?', answer: ['외동', '누나', '여동생', '누나, 여동생'], score: 3},
            {id: 5, question: this.props.match.params.id+'이 좋아하는 숫자는?', answer: ['1', '2', '3', '4'], score: 3},
            {id: 6, question: this.props.match.params.id+'이 싫어하는 숫자는??', answer: ['1', '2', '3', '4'], score: 3},
            {id: 7, question: this.props.match.params.id+'이 좋아하는 알파벳은?', answer: ['a', 'b', 'c', 'd'], score: 3},
            {id: 8, question: this.props.match.params.id+'이 싫어하는 알파벳은?', answer: ['a', 'b', 'c', 'd'], score: 3},
            {id: 9, question: this.props.match.params.id+'은 남자인가?', answer: ['O', 'X'], score: 3},
            {id: 10, question: this.props.match.params.id+'은 사람인가?', answer: ['O', 'X'], score: 3}
        ],
        AdditionalQnASets: [
            {id: 1, question: this.props.match.params.id+'의 연애 상태는?', answer: ['연애하는 중', '연애하지 않는 중', '썸타는 중'], score: 3},
            {id: 2, question: this.props.match.params.id+'가 좋아하는 활동은?', answer: ['야외 활동', '실내 활동'], score: 3},
            {id: 3, question: this.props.match.params.id+'가 다닌 고등학교는?', answer: ['영재고', '과학고', '자사고', '외고'], score: 3},
            {id: 4, question: this.props.match.params.id+'는?', answer: ['첫째', '둘째', '막내', '외동'], score: 3},
            {id: 5, question: this.props.match.params.id+'의 연령대는?', answer: ['청년층', '장년층', '노년층'], score: 3},
            {id: 6, question: this.props.match.params.id+'의 연애 상태는?', answer: ['연애하는 중', '연애하지 않는 중', '썸타는 중'], score: 3},
            {id: 7, question: this.props.match.params.id+'의 연애 상태는?', answer: ['연애하는 중', '연애하지 않는 중', '썸타는 중'], score: 3},
            {id: 8, question: this.props.match.params.id+'의 연애 상태는?', answer: ['연애하는 중', '연애하지 않는 중', '썸타는 중'], score: 3},
            {id: 9, question: this.props.match.params.id+'의 연애 상태는?', answer: ['연애하는 중', '연애하지 않는 중', '썸타는 중'], score: 3},
            {id: 10, question: this.props.match.params.id+'가 가장 좋아하는 생선은?', answer: ['고등어', '갈치', '생일선물'], score: 3},
        ],
        //문제 만드는 사람이 만드는 데이터
        UserQnASets: [this.props.match.params.id]
    }
    probNumber=0;
    
    //질문 수정 후 저장하는 함수
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
    //답변 수정 후 저장하는 함수
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
    //난이도 버튼 배경 색을 바꾸는 함수
    changeButtonColor = (i) => {

        const array=[1, 2, 3];
        if(i===0)
        {
            array.forEach(j => ReactDOM.findDOMNode(document.getElementById(`level${j}`)).style.backgroundColor = '#F1EBE6');
        }
        else{
            array.forEach(j => {
                if(i===j) {
                    ReactDOM.findDOMNode(document.getElementById(`level${j}`)).style.backgroundColor = 'white';
                }
                else{
                    ReactDOM.findDOMNode(document.getElementById(`level${j}`)).style.backgroundColor = 'gray';
                }
            }
            );
        }
    }
    render(){
        var data=this.state.QnAExSets[this.probNumber];
        var question=data.question;
        var show_question=question;
        var answers_each=data.answer.map(string => string)
        var article=[];
        var hidden=[];
        var j=0;
        //mode가 basic일 때 문제 추천받는 버튼 생성용
        if (this.state.mode === 'basic'){
            if(this.state.probNumber_add != this.state.numberForCheck){
                data=this.state.AdditionalQnASets[this.state.probNumber_add]
                question=data.question;
                show_question=question;
                answers_each=data.answer.map(string => string)
                article=[];
                hidden=[];
                j=0;
            }
            var show_question=question;
            hidden.push(<input type='button' className='Anotherquestion' onClick={(e) => {
                e.preventDefault();
                this.handleChangeAnswer();
                this.setState({
                    probNumber_add: (this.state.probNumber_add+1)%(this.state.AdditionalQnASets.length)
                })
            }
            } value='이 문제 건너뛰기'></input>)
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
        //문제 난이도
        var problevel = <div className="Problemlevel">
                            문제 난이도:
                            <input className="Pseudobutton" value="상" type="button" id="level3" onClick={(e)=>{
                                e.preventDefault();
                                const array = this.state.QnAExSets;
                                const modifiedArray = array.map(
                                    item => item.id===this.probNumber+1
                                    ?({...item, score: 4})
                                    : item
                                )
                                this.setState({
                                    QnAExSets: modifiedArray
                                })
                                this.changeButtonColor(3);
                                console.log(this.state.QnAExSets);
                        }}
                        />
                            <input className="Pseudobutton" value="중" type="button" id="level2" onClick={(e)=>{
                                e.preventDefault();
                                const array = this.state.QnAExSets;
                                const modifiedArray = array.map(
                                    item => item.id===this.probNumber+1
                                    ?({...item, score: 3})
                                    : item
                                )
                                this.setState({
                                    QnAExSets: modifiedArray
                                })
                                this.changeButtonColor(2);
                        }}
                        />
                            <input className="Pseudobutton" value="하" type="button" id="level1" onClick={(e)=>{
                                e.preventDefault();
                                const array = this.state.QnAExSets;
                                const modifiedArray = array.map(
                                    item => item.id===this.probNumber+1
                                    ?({...item, score: 2})
                                    : item
                                )
                                this.setState({
                                    QnAExSets: modifiedArray
                                })
                                this.changeButtonColor(1);
                        }}
                        />
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
                
                <form 
                onSubmit = {(e)=>{
                    e.preventDefault();
                    this.changeButtonColor(0);
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
                    }
                    //정답이 하나 선택된 상태로 제출될 시, numberForCheck를 probNumber_add로 update. 
                    //다음 문제로 가면 추천 문제 리스트의 그 다음 문항부터 추천해주기 위함.
                    else{
                        this.probNumber=this.probNumber+1;
                        this.setState({
                            numberForCheck: this.state.probNumber_add,
                            UserQnASets: this.state.UserQnASets.concat({id: this.probNumber,picked_number: k-9,question: show_question, answer: answers_each, score: this.state.QnAExSets[this.probNumber-1].score})
                        })
                    }
                    if (this.probNumber===10){
                        //축적된 데이터(UserQnALists) 업로드하도록
                        this.props.history.push(
                            '/prob-making-done',
                            {
                                data: this.state.UserQnASets
                            }
                            )
                    }
                }
                }}>
                <div className="Problem">
                    {hidden}
                {this.probNumber+1}.{show_question}
                </div>
                <div className="Choice">
                    <ol>    
                        {problevel}  
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