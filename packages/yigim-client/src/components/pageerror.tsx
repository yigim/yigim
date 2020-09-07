import React, {Component} from 'react';
import "./pageerror.css";

class PageError extends Component{
    render(){
        return(
            <div>
            <h1>부정행위 적발</h1>

            <h2>처음 화면으로 돌아가시오.</h2>
               <form onClick={(e)=>{
                   e.preventDefault();
                   this.props.history.push("/")
               }}>
               <a href="/"><button className="returnbutton">돌아가기</button></a>
               </form>
            </div>
        );
    }
}

export default PageError;