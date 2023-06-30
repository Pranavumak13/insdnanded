import React, { useState } from "react";

function ButtonData() {
  const [selectedSection, setSelectedSection] = useState("dip");
  const [selectedSubsection, setSelectedSubsection] = useState("");

  //Buttons
  const Buttons = () => {
    const renderData = () => {
      if (selectedSection === "dip") {
        //dip- diploma
        return (
          <>
            <div className="about-content">
              <div className="about-list">
                <button
                  className={
                    selectedSubsection === "diploma"
                      ? "button-active"
                      : "button-inactive"
                  }
                  onClick={() => {
                    setSelectedSubsection("diploma");
                  }}
                >
                  Diploma
                </button>
                <button
                  className={
                    selectedSubsection === "diploma_adv"
                      ? "button-active"
                      : "button-inactive"
                  }
                  onClick={() => {
                    setSelectedSubsection("diploma_adv");
                  }}
                >
                  Advanced Diploma
                </button>
                <button
                  className={
                    selectedSubsection === "diploma_ug"
                      ? "button-active"
                      : "button-inactive"
                  }
                  onClick={() => {
                    setSelectedSubsection("diploma_ug");
                  }}
                >
                  Undergrad Diploma
                </button>
                <button
                  className={
                    selectedSubsection === "diploma_pg"
                      ? "button-active"
                      : "button-inactive"
                  }
                  onClick={() => {
                    setSelectedSubsection("diploma_pg");
                  }}
                >
                  Postgrad Diploma
                </button>
              </div>
            </div>
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
  };

  //Data
  const Data = () => {
    const [selectedYear, setSelectedYear] = useState();

    return <>Data</>;
  };

  return (
    <>
      <Buttons />
      <Data />
    </>
  );
}

export default ButtonData;
