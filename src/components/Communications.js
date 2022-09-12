import React from "react";

export default function Communications() {
  return (
    <div className="communications-container">
      <div className="communications-side-bar">
        <h1>Team</h1>
        <div className="person">
          <div id="user" class="online-circle-active"></div>
          <span>Josh</span>
        </div>
        <div className="side-bar-info">
          <div className="channels-header">
            <h3>Channels</h3>
            <i className="fa-solid fa-plus"></i>
          </div>
          <div clasNames="channel">
            <span>
              <i class="fa-solid fa-khanda"></i> General
            </span>
          </div>

          <div className="channel-active">
            <span>
              <i class="fa-solid fa-khanda"></i> Messages
            </span>
          </div>

          <div class="channel">
            <span>
              <i class="fa-solid fa-lock"></i> Secrets
            </span>
          </div>

          <div className="channel">
            <span>
              <i class="fa-solid fa-lock"></i> Patches
            </span>
          </div>
        </div>

        <div className="side-bar-info">
          <div className="direct-message-header">
            <h3>Direct Messages</h3>
            <i className="fa-solid fa-plus"></i>
          </div>

          <div className="person">
            <div className="online-circle-active"></div>
            <span>Pudge</span>
          </div>

          <div className="person">
            <div className="online-circle-active"></div>
            <span>Antimage</span>
          </div>

          <div className="person">
            <div className="online-circle-inactive"></div>
            <span>Dragon Knight</span>
          </div>

          <div className="person">
            <div className="online-circle-inactive"></div>
            <span>Huskar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
