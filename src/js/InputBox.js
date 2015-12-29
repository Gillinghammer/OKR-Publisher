import React from 'react';
import TodoList from './TodoList';
import Firebase from 'firebase';
// import Rebase from 're-base';

class InputBox extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {items: [], text: ''};
  //   this.onChange = this.onChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   console.log(this); // this logged to console
  // }

  componentWillMount() {
    this.state = {items: [], text: ''};
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

   this.firebaseRef = new Firebase("https://okr-database.firebaseio.com/items/");
   this.firebaseRef.on("child_added", function(dataSnapshot) {
    // console.log('datasnap', dataSnapshot.val());
     // this.items.push(dataSnapshot.val());
     let dataSnap = this.state.items.concat({id: dataSnapshot.key(), objective: dataSnapshot.val().objective, level: dataSnapshot.val().level, timeframe: dataSnapshot.val().timeframe});
     this.setState({
       items: dataSnap
     });
   }.bind(this));
 }

 onChange(e) {
  e.preventDefault();
  var value = e.target.value;
    // console.log(e.target.value);
    this.setState({text: value});
  }
  handleSubmit(form_event) {
    form_event.preventDefault();
    // console.log(form_event.target.elements);
    this.firebaseRef.push({
      objective: this.state.text,
      level: form_event.target.elements.level.value,
      timeframe: form_event.target.elements.timeframe.value
    });
    this.setState({text: ""});

    // let newList = this.state.items.concat([{id: Date.now(), text: this.state.text}]);  
    // console.log(newList);
    // this.setState({items: newList, text: '' })
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <select name="level" defaultValue="Sales">
              <option value="Company">Company</option>
              <option value="VisionMetrics">Vision & Metrics</option>
              <option value="Development">Development</option>
              <option value="Sales">Sales</option>
          </select>
          <select name="timeframe" defaultValue="Sales">
              <option value="Q1">Q1</option>
              <option value="Q2">Q2</option>
              <option value="Q3">Q3</option>
              <option value="Q4">Q4</option>
          </select>
          <input type="text" name="objective" onChange={this.onChange} value={this.state.text} />
          <button>{'Add'}</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
      );
  }
}

module.exports = InputBox