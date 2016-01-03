// Import CSS
import '../css/master.scss';

// Import React and JS
import InputBox from './InputBox';
import Objectives from './Objectives';
import React from 'react';
import ReactDOM from "react-dom";
import Rebase from 're-base';
var base = Rebase.createClass('https://okr-database.firebaseio.com/');

export default class Dashboard extends React.Component {
  // handler = (e) => {...}
  componentWillMount() {
    this.state = {objectives: [], text: ''};
  }
  componentDidMount() {
    this.ref = base.syncState(`objectives`, {
         context: this,
         state: 'objectives',
         asArray: true
       });
  }
  inputTextChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({text: value});
   }

  addObjective = (form_event) => {
    form_event.preventDefault();
    let resultsArray = [{text: "blah blah", score: 0.6}, {text: "yadda yadda", score: 0.1}]
    this.setState({
        objectives: this.state.objectives.concat({
        objective: this.state.text,
        level: form_event.target.elements.level.value,
        timeframe: form_event.target.elements.timeframe.value}) //updates Firebase and the local state
    });
    this.state.text = ""
  }
  render() {
    return(
      <div>
        <InputBox addObj={this.addObjective} inputText={this.inputTextChange} inputTextVal={this.state.text} />
        <Objectives objectives={this.state.objectives} level="company" />
        <Objectives objectives={this.state.objectives} level="sales" />
        <Objectives objectives={this.state.objectives} level="development" />
        <Objectives objectives={this.state.objectives} level="visionmetrics" />
      </div>
      )
  }
}


// Render!
ReactDOM.render(<Dashboard />, document.getElementById('react'));

