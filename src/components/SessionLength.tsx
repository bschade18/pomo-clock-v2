import React from "react";


interface sessionLengthProps {
  breakLength: string,
  breakDecrement: () => void,
  breakIncrement: () => void,
  sessionLength: string,
  sessionDecrement: () => void,
  sessionIncrement: () => void
}

function SessionLength({breakLength, breakDecrement, breakIncrement, sessionLength, sessionDecrement, sessionIncrement}: sessionLengthProps) {
  return (
    <div className="row">
      <div className="col-6">
        <p id="break-label" className="interval-label">
          Break Length
        </p>
        <p id="break-length" className="interval-length">
          {breakLength}
        </p>
        <div className="interval-btn-container">
          <p
            id="break-decrement"
            className="interval-btn"
            onClick={breakDecrement}
          >
            <i className="fas fa-minus"></i>
          </p>
          <p
            id="break-increment"
            className="interval-btn"
            onClick={breakIncrement}
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
          {sessionLength}{" "}
        </p>
        <div className="interval-btn-container">
          <p
            id="session-decrement"
            className="interval-btn"
            onClick={sessionDecrement}
          >
            <i className="fas fa-minus"></i>
          </p>
          <p
            id="session-increment"
            className="interval-btn"
            onClick={sessionIncrement}
          >
            <i className="fas fa-plus"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SessionLength;
