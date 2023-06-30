import React, { useState } from "react";

function ButtonData() {
  const [selectedSection, setSelectedSection] = useState("dip");

  const renderData = () => {
    if (selectedSection === "dip") {
      //dip- diploma
      return (
        <>
          <h1>Diploma</h1>
        </>
      );
    } else if (selectedSection === "bac") {
      //bac- bachelor
      return (
        <>
          <h1>Bachelor</h1>
        </>
      );
    } else if (selectedSection === "mas") {
      // mas- master
      return (
        <>
          <div className="about-content">
            <div className="about-list">
              <button
                className={
                  selectedSection === "mba"
                    ? "button-active"
                    : "button-inactive"
                }
                onClick={() => {
                  setSelectedSection("mba");
                }}
              >
                MBA
              </button>
              <button
                className={
                  selectedSection === "mdes"
                    ? "button-active"
                    : "button-inactive"
                }
                onClick={() => {
                  setSelectedSection("mdes");
                }}
              >
                M.Design
              </button>
            </div>
          </div>
        </>
      );
    } else if (selectedSection === "cer") {
      // cer- certificate
      return (
        <>
          <h1>Certificate</h1>
        </>
      );
    }
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-list">
          <button
            className={
              selectedSection === "dip" ? "button-active" : "button-inactive"
            }
            onClick={() => {
              setSelectedSection("dip");
            }}
          >
            Diploma
          </button>
          <button
            className={
              selectedSection === "bac" ? "button-active" : "button-inactive"
            }
            onClick={() => {
              setSelectedSection("bac");
            }}
          >
            Bachelor
          </button>
          <button
            className={
              selectedSection === "mas" ? "button-active" : "button-inactive"
            }
            onClick={() => {
              setSelectedSection("mas");
            }}
          >
            Masters
          </button>
          <button
            className={
              selectedSection === "cer" ? "button-active" : "button-inactive"
            }
            onClick={() => {
              setSelectedSection("cer");
            }}
          >
            Certificate
          </button>
        </div>
        <div className="about-text">{renderData()}</div>
      </div>
    </div>
  );
}

export default ButtonData;
