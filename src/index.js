import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyTimer from './Timer';

class FirstClass extends React.Component {
  render(){
      return(
        <>
              <MyTimer/>              
        </>
      )
  }
}



ReactDOM.render(<FirstClass/>, document.getElementById('root'));
