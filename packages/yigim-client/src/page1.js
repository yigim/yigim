import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: '',
    gender: ''
  }
  userinfo = (e) => {
    e.preventDefault();
    this.setState({
      name:e.target.value,
      gender: ''
    })
  }
  render(){
      return (
        <div className="background">
          <header>
            <h1 className="content_type_1">2020학년도 너 나 알아? 친구 영역</h1>
            <h2 className="content_type_2">친구 적성평가</h2>
            {/* 성명 */}
            <div className="rectangle_1" style={{top:"467px"}}>
              <div className="box_font">
                성명
              </div>
            </div>
            {/* 학번 */}
            <div className="rectangle_1" style={{top:"583px"}}>
              <div className="box_font">
                학번
              </div>
            </div>
            {/* 성별 */}
            <div className="rectangle_1" style={{top:"699px"}}>
              <div className="box_font">
                성별
              </div>
            </div>
            <input style={{top:"467px"}}className="rectangle_2" placeholder="이름" onChange={this.userinfo} type="text"></input>
            <div style={{top:"583px"}} className="rectangle_2"></div>
            <div style={{top:"699px"}}className="rectangle_2"></div>
          </header>
          <button type="submit"className="button" style={{top:"800px",width: "120px"}}>문제 출제하기 </button>
        </div>
      );
  }
}

export default App;
