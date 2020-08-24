import React, {Component} from 'react';

class ProbSolveDone extends Component{
    render(){
        return(
            <div className="desktop">
                점수: {this.props.score_user}/{this.props.score_total}
                <button onClick={(e)=>{
                    console.log(this.props.history)
                    this.props.history.push("/")
                }}>버어어튼</button>
            </div>
        );
    }
}
export default ProbSolveDone;