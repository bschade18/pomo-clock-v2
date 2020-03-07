import React from "react";

function ControlClock(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="controls-container">
          <div
            id="play-pause-btn"
            className="control-btn"
            onClick={props.startPause}
          >
            <i className="fa fa-play"></i>
            <i className="fa fa-pause"></i>
          </div>
          <div id="reset-btn" className="control-btn" onClick={props.reset}>
            <i className="fas fa-undo"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlClock;
