import React, {Component} from 'react';

class ProbLinkInput extends Component{
    render(){
        return(
            <article>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.history.push('/prob-solve/'+e.target.link.value)}}>
                    <div>링크 복사하기</div>
                    <input type="text" name="link" placeholder="링크 복사"></input>
                    <input type="submit" value="문제풀기"></input>
                </form>

            </article>
        );
    }
}

export default ProbLinkInput;