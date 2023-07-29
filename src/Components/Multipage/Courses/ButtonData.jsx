import React, { useState } from "react";
import "./ButtonData.css";
import { BorderButton, RoundedButton } from "../../Utilities/FancyButtons";

function ButtonData(props) {
  const currentCourse = props.dataobj;
  const [currentSubObject, setCurrentSubObject] = useState(
    currentCourse.diploma.diploma_basic
  );

  //Buttons
  const Buttons = () => {
    const [currentObject, setCurrentObject] = useState({});
    const [isSubOpen, setIsSubOpen] = useState(false);

    return (
      <>
        <div className="coursebtn-container">
          {/* Diploma Button */}
          <div
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
            <div
              className={isSubOpen ? "coursebtn coursebtn-active" : "coursebtn"}
            >
              <BorderButton name="Diploma" />
            </div>
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
                    <div
                      onClick={() => {
                        setCurrentSubObject(currentCourse.diploma[i]);
                      }}
                    >
                      <button>{currentCourse.diploma[i].name}</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Bachelor's Button */}
          <div
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
            <div
              className={isSubOpen ? "coursebtn coursebtn-active" : "coursebtn"}
            >
              <BorderButton name="Bachelor's" />
            </div>
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
          </div>
          {/* Master's Button */}
          <div
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
            <div
              className={isSubOpen ? "coursebtn coursebtn-active" : "coursebtn"}
            >
              <BorderButton name="Master's" />
            </div>
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
          </div>
          {/* Certification Button */}
          {/* <div>
            <button
              className={isSubOpen ? "coursebtn coursebtn-active" : "coursebtn"}
              
            >
              Certification
            </button>
          </div> */}
          <div
            onClick={() => {
              window.alert(
                "Certification Courses will be added to the website soon!"
              );
            }}
          >
            <BorderButton name="Certification" />
          </div>
        </div>
      </>
    );
  };

  //Data
  const Data = () => {
    const [selectedYear, setSelectedYear] = useState(0);
    let listOne = [];
    let listTwo = [];

    const renderTitle = () => {
      return (
        <div className="data-title">
          <h1>{currentSubObject.name}</h1>
        </div>
      );
    };

    const renderTableList = () => {
      for (
        var i = 0;
        i <
        Math.max(
          currentSubObject.years[selectedYear].sem1.subjects.length,
          currentSubObject.years[selectedYear].sem2.subjects.length
        );
        i++
      ) {
        listOne.push(currentSubObject.years[selectedYear].sem1.subjects[i]);
        listTwo.push(currentSubObject.years[selectedYear].sem2.subjects[i]);
      }
    };
    renderTableList();

    return (
      <div className="course-data">
        {renderTitle()}
        {/* Year Buttons */}
        <div className="data-yearbtn">
          {currentSubObject ? (
            currentSubObject.years.map((i, index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedYear(index);
                  }}
                >
                  <RoundedButton name={i.name} />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
        {/* Subject Table */}
        <div className="data-container">
          {currentSubObject ? (
            <div className="data-grid" style={{ border: "solid 1.5px #000" }}>
              <div>
                <div
                  className="data-gridhead"
                  style={{
                    borderRight: "dotted 1px #000",
                    borderBottom: "dotted 1px #000",
                  }}
                >
                  {currentSubObject.years[selectedYear].sem1.name}
                </div>
                {listOne.map((i) => {
                  return (
                    <div style={{ borderRight: "dotted 1px #000" }}>{i}</div>
                  );
                })}
              </div>
              <div>
                <div
                  className="data-gridhead"
                  style={{ borderBottom: "dotted 1px #000" }}
                >
                  {currentSubObject.years[selectedYear].sem2.name}
                </div>
                {listTwo.map((i) => {
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
