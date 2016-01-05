import React from 'react';
import Rebase from 're-base';
var base = Rebase.createClass('https://okr-database.firebaseio.com/results');

class KeyResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = props['obj'];
  }
  removeResult = (e) => {
      e.preventDefault();
      // alert( this);
      console.log("this", this)
      let key = e.target.id
      console.log('key', key)
      // console.log("this.state", this.state["keyResults"][key])
      // this.setState({
      //   keyResults: {key: {resultText: "HELLO"}}
      // })
      base.post('objectives/' + this.props['obj']['key'] + "/keyResults/" + key, {
          data: {},
          then(){
            console.log("finished removing result")
          }
        });
    }
  render() {
    let buildResults = function(item, removeResult) {
      if ('keyResults' in item) {
        var itemKeys = Object.keys( item['keyResults'] );
        let keyResultJSX = itemKeys.map(function(key){
          return (<li key={key}>
                      <h5>{item['keyResults'][key]['resultText']} <small>score: {item['keyResults'][key]['score']}</small> <span onClick={removeResult} id={key} className="glyphicon glyphicon-remove-sign clickable" aria-hidden="true"></span></h5>
                  </li>)
        })
        return keyResultJSX
      }
    }
    return (<ol>{buildResults(this.props.obj,this.removeResult)}</ol>)
  }
}


module.exports = KeyResults