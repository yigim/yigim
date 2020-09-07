import React, { Component } from 'react';
import './problinkinput.css';

class ProbLinkInput extends Component {
  state = {
    name: '',
    link: '',
  };
  render() {
    return (
      <article className="Desktop">
        <div>
          성명:{' '}
          <input
            type="text"
            placeholder="이름"
            onChange={(e) => {
              e.preventDefault();
              this.setState({
                name: e.target.value,
              });
            }}
          ></input>
          <br />
          링크 입력
          <br />
          <input
            type="textarea"
            placeholder="링크 복사"
            onChange={(e) => {
              e.preventDefault();
              this.setState({
                link: e.target.value,
              });
            }}
          ></input>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (this.state.name === '') {
              alert('이름을 입력하시오');
            } else if (this.state.link === '') {
              alert('링크를 입력하시오');
            } else {
              if (1 + 1 === 3) {
                alert('link not found');
              } else {
                this.props.function_name(this.state.name);
                this.props.history.push('/prob-solving');
              }
            }
          }}
        >
          고사실 입장
        </button>
      </article>
    );
  }
}
export default ProbLinkInput;
