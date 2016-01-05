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
        return (<div>
                  <div className="panel-body" key={obj.key}>
                    <h4>{obj.objective} <button onClick={this.removeObjective} id={obj['key']} className="btn btn-danger" aria-hidden="true">delete</button></h4>
                    <KeyResults obj={obj} />
                  </div>
                  <div className="panel-footer">
                    <ResultInput objectiveId={obj.key} />
                  </div>
                </div>
                )
      }
    }
    return (<div className="panel panel-primary">
              <div className="panel-heading">
                <span className="panel-title">{this.props.level}</span>
                <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
              </div>
                {this.props.objectives.map(createObjective)}
            </div>);
  }
}

module.exports = Objectives
