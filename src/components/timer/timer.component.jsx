import React, { Component } from 'react';

import './timer.styles.scss';

class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <span className="timer__span">01 : 20 : 12</span>
      </div>
    );
  }
}

export default Timer;
