import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this); // this logged to console
  }
  render() {
    let createItem = function(item) {
      return <li key={item.name}>{item.text}</li>;
    }
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}

module.exports = TodoList