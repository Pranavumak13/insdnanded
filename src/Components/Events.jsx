import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="events-container">
      <h1>Events & Activities</h1>
      <p>
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <div className="events-grid">
        <div className="events-item">a</div>
        <div className="events-item">b</div>
        <div className="events-item events-desktop-item">c</div>
        <div className="events-item">d</div>
        <div className="events-item">e</div>
      </div>
    </div>
  );
}

export default Events;
