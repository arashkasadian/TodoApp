import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BtnLap from './lap';

var interval;
class MyTimer extends React.Component{
    constructor(){
      super();
      this.state = {
        h:0,
        m:0,
        s:0,
        isset:false,
        time : '00 : 00 : 00'
      }
    }

    startWatch=()=> {
      if (this.state.isset===false) { 
      interval=setInterval(()=>{
        var h=this.state.h;
        var m=this.state.m;
        var s=this.state.s+1;
        if (s===60) {
          m++;
          s=0;
        }
        if (m===60) {
          h++;
          m=0;
        }
          this.setState ({
            h: h,
            m: m,
            s: s,
            isset:true,
            time : `${h>9 ?h :'0'+h} : ${m>9 ?m :'0'+m} : ${s>9 ?s :'0'+s}`
            })

        },1000)
      }
    }
    stopWatch=()=>{
      clearInterval(interval);
      this.setState ({
        h:0,
        m:0,
        s:0,
        isset:false,
        time : this.state.time
        })
    }
    render(){
      return(
        <>
            <div className='clock'>
              <p className='ourText'>{this.state.time}</p>
            </div>
            <div className='btns'>
              <button onClick={this.startWatch}>start</button>
              <button onClick={this.stopWatch}>stop</button>
              <BtnLap/>
            </div>
        </>
      )}
  }
  export default MyTimer;