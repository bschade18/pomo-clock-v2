import React from 'react';
import './App.css';
import Clock from './components/Clock';
import SessionLength from './components/SessionLength';
import ControlClock from './components/ControlClock';

class App extends React.Component {
  
    state = {
      timerLabel: 'Session',
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      start: false,
      intervalID: '',
    };
  

  clock = () => {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    // @ts-ignore
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // @ts-ignore
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  };

  startPause = () => {
    if (!this.state.start) {
      this.startCountdown();
      this.setState({
        start: true,
      });
    } else {
      this.setState({
        start: false,
      });
      // @ts-ignore
      clearInterval(this.state.intervalID);
    }
  };

  reset = () => {
    this.pauseBeep();
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      start: false,
      timerLabel: 'Session',
    });
    // @ts-ignore
    clearInterval(this.state.intervalID);
  };

  startCountdown = () => {
    this.setState({
      intervalID: setInterval(() => {
        this.countdown();
        this.switchSession();
      }, 1000),
    });
  };

  countdown = () => {
    this.setState({
      timer: this.state.timer - 1,
    });
  };

  switchSession = () => {
    if (this.state.timer < 0) {
      if (this.state.timerLabel === 'Session') {
        this.setState({
          timer: this.state.breakLength * 60,
          timerLabel: 'Break',
        });
        this.playBeep();
      } else {
        this.setState({
          timer: this.state.sessionLength * 60,
          timerLabel: 'Session',
        });
        this.playBeep();
      }
    }
  };

  breakIncrement = () => {
    const { breakLength, start } = this.state;

    if (breakLength <= 59 && start === false) {
      this.setState({
        breakLength: breakLength + 1,
      });
    }
  };

  breakDecrement = () => {
    const { breakLength, start } = this.state;

    if (breakLength >= 2 && start === false) {
      this.setState({
        breakLength: breakLength - 1,
      });
    }
  };

  sessionIncrement = () => {
    const { sessionLength, start, timer } = this.state;

    if (sessionLength <= 59 && start === false) {
      this.setState({
        sessionLength: sessionLength + 1,
        timer: timer + 60,
      });
    }
  };

  sessionDecrement = () => {
    const { sessionLength, start, timer } = this.state;

    if (sessionLength >= 2 && start === false) {
      this.setState({
        sessionLength: sessionLength - 1,
        timer: timer - 60,
      });
    }
  };

  playBeep = () => {
    const beep = document.getElementById('beep');
    // @ts-ignore
    beep.play();
  };

  pauseBeep = () => {
    const beep = document.getElementById('beep');
    // @ts-ignore
    beep.pause();
    // @ts-ignore
    beep.currentTime = 0;
  };

  render() {
    return (
      <div>
        <Clock clock={this.clock()} timerLabel={this.state.timerLabel} />
        <SessionLength
          breakLength={this.state.breakLength}
          breakIncrement={this.breakIncrement}
          breakDecrement={this.breakDecrement}
          sessionIncrement={this.sessionIncrement}
          sessionDecrement={this.sessionDecrement}
          sessionLength={this.state.sessionLength}
        />
        <ControlClock startPause={this.startPause} reset={this.reset} />
        <audio id="beep" src="https://goo.gl/65cBl1" preload="auto"></audio>
      </div>
    );
  }
}

export default App;
