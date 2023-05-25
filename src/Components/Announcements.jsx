import React from "react";
import "./Announcements.css";

const Announcements = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(233,68,132,1) 0%, rgba(230,143,92,1) 100%)",
        width: "auto",
        height: "440px",
        display: "flex",
        color: "white",
      }}
    >
      <div style={{ flex: "1", width: "50%", padding: "25px" }}>
        <h2>
          We are #insdians by <br />
          design.
        </h2>
        <br />
        <br />
        <p style={{ paddingRight: "21%" }}>
          At INSD Nanded, we provide various design courses to let the students
          understand the different designing concepts and gain anedge over
          in-demand skills. Our global outlook further helps us to stay afloat
          in the market.
        </p>
        <br />
        <br />
        <a
          href="http://www.google.com"
          target="_blank"
          style={{
            background: "white",
            color: "black",
            padding: "14px 25px",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          Admission Open
        </a>
      </div>
      <div
        style={{
          flex: "1",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/LOGO1.png"
          alt="insd"
          style={{ height: "400px", width: "auto" }}
        />
      </div>
    </div>
  );
};

export default Announcements;
