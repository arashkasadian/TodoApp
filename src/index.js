import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


class FirstClass extends React.Component {


  render(){
      return(
        <>
          <App/>              
        </>
      )
  }
}



ReactDOM.render(<FirstClass/>, document.getElementById('root'));
