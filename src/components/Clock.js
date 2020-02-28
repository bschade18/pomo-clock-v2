import React from "react";

function Clock(props) {
  return (
    <div>
      <br />
      <h1 id="title" className="heading">
        Pomodoro Clock
      </h1>
      <p id="timer-label" className="heading">
        {props.timerLabel}
      </p>
      <div id="time-left">{props.clock}</div>
    </div>
  );
}

export default Clock;
