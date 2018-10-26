import React, { Component } from "react";
import "../css/clock.css"

class Clock extends Component {

  render() {
    return (
      <div className="break-time-container">
        <div className="break-time-display">
          <span id="break-label" className="name-text">Break Length</span><br />
          <span id="break-length" className="time-digit">5</span>
        </div>
        <div className="break-time-updown-cont">
          <button id="break-increment" className="break-time-inc">
            <div className="arrow-up"></div>
          </button>
          <button id="break-decrement" className="break-time-dec">
            <div className="arrow-down"></div>
          </button>
        </div>
      </div>
    );
  }
}

export default Clock;