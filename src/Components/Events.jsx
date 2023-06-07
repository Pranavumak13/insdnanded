import React from "react";
import Popup from "reactjs-popup";
import "./Events.css";

import gauharkhan from "../img/celebrities/gauharkhan.jpg";
import gauharkhanst from "../img/celebrities/gauharkhan_students.jpg";
import nikitadutta from "../img/celebrities/nikitadutta.jpg";
import nikitaduttast from "../img/celebrities/nikitadutta_students.jpg";
import mikhasingh from "../img/celebrities/mikhasingh.jpg";
import karishmakapoor from "../img/celebrities/karishmakapoor.jpg";

const Tile = (props) => {
  return (
    <Popup
      trigger={
        <div
          className={
            props.desktop ? "events-item events-desktop-item" : "events-item"
          }
          style={{ backgroundImage: `url(${props.img})` }}
        >
          <div className="events-cover"></div>
        </div>
      }
    >
      {(close) => (
        <div className="events-img">
          <img src={props.img} alt="event" />
          <button
            className="close-btn"
            onClick={() => {
              close();
            }}
          >
            x
          </button>
        </div>
      )}
    </Popup>
  );
};

function Events() {
  return (
    <div className="events-container">
      <h1>Events & Activities</h1>
      {/* <p>
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p> */}
      <div className="events-grid">
        <Tile img={nikitadutta} />
        <Tile img={gauharkhan} />
        <Tile img={karishmakapoor} desktop />
        <Tile img={mikhasingh} />
        <Tile img={gauharkhanst} />
      </div>
    </div>
  );
}

export default Events;
