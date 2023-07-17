import React, { useState } from "react";
import "./ButtonData.css";

function ButtonData(props) {
  const currentCourse = props.dataobj;
  const [currentSubObject, setCurrentSubObject] = useState(false);
  //Buttons
  const Buttons = () => {
    const [currentObject, setCurrentObject] = useState({});
    const [isSubOpen, setIsSubOpen] = useState(false);

    return (
      <>
        <div className="coursebtn-container">
          {/* Diploma Button */}
          <button
            className={isSubOpen ? "coursebtn coursebtn-active" : "coursebtn"}
            onClick={() => {
              if (currentObject === currentCourse.diploma) {
                setIsSubOpen(false);
                setCurrentObject({});
              } else {
                setIsSubOpen(true);
                setCurrentObject(currentCourse.diploma);
              }
            }}
          >
            <p>Diploma</p>
          </button>
          <div
            className={
              currentObject === currentCourse.diploma && isSubOpen
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
              if (currentObject === currentCourse.bachelors) {
                setIsSubOpen(false);
                setCurrentObject({});
              } else {
                setIsSubOpen(true);
                setCurrentObject(currentCourse.bachelors);
              }
            }}
          >
            Bachelor's
          </button>
          <div
            className={
              currentObject === currentCourse.bachelors && isSubOpen
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
              if (currentObject === currentCourse.masters) {
                setIsSubOpen(false);
                setCurrentObject({});
              } else {
                setIsSubOpen(true);
                setCurrentObject(currentCourse.masters);
              }
            }}
          >
            Master's
          </button>
          <div
            className={
              currentObject === currentCourse.masters && isSubOpen
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

    const renderTitle = () => {
      return (
        <div className="data-title">
          <h1>{currentSubObject.name}</h1>
        </div>
      );
    };

    return (
      <div className="course-data">
        {renderTitle()}
        {/* Year Buttons */}
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
        {/* Subject Table */}
        <div className="data-container">
          {currentSubObject ? (
            <div className="data-grid">
              <div>
                <div className="data-gridhead">
                  {currentSubObject.years[selectedYear].sem1.name}
                </div>
                {currentSubObject.years[selectedYear].sem1.subjects.map((i) => {
                  return <div>{i}</div>;
                })}
              </div>
              <div>
                <div className="data-gridhead">
                  {currentSubObject.years[selectedYear].sem2.name}
                </div>
                {currentSubObject.years[selectedYear].sem2.subjects.map((i) => {
                  return <div>{i}</div>;
                })}
              </div>
            </div>
          ) : (
            <>Select a Course</>
          )}
        </div>
      </div>
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
