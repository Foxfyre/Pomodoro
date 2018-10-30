import React, { Component } from "react";

class Audio extends Component {
  render() {
    return (
      <div>
        <audio 
          id="beep"
          src="http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav" />
      </div>
    )
  }
}

export default Audio;