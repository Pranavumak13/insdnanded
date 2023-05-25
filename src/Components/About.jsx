import React, { useState } from "react";
import "./About.css";

function About() {
  const [selectedSection, setSelectedSection] = useState("wwd");

  const renderData = () => {
    if (selectedSection === "wwd") {
      return (
        <>
          <h1>What we do</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheet...
          </p>
        </>
      );
    } else if (selectedSection === "om") {
      return (
        <>
          <h1>Our Mission</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </>
      );
    } else if (selectedSection === "og") {
      return (
        <>
          <h1>Our Goal</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33...
          </p>
        </>
      );
    }
  };

  return (
    <div className="about-container">
      <div className="about-img">a</div>
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
            What we do
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
            Our Goal
          </button>
        </div>
        <div className="about-text">{renderData()}</div>
      </div>
    </div>
  );
}

export default About;
