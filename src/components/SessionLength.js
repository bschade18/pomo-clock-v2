import React, { Component } from "react";

class SessionLength extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-6">
            <p id="break-label">Break Length</p>
            <p id="break-length">{this.props.breakLength}</p>
            <div class="break-button">
              <p id="break-decrement" onClick={this.props.breakDec}>
                <i class="fas fa-minus"></i>
              </p>
              <p id="break-increment" onClick={this.props.breakInc}>
                <i class="fas fa-plus"></i>
              </p>
            </div>
          </div>
          <div class="col-6">
            <p id="session-label">Session Length</p>
            <p id="session-length">{this.props.sessionLength}</p>
            <div class="session-button">
              <p id="session-decrement" onClick={this.props.sessionDec}>
                <i class="fas fa-minus"></i>
              </p>
              <p id="session-increment" onClick={this.props.sessionInc}>
                <i class="fas fa-plus"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionLength;
