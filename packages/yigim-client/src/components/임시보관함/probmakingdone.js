import React, {Component} from 'react';

class ProbMakingDone extends Component{
    render(){
        return(
            <article>
              <div>출제 완료</div>
              <div>링크: asldkfjasdlfjalksdjfklasj</div>
              <button>링크 복사</button>
              <button>공유하기</button>
              <div>{this.props.location.state.data[0]}</div>
            </article>

        );
    }
}

export default ProbMakingDone;