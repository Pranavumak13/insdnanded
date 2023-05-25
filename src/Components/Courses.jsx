import React, { useState } from "react";
import "./Courses.css";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState("none");

  const CourseButton = (props) => {
    return (
      <button
        className={selectedCourse === props.name ? "course-active" : ""}
        onClick={() => {
          selectedCourse === props.name
            ? setSelectedCourse("none")
            : setSelectedCourse(props.name);
        }}
      >
        <div className="courses-icon">?</div>
        <div className="courses-name">{props.name} Design</div>
      </button>
    );
  };

  const renderContent = () => {
    if (selectedCourse === "none") {
      return (
        <>
          <h1>Our Design Courses</h1>
          <p>
            Select from our wide range of courses. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
        </>
      );
    } else if (selectedCourse === "fashion") {
      return (
        <>
          <h1>Fashion</h1>
          <p>Fashion data.</p>
          <button>Apply now</button>
        </>
      );
    }
    if (selectedCourse === "interior") {
      return (
        <>
          <h1>Interior</h1>
          <p>Interior data.</p>
          <button>Apply now</button>
        </>
      );
    }
    if (selectedCourse === "jewellery") {
      return (
        <>
          <h1>Jewellery</h1>
          <p>Jewellery data.</p>
          <button>Apply now</button>
        </>
      );
    }
    if (selectedCourse === "textile") {
      return (
        <>
          <h1>Textile</h1>
          <p>Textile data.</p>
          <button>Apply now</button>
        </>
      );
    }
  };

  return (
    <div className="courses-container">
      <div className="courses-list">
        <CourseButton name="fashion" />
        <CourseButton name="interior" />
        <CourseButton name="jewellery" />
        <CourseButton name="textile" />
      </div>
      <div className="courses-data">{renderContent()}</div>
    </div>
  );
}

export default Courses;
