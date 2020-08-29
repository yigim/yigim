import React, {Component} from 'react';

class ProbSolveDone extends Component{
    render(){
        return(
            <div className="Desktop">
                성명: {this.props.name}<br/>
                점수: {this.props.data[0]}/{this.props.data[1]}<br/>
                순위: <br/>
                {/* 순위를 표로 만들어서 제공하면 좋을 듯 */}
                <button onClick={(e)=>{
                    console.log(this.props.history)
                    this.props.history.push("/user-info")
                }}>나만의 퀴즈 만들기</button>
            </div>
        );
    }
}
export default ProbSolveDone;