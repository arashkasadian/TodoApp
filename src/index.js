import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyTimer from './Timer';

class FirstClass extends React.Component {
  render(){
      return(
        <div>
          <div className='cbody'>
            <div className='clock'>
              <MyTimer/>              
            </div>
          </div>
        </div>
      )
  }
}



ReactDOM.render(<FirstClass/>, document.getElementById('root'));
