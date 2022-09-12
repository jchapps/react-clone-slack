import React from "react";
import invoker from "./images/invoker.jpg";
import lina from "./images/lina.jpg";
import weaver from "./images/weaver.jpg";
import pudge from "./images/pudge.jpg";

export default function Messages() {
  return (
    <div className="messages-container">
      <div className="messages-header">
        <h1>
          <i class="fa-brands fa-teamspeak"></i>Team
        </h1>
      </div>

      <div class="message-conversations">
        <div className="message">
          <img className="message-img" src={lina} alt="Lina avatar" />
          <div className="message-content">
            <p className="messenger-name">
              <strong>Lina</strong>
            </p>
            <p>Hey guys, how's the mid lane?</p>
          </div>
        </div>

        <div className="message">
          <img className="message-img" src={invoker} alt="invoker avatar" />
          <div className="message-content">
            <p className="messenger-name">
              <strong>Invoker</strong>
            </p>
            <p>Going perfect so far!</p>
          </div>
        </div>

        <div className="message">
          <img className="message-img" src={weaver} alt="pudge avatar" />
          <div className="message-content">
            <p className="messenger-name">
              <strong>Weaver</strong>
            </p>
            <p>Who keeps moving my courier?</p>
            <p>I need to pause.</p>
          </div>
        </div>

        <div className="message">
          <img className="message-img" src={pudge} alt="pudge avatar" />
          <div className="message-content">
            <p className="messenger-name">
              <strong>Pudge</strong>
            </p>
            <p>Woops!</p>
          </div>
        </div>
      </div>

      <div class="chat-input">
        <form action="text">
          <input
            type="text"
            id="your-message"
            class="form-control"
            placeholder="Type your message here..."
          />
        </form>
      </div>
    </div>
  );
}
