import React, { Component } from "react";
import "../css/clock.css"

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      timerH: 25
    }
  }
  // span with className will have to change on toggle to pause-img
  render() {
    return (
      <div className="display-container">
        <div className="start-stop-reset-container">
          <button id="start_stop" className="start-stop">
            <span className="start-img"></span>
          </button>
          <button id="reset" className="reset">
            <span className="display-text">Restart</span>
          </button>
        </div>
        <div className="display">
          <span id="timer-label" className="time-digit">Session</span>
          <span id="time-left" className="time-digit">25:00</span>
        </div>
      </div>
    );
  }
}

export default Display;