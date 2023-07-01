import React, { useState } from "react";
import "./ButtonData.css";

function ButtonData(props) {
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
  const Data = (props) => {
    const [selectedYear, setSelectedYear] = useState();
    const currentdata = props.dataobj;
    let yearNum = 0;

    const renderSubjects = () => {
      if (selectedYear == "Year One") {
        yearNum = 0;
      } else if (selectedYear == "Year Two") {
        yearNum = 1;
      }

      return (
        <div className="data-grid">
          <div className="data-header">
            {currentdata.diploma.diploma_adv.years[yearNum].sem1.name}
          </div>
          <div className="data-header">
            {currentdata.diploma.diploma_adv.years[yearNum].sem2.name}
          </div>
          {/* Sem 1 */}{" "}
          <div className="data-subject">
            {currentdata.diploma.diploma_adv.years[yearNum].sem1.subjects.map(
              (i) => {
                return <div>{i}</div>;
              }
            )}
          </div>
          {/* Sem 2 */}
          <div className="data-subject">
            {currentdata.diploma.diploma_adv.years[yearNum].sem2.subjects.map(
              (i) => {
                return <div>{i}</div>;
              }
            )}
          </div>
        </div>
      );
    };

    return (
      <>
        <h1>{currentdata.diploma.diploma_adv.name}</h1>
        <div className="data-buttons">
          {currentdata.diploma.diploma_adv.years.map((i) => {
            return (
              <button
                onClick={() => {
                  setSelectedYear(i.name);
                }}
              >
                {i.name}
              </button>
            );
          })}
        </div>
        <div className="data-container">{renderSubjects()}</div>
      </>
    );
  };

  return (
    <>
      <Buttons />
      <Data dataobj={props.dataobj} />
    </>
  );
}

export default ButtonData;
