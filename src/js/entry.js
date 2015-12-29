// Import CSS
import '../css/master.scss';

// Import React and JS
import InputBox from './InputBox';
import Nav from './Nav';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <Nav />
      );
}
}

// Render!
React.render(<Header />, document.getElementsByTagName('body')[0]);