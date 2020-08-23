import React, {Component} from 'react';

class ProbSolving extends Component{
    render(){
        return(
            <article>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.history.push('/probsolve/'+e.target.link.value)}}>
                    <div>링크 복사하기</div>
                    <input type="text" name="link" placeholder="링크 복사"></input>
                    <input type="submit" value="문제풀기"></input>
                </form>

            </article>
        );
    }
}

export default ProbSolving;