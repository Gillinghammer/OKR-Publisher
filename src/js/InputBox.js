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
     let dataSnap = this.state.items.concat({name: dataSnapshot.key(), text: dataSnapshot.val().text});
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

    this.firebaseRef.push({
      text: this.state.text
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