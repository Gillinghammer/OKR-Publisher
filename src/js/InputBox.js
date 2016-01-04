import React from 'react';

class InputBox extends React.Component {
  render() {
    return (
      <div>
        <h3>WIREWAX Objectives</h3>
        <form className="form-inline" onSubmit={this.props.addObj}>
          <select className="form-control" name="level" defaultValue="Sales">
              <option value="Company">Company</option>
              <option value="VisionMetrics">Vision & Metrics</option>
              <option value="Development">Development</option>
              <option value="Sales">Sales</option>
          </select>
          <select className="form-control" name="timeframe" defaultValue="Sales">
              <option value="Q1">Q1</option>
              <option value="Q2">Q2</option>
              <option value="Q3">Q3</option>
              <option value="Q4">Q4</option>
          </select>
          <input className="form-control" type="text" name="objective" onChange={this.props.inputText} value={this.props.inputTextVal} />
          <button className="btn btn-primary" type="submit">Add New Objective</button>
        </form>
      </div>
      );
  }
}

module.exports = InputBox