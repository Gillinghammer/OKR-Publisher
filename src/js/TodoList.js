import React from 'react';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this);
  }
  render() {
    let createItem = function(item) {
      return (<li key={item.id}>{item.level} - {item.timeframe} - {item.objective} <button>{'Add Key Result'}</button> </li>);
    }
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}

module.exports = TodoList