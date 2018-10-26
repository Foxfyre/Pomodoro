import React, { Component } from "react";
import SessionTime from "../components/Session-time";
import BreakTime from "../components/Break-time";
import Display from "../components/Display";
import "../css/clock.css"

class Clock extends Component {

  render() {
    return (
      <div className="clock-body-outline">
        <SessionTime />
        <BreakTime />
        <Display />
      </div>
    );
  }
}

export default Clock;