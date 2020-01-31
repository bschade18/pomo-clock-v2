import React from "react";
import "./App.css";
import ControlClock from "./components/ControlClock";
import SessionLength from "./components/SessionLength";
import Clock from "./components/Clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerLabel: "Session",
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      start: false,
      intervalID: ""
    };
  }

  clock = () => {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  };

  startCountdown = () => {
    this.setState({
      intervalID: setInterval(() => {
        this.countdown();
        this.clockUpdater();
      }, 1000)
    });
  };

  countdown = () => {
    this.setState(prevState => {
      return {
        timer: prevState.timer - 1
      };
    });
  };

  clockUpdater = () => {
    if (this.state.timer < 0) {
      if (this.state.timerLabel === "Session") {
        this.setState({
          timer: this.state.breakLength * 60,
          timerLabel: "Break"
        });
        this.playBeep();
      } else {
        this.setState({
          timer: this.state.sessionLength * 60,
          timerLabel: "Session"
        });
        this.playBeep();
      }
    }
  };

  breakInc = () => {
    if (this.state.breakLength <= 59 && this.state.start === false) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  };

  breakDec = () => {
    if (this.state.breakLength >= 2 && this.state.start === false) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  };
  sessionInc = () => {
    if (this.state.sessionLength <= 59 && this.state.start === false) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timer: this.state.timer + 60
      });
    }
  };
  sessionDec = () => {
    if (this.state.sessionLength >= 2 && this.state.start === false) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timer: this.state.timer - 60
      });
    }
  };
  startPause = () => {
    if (this.state.start) {
      this.setState({
        start: false
      });
      clearInterval(this.state.intervalID);
    } else {
      this.startCountdown();
      this.setState({
        start: true
      });
    }
  };

  reset = () => {
    this.pauseBeep();
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      start: false,
      timerLabel: "Session"
    });
    clearInterval(this.state.intervalID);
  };

  pauseBeep = () => {
    const beep = document.getElementById("beep");
    beep.pause();
    beep.currentTime = 0;
  };

  playBeep = () => {
    const beep = document.getElementById("beep");
    beep.play();
  };

  render() {
    return (
      <div>
        <Clock clock={this.clock()} timerLabel={this.state.timerLabel} />
        <SessionLength
          breakLength={this.state.breakLength}
          breakInc={this.breakInc}
          breakDec={this.breakDec}
          sessionInc={this.sessionInc}
          sessionDec={this.sessionDec}
          sessionLength={this.state.sessionLength}
        />
        <ControlClock startPause={this.startPause} reset={this.reset} />
        <audio id="beep" src="https://goo.gl/65cBl1" preload="auto"></audio>
      </div>
    );
  }
}

export default App;
