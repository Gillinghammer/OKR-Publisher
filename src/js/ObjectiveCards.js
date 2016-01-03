import React from 'react';
import KeyResults from './KeyResults';
import Firebase from 'firebase';

class ObjectiveCards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let buildCards = function(cardData) {
      let companyObjectives = [];
      let salesObjectives = [];
      let developmentObjectives = [];
      let visionmetricsObjectives = [];
      for(var i=0;i< cardData.length; i++) {
        if (cardData[i].level === "Company") {
          companyObjectives.push(cardData[i]);
        } else if (cardData[i].level === "Sales") {
          salesObjectives.push(cardData[i]);
        } else if (cardData[i].level === "VisionMetrics") {
          visionmetricsObjectives.push(cardData[i]);
        } else  {
          developmentObjectives.push(cardData[i]);
        }
      }

      let buildCard = function(item) {

        return (
          <div key={item.id}>
            <h4>{item.objective}</h4>
            <ul><KeyResults id={item.id} /></ul>
          </div>
          )
      }
      
      return (
        <div>
          <div>
            <h3>Company - Q1</h3>
            {companyObjectives.map(buildCard)}
          </div>
          <div>
            <h3>Development - Q1</h3>
          {developmentObjectives.map(buildCard)}
          </div>
          <div>
          <h3>Vision & Metrics - Q1</h3>
          {visionmetricsObjectives.map(buildCard)}
          </div>
          <div>
          <h3>Sales - Q1</h3>
          {salesObjectives.map(buildCard)}
          </div>
        </div>
        );
    }
    return (<div id="objective-cards">{buildCards(this.props.items)}</div>);
  }
}

module.exports = ObjectiveCards
