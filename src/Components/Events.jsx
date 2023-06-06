import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="events-container">
      <h1>Events & Activities</h1>
      {/* <p>
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p> */}
      <div className="events-grid">
        <div className="events-item"><img src="/Event1.jpg" alt="" style={{height:"250px"}}/></div>
        <div className="events-item"><img src="/Event6.jpg" alt="" style={{height:"250px"}}/></div>
        <div className="events-item events-desktop-item"><img src="/Event3.jpg" alt="" style={{height:"516px"}}/></div>
        <div className="events-item"><img src="/Event5.jpg" alt="" style={{height:"250px"}}/></div>
        <div className="events-item"><img src="/Event4.jpg" alt="" style={{height:"250px"}}/></div>
      </div>
    </div>
  );
}

export default Events;
