import React, { Component } from "react";
import "../css/clock.css"

class Display extends Component {
  constructor(props) {
    super(props);
  }
  // span with className will have to change on toggle to pause-img
  render() {
    let button;
    if (this.props.nextOp === "Start" || this.props.nextOp === "") {
      button = <button
        id="start_stop"
        className="start-stop"
        onClick={this.props.onClickStart}
      >
        <span className="display-text">Start</span>
      </button>
    } else if (this.props.nextOp === "Stop") {
      button = <button
        id="start_stop"
        className="start-stop"
        onClick={this.props.onClickStop}
      >
        <span className="display-text">Stop</span>
      </button>
    }

    return (
      <div className="display-container">
        <div className="start-stop-reset-container">
          {button}
          <button
            id="reset"
            className="reset"
            onClick={this.props.onClickReset}
          >
            <span className="display-text">Restart</span>
          </button>
        </div>
        <div className="display">
          <span id="timer-label" className="time-digit">{this.props.currentFunction}</span>
          <span
            id="time-left"
            className="time-digit"
          >
            {this.props.timerDisplay}
          </span>
        </div>
        <div>
          <audio
            id="beep"
            src="http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav"
          />
        </div>
        <div className="foot-text"><span>Developed by Charlotte Hamilton / Twitter: @FoxyCoder22 / GitHub: Foxfyre</span></div>
      </div>
    );
  }
}

export default Display;