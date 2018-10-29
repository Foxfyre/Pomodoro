import React, { Component } from "react";
import SessionTime from "../components/Session-time";
import BreakTime from "../components/Break-time";
import Display from "../components/Display";
import "../css/clock.css"

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      timerM: 25,
      timerS: "00",
      nextOp: "Start",
      currentFunction: "Session",
    }
    //this.handleChange = this.handleChange.bind(this);
    this.tick = this.tick.bind(this);
    this.secondsRemaining;
    this.intervalHandle;
  }

  onClickSessionInc() {
    if (this.state.timerM < 60) {
      this.setState({
        timerM: this.state.timerM + 1,
      })
    }
  }

  onClickSessionDec() {
    if (this.state.timerM > 1) {
      this.setState({
        timerM: this.state.timerM - 1,
      })
    }
  }

  onClickBreakInc() {
    /*this.state.break > 9 ? this.setState({ break: 0 + this.state.break + 1})
      : this.setState({ break: this.state.break + 1 })*/
    
    if (this.state.break < 60) {
      this.setState({
        break: this.state.break + 1,
      })
    }
  }

  onClickBreakDec() {
    if (this.state.break > 1) {
      this.setState({
        break: this.state.break - 1,
      })
    }
  }


  startCountDown() {
    this.setState({
      nextOp: "Stop",
      currentFunction: "Session",
      sessionLength: this.state.timerM,
    })
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = parseInt(this.state.timerM);
    let seconds = parseInt(this.state.timerS);
    this.secondsRemaining = (time * 60) + seconds;
  }

  stopCountDown() {
    this.setState({
      nextOp: "Start",
      timeM: this.state.timeM,
      timeS: this.state.timeS
    })
    clearInterval(this.intervalHandle);
  }

  startBreak() {
    this.setState({
      nextOp: "Stop",
      currentFunction: "Break",
    })
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = parseInt(this.state.break);
    let seconds = 0;
    this.secondsRemaining = (time * 60) + seconds;
  }

  reset() {
    this.setState({
      break: 5,
      timerM: 25,
      timerS: "00",
      nextOp: "Start",
      currentFunction: "Session",
    })
    clearInterval(this.intervalHandle);
  }

  tick() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - (min * 60);

    this.setState({
      timerM: min.toString(),
      timerS: sec.toString()
    })

    if (sec < 10) {
      this.setState({
        timerS: "0" + this.state.timerS,
      })
    }

    if (min < 10) {
      this.setState({
        timerM: "0" + this.state.timerM,
      })
    }

    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandle);
      if (this.state.currentFunction === "Session") {
        this.startBreak();
      } else if (this.state.currentFunction === "Break") {
        this.startCountDown();
      }
    }

    this.secondsRemaining--;

  }

  render() {
    return (
      <div className="clock-body-outline">
        <SessionTime
          increment={this.onClickSessionInc.bind(this)}
          decrement={this.onClickSessionDec.bind(this)}
          timerM={this.state.timerM.toString()} />
        <BreakTime
          incrementBreak={this.onClickBreakInc.bind(this)}
          decrementBreak={this.onClickBreakDec.bind(this)}
          break={this.state.break}
        />
        <Display
          onClickStart={this.startCountDown = this.startCountDown.bind(this)}
          onClickStop={this.stopCountDown = this.stopCountDown.bind(this)}
          onClickReset={this.reset = this.reset.bind(this)}
          timerM={this.state.timerM}
          timerS={this.state.timerS}
          nextOp={this.state.nextOp}
          currentFunction={this.state.currentFunction}
        />
      </div>
    );
  }
}

export default Clock;