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
              currentObject == currentCourse.diploma && isSubOpen
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
              currentObject == currentCourse.bachelors && isSubOpen
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
              currentObject == currentCourse.masters && isSubOpen
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

// import React, { useState } from "react";
// import "./ButtonData.css";

// function ButtonData(props) {
//   const currentCourse = props.dataobj;
//   const [currentObject, setCurrentObject] = useState({});
//   const [isSubOpen, setIsSubOpen] = useState(false);
//   const [currentSubObject, setCurrentSubObject] = useState(false);

//   //Buttons
//   const Buttons = () => {
//     const renderSubmenu = () => {
//       if (currentObject === currentCourse.diploma) {
//         return Object.keys(currentCourse.diploma).map((i) => {
//           return (
//             <button
//               onClick={() => {
//                 setCurrentSubObject(currentCourse.diploma[i]);
//               }}
//             >
//               {currentCourse.diploma[i].name}
//             </button>
//           );
//         });
//       } else if (currentObject === currentCourse.bachelors) {
//         return Object.keys(currentCourse.bachelors).map((i) => {
//           return (
//             <button
//               onClick={() => {
//                 setCurrentSubObject(currentCourse.bachelors[i]);
//               }}
//             >
//               {currentCourse.bachelors[i].name}
//             </button>
//           );
//         });
//       } else if (currentObject === currentCourse.masters) {
//         return Object.keys(currentCourse.masters).map((i) => {
//           return (
//             <button
//               onClick={() => {
//                 setCurrentSubObject(currentCourse.masters[i]);
//               }}
//             >
//               {currentCourse.masters[i].name}
//             </button>
//           );
//         });
//       }
//     };

//     return (
//       <>
//         <div className="coursebtn-container">
//           {/* Diploma Button */}
//           <button
//             className={
//               isSubOpen && currentObject === currentCourse.diploma
//                 ? "coursebtn coursebtn-active"
//                 : "coursebtn"
//             }
//             onClick={() => {
//               if (currentObject === currentCourse.diploma) {
//                 setIsSubOpen(false);
//                 setCurrentObject({});
//               } else {
//                 setIsSubOpen(true);
//                 setCurrentObject(currentCourse.diploma);
//               }
//             }}
//           >
//             <p>Diploma</p>
//           </button>

//           {/* Bachelor's Button */}
//           <button
//             className={
//               isSubOpen && currentObject === currentCourse.bachelors
//                 ? "coursebtn coursebtn-active"
//                 : "coursebtn"
//             }
//             onClick={() => {
//               if (currentObject === currentCourse.bachelors) {
//                 setIsSubOpen(false);
//                 setCurrentObject({});
//               } else {
//                 setIsSubOpen(true);
//                 setCurrentObject(currentCourse.bachelors);
//               }
//             }}
//           >
//             Bachelor's
//           </button>

//           {/* Master's Button */}
//           <button
//             className={
//               isSubOpen && currentObject === currentCourse.masters
//                 ? "coursebtn coursebtn-active"
//                 : "coursebtn"
//             }
//             onClick={() => {
//               if (currentObject === currentCourse.masters) {
//                 setIsSubOpen(false);
//                 setCurrentObject({});
//               } else {
//                 setIsSubOpen(true);
//                 setCurrentObject(currentCourse.masters);
//               }
//             }}
//           >
//             Master's
//           </button>

//           {/* Certification Button */}
//           <button
//             className="coursebtn"
//             onClick={() => {
//               window.alert(
//                 "Certification Courses will be added to the website soon!"
//               );
//             }}
//           >
//             Certification
//           </button>
//         </div>
//         {isSubOpen}
//         <div
//           className={
//             isSubOpen ? "coursesubbtn coursesubbtn-active" : "coursesubbtn"
//           }
//         >
//           {renderSubmenu()}
//         </div>
//       </>
//     );
//   };

//   //Data
//   const Data = () => {
//     const [selectedYear, setSelectedYear] = useState(0);

