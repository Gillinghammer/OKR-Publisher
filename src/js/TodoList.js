import React from 'react';

class TodoList extends React.Component {
  render() {
    let createItem = function(item) {
      return <li key={item.id}>{item.text}</li>;
    }
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}

module.exports = TodoList