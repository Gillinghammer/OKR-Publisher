import React from 'react';
import TodoList from'./TodoList';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [{id: 1, text: 'item one'}, {id: 2, text: 'item two'}], text: ''};
    this.onChange.bind(this);
  }

  onChange(e) {
    let { value } = e.target;
    this.setState({text: value});
  }
  onSubmit(e) {
    let { nextItems } = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    let { nextText } = '';
    this.setState({items: nextItems, text: nextText})
  }

  render() {
    return (
      <div>
      <h3>TODO</h3>
      <TodoList items={this.state.items} />
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.onChange} value={this.state.text} />
      <button>{'Add #' + (this.state.items.length + 1)}</button>
      </form>
      </div>
      );
  }
}

module.exports = InputBox