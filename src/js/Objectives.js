import React from 'react';
import ResultInput from './ResultInput';
import KeyResults from './KeyResults'
import Rebase from 're-base';
var base = Rebase.createClass('https://okr-database.firebaseio.com/');

class Objectives extends React.Component {
  // handler = (e) => {...}
  componentDidMount() {
    this.state = {level: this.props.level}
  }
  removeObjective = (e) => {
      e.preventDefault();
      // alert( this);
      console.log("this", this)
      let key = e.target.id
      console.log('key', key)
      // console.log("this.state", this.state["keyObjectives"][key])
      base.post('objectives/' + key , {
          data: {},
          then(){
            console.log("finished removing result")
          }
        });
    }
  render() {
    let createObjective = (obj) => {

      if(obj.level.toLowerCase() === this.state.level) {
        return (<li key={obj.key}>
                <h4 className="objective-title">{obj.objective}  <button onClick={this.removeObjective} id={obj['key']}> x </button></h4>
                <KeyResults obj={obj} />
                <ResultInput objectiveId={obj.key} />
                </li>)
      }
    }
    return (<div className="objectivesCard">
              <h2 className="objective-level">{this.props.level}</h2>
              <ul>{this.props.objectives.map(createObjective)}</ul>
            </div>);
  }
}

module.exports = Objectives
