import React, { useState } from 'react';
import './problinkinput.css';
import { useHistory } from 'react-router-dom';

const ProbLinkInput = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  return (
    <article className="Desktop">
      <div>
        성명:{' '}
        <input
          type="text"
          placeholder="이름"
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
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
            setLink(e.target.value);
          }}
        ></input>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (name === '') {
            alert('이름을 입력하시오');
          } else if (link === '') {
            alert('링크를 입력하시오');
          } else {
            if (1 + 1 === 3) {
              alert('link not found');
            } else {
              function_name(name);
              history.push('/prob-solving');
            }
          }
        }}
      >
        고사실 입장
      </button>
    </article>
  );
};
export default ProbLinkInput;
