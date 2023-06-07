import React, { useState } from "react";
import "./About.css";
import TestImg from "../img/about-img.jpeg";

function About() {
  const [selectedSection, setSelectedSection] = useState("wwd");

  const renderData = () => {
    if (selectedSection === "wwd") {
      return (
        <>
          {/* <h1>About Us</h1> <br /> */}
          <br />
          <h4 style={{ fontWeight: "bold" }}>
            Learn from Leaders – One of the Best Designing Institute in Nanded
          </h4>
          <br />
          <p>
            INSD Nanded lives true to the fundamental meaning and purpose of
            design; nurtures aspiring designers, brings their ideas to life,
            gives wings to their aspirations and turns their dreams to reality.
          </p>
        </>
      );
    } else if (selectedSection === "om") {
      return (
        <>
          {/* <h1>Our Mission</h1> */}
          <br />
          <ul>
            <li>
              <b>To place designers in major categories</b> which benchmark the
              standards of design education and practice, and encourage them to
              think <b>‘global and act local’</b> supporting the local
              craftsmanship and sources of India.
            </li>
            <br />
            <li>
              <b>To make quality and value-based learning</b> in the design
              industry of utmost importance
            </li>
          </ul>
        </>
      );
    } else if (selectedSection === "og") {
      return (
        <>
          {/* <h1>Uniqueness</h1> */}
          <br />
          <p>
            U.G.C Recognised Degree and Diploma Courses, Curriculum created by
            Industry Experts, International student exchange programme, Well
            equipped infrastructure, Well qualified trainers, Internship with
            Industry, Live project Training, Flexible timings, Personal
            counselling, Placement Assistance, Flexible payment system, WI-FI
            enabled campus
          </p>
        </>
      );
    }
  };

  return (
    <div className="about-container">
      <div className="about-img">
        <img src={TestImg} />
      </div>
      <div className="about-content">
        <div className="about-list">
          <button
            className={
              selectedSection === "wwd" ? "button-active" : "button-inactive"
            }
            onClick={() => {
              setSelectedSection("wwd");
            }}
          >
            About Us
          </button>
          <button
            className={
              selectedSection === "om" ? "button-active" : "button-inactive"
            }
            onClick={() => {
              setSelectedSection("om");
            }}
          >
            Our Mission
          </button>
          <button
            className={
              selectedSection === "og" ? "button-active" : "button-inactive"
            }
            onClick={() => {
              setSelectedSection("og");
            }}
          >
            Uniqueness
          </button>
        </div>
        <div className="about-text">{renderData()}</div>
      </div>
    </div>
  );
}

export default About;
