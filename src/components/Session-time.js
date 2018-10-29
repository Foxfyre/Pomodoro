import React, { Component } from "react";
import "../css/clock.css"

class SessionTime extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="session-time-container">
        <div className="session-time-display">
          <span id="session-label" className="name-text">Session Length</span><br />
          <span id="session-length" className="time-digit">{this.props.timerM}</span>
        </div>
        <div className="session-time-updown-cont">
          <button
            id="session-increment"
            className="session-time-inc"
            onClick={this.props.increment}
          >
            <div className="arrow-up"></div>
          </button>
          <button
            id="session-decrement"
            className="session-time-dec"
            onClick={this.props.decrement}
          >
            <div className="arrow-down"></div>
          </button>
        </div>
      </div>
    );
  }
}

export default SessionTime;