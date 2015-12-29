// Import CSS
import '../css/master.scss';

// Import React and JS
import InputBox from './InputBox';
import Nav from './Nav';
import React from 'react';
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <Nav />
      );
}
}

// Render!
ReactDOM.render(<InputBox />, document.getElementById('react'));

