import React from 'react';
import Firebase from 'firebase';

class KeyResult extends React.Component {
  componentWillMount() {
    this.state = {results: []}
  }
  componentDidMount() {
    var keyresults = []
    this.firebaseRef = new Firebase("https://okr-database.firebaseio.com/keyresults/" + this.props.id.substring(1));
    this.firebaseRef.once("value", function(snapshot) {
      if(snapshot.val() != null) {
        var goal = ""
        var score = ""
        
        for(var i = 1; i < snapshot.val().length; i++) {
          goal = snapshot.child((i).toString() + "/goal").val()
          score = snapshot.child((i).toString() + "/score").val()
          console.log('goal ', goal)
          console.log('score ', score)
          keyresults.push([goal, score])
        }
        console.log("results array: ", keyresults[0])
      }
      for(var i = 0; i < keyresults.length-1; i++) {
        let dataSnap = this.state.results.concat({ goal: "fake goal", score: "0.5" })
        this.setState(results: { goal: "fake goal", score: "0.5" })
      }
    });
    
  }
  render() {
    let buildKeyResults = function(id, results) {
      console.log("data snap: ", results);
    }
    return <li>{buildKeyResults(this.props.id, this.state.results)}</li>;
  }
}

module.exports = KeyResult