import React, { Component } from "react";
import "../css/clock.css"

class SessionTime extends Component {

  render() {
    return (
      <div className="session-time-container">
        <div className="session-time-display">
          <span id="session-label" className="name-text">Session Length</span><br />
          <span id="session-length" className="time-digit">25</span>
        </div>
        <div className="session-time-updown-cont">
          <button id="session-increment" className="session-time-inc">
            <div className="arrow-up"></div>
          </button>
          <button id="session-decrement" className="session-time-dec">
            <div className="arrow-down"></div>
          </button>
        </div>
      </div>
    );
  }
}

export default SessionTime;