import React from "react";
import "./FancyButtons.css";

export function BorderButton(props) {
  return (
    <div className="borderbutton">
      <div className="bb-curve bb-left"></div>
      <div className="bb-curve bb-right"></div>
      <div className="bb-text">{props.name}</div>
    </div>
  );
}

export function SmallBorderButton(props) {
  return (
    <div
      style={{ width: "200px", height: "50px" }}
      className="borderbutton bb-small"
    >
      <div className="bb-curve bb-curve-small bb-left"></div>
      <div className="bb-curve bb-curve-small bb-right"></div>
      <div
        style={{ width: "200px", fontSize: "18px" }}
        className="bb-text bb-text-small"
      >
        {props.name}
      </div>
    </div>
  );
}

export function RoundedButton(props) {
  return <button class="roundedbutton">{props.name}</button>;
}
