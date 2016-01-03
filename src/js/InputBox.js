import React from 'react';

class InputBox extends React.Component {
  render() {
    return (
      <div>
        <h3>WIREWAX Objectives</h3>
        <form onSubmit={this.props.addObj}>
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
          <input type="text" name="objective" onChange={this.props.inputText} value={this.props.inputTextVal} />
          <button>{'Add'}</button>
        </form>
      </div>
      );
  }
}

module.exports = InputBox