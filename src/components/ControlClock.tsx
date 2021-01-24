import React from 'react';

type Props = {
  startPause: () => void,
  reset: () => void,
};

function ControlClock({ startPause, reset }: Props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="controls-container">
          <div id="play-pause-btn" className="control-btn" onClick={startPause}>
            <i className="fa fa-play"></i>
            <i className="fa fa-pause"></i>
          </div>
          <div id="reset-btn" className="control-btn" onClick={reset}>
            <i className="fas fa-undo"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlClock;
