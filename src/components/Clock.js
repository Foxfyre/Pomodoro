import React, { Component } from "react";
import SessionTime from "../components/Session-time";
import BreakTime from "../components/Break-time";
import Display from "../components/Display";
import Audio from "../components/Audio";
import "../css/clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakSeconds: 300,
      timerDisplay: "25:00",
      timerSeconds: 1500,
      nextOp: "",
      currentFunction: "Session",
      lengthS: 25,
      lengthB: 5,
    };
    this.tick = this.tick.bind(this);
    this.displayFormat = this.displayFormat.bind(this);
    this.secondsRemaining;
    this.intervalHandle;
  }

  onClickSessionInc() {
    if (this.state.lengthS < 60) {
      this.setState({
        lengthS: this.state.lengthS + 1,
        timerSeconds: (this.state.lengthS + 1) * 60,
        timerDisplay: this.state.lengthS + 1 + ":00"
      });
    }
  }

  onClickSessionDec() {
    if (this.state.lengthS > 1) {
      this.setState({
        lengthS: this.state.lengthS - 1,
        timerSeconds: (this.state.lengthS - 1) * 60,
        timerDisplay: this.state.lengthS - 1 + ":00"
      });
    }
  }

  onClickBreakInc() {
    if (this.state.lengthB < 60) {
      this.setState({
        lengthB: this.state.lengthB + 1,
        breakSeconds: (this.state.lengthB + 1) * 60,
      });
    }
  }

  onClickBreakDec() {
    if (this.state.lengthB > 1) {
      this.setState({
        lengthB: this.state.lengthB - 1,
        breakSeconds: (this.state.lengthB - 1) * 60,
      });
    }
  }

  startCountDown() {
    if (this.state.currentFunction === "Break") {
      this.secondsRemaining = this.state.lengthS * 60;
    } else {
      this.secondsRemaining = this.state.timerSeconds;
    }
    this.setState({
      nextOp: "Stop",
      currentFunction: "Session"
    });
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  stopCountDown() {
    this.setState({
      nextOp: "Start",
      timerSeconds: this.secondsRemaining,
    });
    clearInterval(this.intervalHandle);
  }

  startBreak() {
    this.setState({
      nextOp: "Stop",
      currentFunction: "Break"
    });
    this.secondsRemaining = this.state.breakSeconds;
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  reset() {
    this.setState({
      breakSeconds: 300,
      timerDisplay: "25:00",
      timerSeconds: 1500,
      nextOp: "",
      currentFunction: "Session",
      lengthS: 25,
      lengthB: 5
    });
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    clearInterval(this.intervalHandle);
  }

  playAudio() {
    const audio = document.getElementById("beep");
    audio.play();
  };

  tick() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining % 60;

    this.secondsRemaining--;

    if (min === 0 && sec === 0) {
      this.playAudio();
      clearInterval(this.intervalHandle);
      if (this.state.currentFunction === "Session") {
        this.startBreak();
      } else if (this.state.currentFunction === "Break") {
        this.startCountDown();
      }
    }
    this.displayFormat(this.secondsRemaining);
  }

  displayFormat(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }

    this.setState({
      timerDisplay: min + ":" + sec,
    });
  }

  render() {
    return (
      <div className="clock-body-outline">
        <SessionTime
          increment={this.onClickSessionInc.bind(this)}
          decrement={this.onClickSessionDec.bind(this)}
          lengthS={this.state.lengthS.toString()}
        />
        <BreakTime
          incrementBreak={this.onClickBreakInc.bind(this)}
          decrementBreak={this.onClickBreakDec.bind(this)}
          lengthB={this.state.lengthB.toString()}
        />
        <Display
          onClickStart={(this.startCountDown = this.startCountDown.bind(this))}
          onClickStop={(this.stopCountDown = this.stopCountDown.bind(this))}
          onClickReset={(this.reset = this.reset.bind(this))}
          timerDisplay={this.state.timerDisplay}
          nextOp={this.state.nextOp}
          currentFunction={this.state.currentFunction}
        />
        <Audio />
      </div>
    );
  }
}

export default Clock;
