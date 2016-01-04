import React from 'react';
import Rebase from 're-base';
var base = Rebase.createClass('https://okr-database.firebaseio.com/');

class ResultInput extends React.Component {
  // handler = (e) => {...}
  componentDidMount() {
    this.state = {resultText: "", score: ""}
  }
  addResult(e){
    e.preventDefault();
    base.push('objectives/' + e.target.id + "/keyResults/", {
      data: {resultText: e.target.elements.keyresult.value, score: e.target.elements.score.value}
    });
   e.target.elements.keyresult.value = ""
   e.target.elements.score.value = ""
  }
  render() {
    return (<form className="form-inline" id={this.props.objectiveId} onSubmit={this.addResult}>
                  <input className="form-control" type="text" name="keyresult" placeholder="Add Key Result"  />
                  <input className="form-control" type="text" name="score" placeholder="0.0 - 1.0"  />
                  <button className="btn btn-primary" type="submit"> Add Key Result </button>
                </form>)
  }
}


module.exports = ResultInput