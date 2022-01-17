import React from 'react';
import './index.css';
import MyList from './MyList';

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
    
    reset=()=>{
      var h=0;
      var m=0;
      var s=0;
      clearInterval(interval);
      this.setState ({
        h:h,
        m:m,
        s:s,
        isset:false,
        time : `${h>9 ?h :'0'+h} : ${m>9 ?m :'0'+m} : ${s>9 ?s :'0'+s}`
        })
    }

    handle=()=>{
      this.props.setlist([...this.props.list,this.state.time]);
    }

    render(){
      return(
        <>
            <div className='clock' onClick={this.handle}>
              <p className='ourText'>{this.state.time}</p>
            </div>
            <div className='btns'>
              <button onClick={this.startWatch}>start</button>
              <button onClick={this.stopWatch}>stop</button>
              <button onClick={this.reset}>reset</button>
            </div>
            <MyList>
                {this.props.list}
            </MyList>
        </>
      )}
  }
  export default MyTimer;