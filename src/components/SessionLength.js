import React from "react";

function SessionLength(props) {
  return (
    <div className="row">
      <div className="col-6">
        <p id="break-label" className="interval-label">
          Break Length
        </p>
        <p id="break-length" className="interval-length">
          {props.breakLength}
        </p>
        <div className="interval-btn-container">
          <p
            id="break-decrement"
            className="interval-btn"
            onClick={props.breakDecrement}
          >
            <i className="fas fa-minus"></i>
          </p>
          <p
            id="break-increment"
            className="interval-btn"
            onClick={props.breakIncrement}
          >
            <i className="fas fa-plus"></i>
          </p>
        </div>
      </div>
      <div className="col-6">
        <p id="session-label" className="interval-label">
          Session Length
        </p>
        <p id="session-length" className="interval-length">
          {props.sessionLength}{" "}
        </p>
        <div className="interval-btn-container">
          <p
            id="session-decrement"
            className="interval-btn"
            onClick={props.sessionDecrement}
          >
            <i className="fas fa-minus"></i>
          </p>
          <p
            id="session-increment"
            className="interval-btn"
            onClick={props.sessionIncrement}
          >
            <i className="fas fa-plus"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SessionLength;
