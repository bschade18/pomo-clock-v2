import React from "react";

function SessionLength(props) {
  return (
    <div className="row">
      <div className="col-6">
        <p id="break-label">Break Length</p>
        <p id="break-length">{props.breakLength}</p>
        <div className="interval-btns">
          <p id="break-decrement" onClick={props.breakDecrement}>
            <i className="fas fa-minus"></i>
          </p>
          <p id="break-increment" onClick={props.breakIncrement}>
            <i className="fas fa-plus"></i>
          </p>
        </div>
      </div>
      <div className="col-6">
        <p id="session-label">Session Length</p>
        <p id="session-length">{props.sessionLength}</p>
        <div className="interval-btns">
          <p id="session-decrement" onClick={props.sessionDecrement}>
            <i className="fas fa-minus"></i>
          </p>
          <p id="session-increment" onClick={props.sessionIncrement}>
            <i className="fas fa-plus"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SessionLength;