//     const renderTitle = () => {
//       return (
//         <div className="data-title">
//           <h1>{currentSubObject.name}</h1>
//         </div>
//       );
//     };

//     return (
//       <div className="course-data">
//         {renderTitle()}
//         {/* Year Buttons */}
//         <div className="data-yearbtn">
//           {currentSubObject ? (
//             currentSubObject.years.map((i, index) => {
//               return (
//                 <button
//                   onClick={() => {
//                     setSelectedYear(index);
//                   }}
//                 >
//                   {i.name}
//                 </button>
//               );
//             })
//           ) : (
//             <></>
//           )}
//         </div>
//         {/* Subject Table */}
//         <div className="data-container">
//           {currentSubObject ? (
//             <div className="data-grid">
//               <div>
//                 <div className="data-gridhead">
//                   {currentSubObject.years[selectedYear].sem1.name}
//                 </div>
//                 {currentSubObject.years[selectedYear].sem1.subjects.map((i) => {
//                   return <div>{i}</div>;
//                 })}
//               </div>
//               <div>
//                 <div className="data-gridhead">
//                   {currentSubObject.years[selectedYear].sem2.name}
//                 </div>
//                 {currentSubObject.years[selectedYear].sem2.subjects.map((i) => {
//                   return <div>{i}</div>;
//                 })}
//               </div>
//             </div>
//           ) : (
//             <>Select a Course</>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Buttons />
//       <Data />
//     </>
//   );
// }

// export default ButtonData;

// /* Buttons styling */
// .coursebtn-container {
//   display: grid;
//   grid-template-rows: 1fr 1fr;
//   grid-template-columns: 1fr 1fr;
//   /* align-items: center;
//   justify-content: space-between; */
//   height: fit-content;
//   width: 100%;
//   background-color: red;
//   padding: 4px;
// }

// .coursebtn {
//   background-color: yellow;
//   margin: 4px;
//   padding: 8px;
//   overflow: hidden;
//   transition: all 1s;
// }

// .coursebtn-active {
//   background-color: green;
// }

// .coursesubbtn {
//   display: none;
//   overflow: hidden;
//   transition: all 1s;
// }

// .coursesubbtn-active {
//   display: grid;
// }

// .coursesubbtn-inner {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   overflow: hidden;
// }

// .coursesubbtn-inner button {
//   background-color: greenyellow;
// }

// @media only screen and (min-width: 786px) {
//   .coursebtn-container {
//     grid-template-rows: auto;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     padding: 8px 15vw;
//   }
//   .coursebtn {
//     margin: 16px 16px;
//   }
// }

// /* Data styling */
// .course-data {
//   margin-top: 32px;
//   margin-bottom: 64px;
// }

// .data-title {
//   padding: 0px 8px;
// }

// .data-title h1 {
//   font-size: 28px;
// }

// .data-yearbtn {
//   margin: 4px 8px;
//   display: flex;
//   justify-content: space-between;
// }

// .data-container {
//   margin: 4px 8px;
// }

// .data-grid {
//   background-color: #ddd;
//   display: grid;
//   grid-template-columns: auto auto;
// }

// .data-grid div {
//   width: 49vw;
// }

// .data-grid div div {
//   padding: 4px;
//   height: 72px;
//   border: 1px solid #fff;
// }

// .data-gridhead {
//   font-weight: bold;
//   height: fit-content !important;
//   text-align: center;
// }

// @media only screen and (min-width: 786px) {
//   .course-data {
//     max-width: 70vw;
//     margin-left: auto;
//     margin-right: auto;
//   }
//   .data-yearbtn {
//     width: fit-content;
//   }
//   .data-yearbtn button {
//     padding: 8px 16px;
//     margin: 0px 8px;
//     border-radius: 16px;
//   }
//   .data-yearbtn button:hover {
//     box-shadow: 0px 0px 4px #000a;
//   }
//   .data-grid {
//     width: 60vw;
//     margin: auto;
//   }
//   .data-grid div {
//     width: 30vw;
//   }
//   .data-grid div div {
//     padding: 16px;
//   }
// }
