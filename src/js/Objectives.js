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
  render() {
    let createObjective = (obj) => {

      if(obj.level.toLowerCase() === this.state.level) {
        return (<li key={obj.key}>
                <h4 className="objective-title">{obj.objective}</h4>
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
