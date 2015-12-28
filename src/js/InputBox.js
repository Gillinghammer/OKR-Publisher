import React from 'react';
import TodoList from'./TodoList';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [{id: 1, text: 'blah'}], text: ''};
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this); // this logged to console
  }
  onChange(e) {
    e.preventDefault();
    var value = e.target.value;
    // console.log(e.target.value);
    this.setState({text: value});
  }
  handleSubmit(form_event) {
    form_event.preventDefault();
    let newList = this.state.items.concat([{id: Date.now(), text: this.state.text}]);
    // console.log(newList);
    this.setState({items: newList, text: '' })
  }

  render() {
    return (
      <div>
      <h3>TODO</h3>
      <TodoList items={this.state.items} />
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.onChange} value={this.state.text} />
      <button>{'Add'}</button>
      </form>
      </div>
      );
  }
}

module.exports = InputBox