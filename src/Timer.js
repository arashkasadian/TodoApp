import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var interval;
class MyTimer extends React.Component{
    constructor(){
      super();
      this.state = {
        time : new Date().toLocaleTimeString()
      }
    }

    componentDidMount() {
        interval = setInterval(()=>{
            this.setState ({
            time : new Date().toLocaleTimeString()
            })
        },1000)
    }

    render(){
      return(
          <div className='ourtext'>
            {this.state.time}
          </div>
       
      )}
  }
  export default MyTimer;