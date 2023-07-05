import React, { useState } from "react";
import "./ButtonData.css";

function ButtonData(props) {
  const currentCourse = props.dataobj;
  const [currentSubObject, setCurrentSubObject] = useState(false);

  //Buttons
  const Buttons = () => {
    const [isSubOpen, setIsSubOpen] = useState(false);
    const [currentObject, setCurrentObject] = useState({});

    const SubButton = (props) => {
      return <></>;
    };

    return (
      <>
        <div className="coursebtn-container">
          {/* Diploma Button */}
          <button
            className={isSubOpen ? "coursebtn coursebtn-active" : "coursebtn"}
            onClick={() => {
              setCurrentObject(currentCourse.diploma);
              setIsSubOpen(true);
            }}
          >
            Diploma
          </button>
          <div
            className={
              currentObject == currentCourse.diploma
                ? "coursesubbtn coursesubbtn-active"
                : "coursesubbtn"
            }
          >
            <div className="coursesubbtn-inner">
              {Object.keys(currentCourse.diploma).map((i) => {
                return (
                  <button
                    onClick={() => {
                      setCurrentSubObject(currentCourse.diploma[i]);
                    }}
                  >
                    {currentCourse.diploma[i].name}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Bachelor's Button */}
          <button
            className={isSubOpen ? "coursebtn coursebtn-active" : "coursebtn"}
            onClick={() => {
              setCurrentObject(currentCourse.bachelors);
              setIsSubOpen(true);
            }}
          >
            Bachelor's
          </button>
          <div
            className={
              currentObject == currentCourse.bachelors
                ? "coursesubbtn coursesubbtn-active"
                : "coursesubbtn"
            }
          >
            <div className="coursesubbtn-inner">
              {Object.keys(currentCourse.bachelors).map((i) => {
                return (
                  <button
                    onClick={() => {
                      setCurrentSubObject(currentCourse.bachelors[i]);
                    }}
                  >
                    {currentCourse.bachelors[i].name}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Master's Button */}
          <button
            className={isSubOpen ? "coursebtn coursebtn-active" : "coursebtn"}
            onClick={() => {
              setCurrentObject(currentCourse.masters);
              setIsSubOpen(true);
            }}
          >
            Master's
          </button>
          <div
            className={
              currentObject == currentCourse.masters
                ? "coursesubbtn coursesubbtn-active"
                : "coursesubbtn"
            }
          >
            <div className="coursesubbtn-inner">
              {Object.keys(currentCourse.masters).map((i) => {
                return (
                  <button
                    onClick={() => {
                      setCurrentSubObject(currentCourse.masters[i]);
                    }}
                  >
                    {currentCourse.masters[i].name}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Certification Button */}
          <button
            className={isSubOpen ? "coursebtn coursebtn-active" : "coursebtn"}
            onClick={() => {
              window.alert(
                "Certification Courses will be added to the website soon!"
              );
            }}
          >
            Certification
          </button>
        </div>
      </>
    );
  };

  //Data
  const Data = () => {
    const [selectedYear, setSelectedYear] = useState(0);

    return (
      <>
        <div className="data-yearbtn">
          {currentSubObject ? (
            currentSubObject.years.map((i, index) => {
              return (
                <button
                  onClick={() => {
                    setSelectedYear(index);
                  }}
                >
                  {i.name}
                </button>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className="data-container">
          {currentSubObject ? (
            <div className="data-grid">
              <div>
                {currentSubObject.years[selectedYear].sem1.subjects.map((i) => {
                  return <div>{i}</div>;
                })}
              </div>
              <div>
                {currentSubObject.years[selectedYear].sem2.subjects.map((i) => {
                  return <div>{i}</div>;
                })}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <Buttons />
      <Data />
    </>
  );
}

export default ButtonData;
