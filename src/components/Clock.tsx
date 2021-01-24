import React from "react";


type Props = {
  timerLabel: string,
  clock: string
}

function Clock({timerLabel, clock}: Props) {
  return (
    <div>
      <br />
      <h1 id="title" className="heading">
        Pomodoro Clock
      </h1>
      <p id="timer-label" className="heading">
        {timerLabel}
      </p>
      <div id="time-left">{clock}</div>
    </div>
  );
}

export default Clock;
