import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import searchBar from './searchBar.jsx';


export default class searchBar extends Component {

  constructor(props) {
  super(props); 
  this.state = {
    question: []
  }
}



  render() {
      return (
         <h1>Hello from React!</h1>
      );
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);