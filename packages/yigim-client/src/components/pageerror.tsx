import React from 'react';
import './pageerror.css';
import { useHistory } from 'react-router-dom';

const PageError = () => {
  const history = useHistory();
  return (
    <div>
      <h1>부정행위 적발</h1>

      <h2>처음 화면으로 돌아가시오.</h2>
      <form
        onClick={(e) => {
          e.preventDefault();
          history.push('/');
        }}
      >
        <a href="/">
          <button className="returnbutton">돌아가기</button>
        </a>
      </form>
    </div>
  );
};

export default PageError;
