import React, { Component } from "react";
import "../css/clock.css"

class BreakTime extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="break-time-container">
        <div className="break-time-display">
          <span id="break-label" className="name-text">Break Length</span><br />
          <span id="break-length" className="time-digit">{this.props.lengthB}</span>
        </div>
        <div className="break-time-updown-cont">
          <button
            id="break-increment"
            className="break-time-inc"
            onClick={this.props.incrementBreak}
          >
            <div className="arrow-up"></div>
          </button>
          <button
            id="break-decrement"
            className="break-time-dec"
            onClick={this.props.decrementBreak}
          >
            <div className="arrow-down"></div>
          </button>
        </div>
      </div>
    );
  }
}

export default BreakTime;