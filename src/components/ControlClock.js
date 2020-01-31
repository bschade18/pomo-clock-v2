import React, { Component } from "react";

class ControlClock extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-12">
            <div class="start-reset-btn">
              <p id="start-stop" onClick={this.props.startPause}>
                <i class="fa fa-play"></i>
                <i class="fa fa-pause"></i>
              </p>
              <p id="reset" onClick={this.props.reset}>
                <i class="fas fa-undo"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ControlClock;
