import React, {Component} from 'react';
import './probmakeready.css';

class ProbMakeReady extends Component{
    render(){
        return(
            <form onClick={(e)=>{
                e.preventDefault();
                this.props.history.push('/prob-making/'+this.props.match.params.id+'/0');
                }}>
                <div className="Desktop14">
                    <h1 className="Title">&lt;출제자 주의사항 및 공지사항&gt;</h1>
                    <div className="Border_"></div>
                    <p className="Text">
            ○   문제지의 해당란에 <b>성명</b>과 <b>수험번호</b>를 쓰시오.<br/><br/>
            ○   답안지의 필적 확인란에 다음의 문구를 <b>정자로 기재</b>하시오.<br/><br/><br/><br/>
            ○   답안지의 해당란에 <b>성명</b>과 <b>수험번호</b>를 쓰고, 또 <b>수험번호</b>, <b>답</b>을 정확히 표시하시오.<br/><br/>
            ○   문항에 따라 배점이 다릅니다. <b>3점 문항</b>에만 점수가 표시되어 있습니다. 점수 표시가 없는 문항은 모두 <b>2점</b>입니다.
                    </p>
                    <div className="Textexample">돈 꾸면서도 살 건 사는데 꿈꾸면서 사는 건 아까운지</div>
                </div>
                <input className="probmakebutton" type="button" value="출제하기"></input>
            </form>
        );
    }
}
export default ProbMakeReady;