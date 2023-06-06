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
      <div
        style={{
          flex: "0.5", //Set flex to 0.5 (50% of page) and remove width
          //width: "50%",
          padding: "25px",
        }}
      >
        <h4 style={{color:"#4B4655"}}>We are</h4>
        <h1 style={{fontWeight:"bold", color:"#4B4655", fontSize:"50px"}}>#insdians</h1>
        <h4 style={{color:"#4B4655"}}>by design</h4> <br/>
        <p style={{ paddingRight: "21%", color:"#E7DBCE", fontWeight:"bold"}}>
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
          flex: "0.5", //Set flex to 0.5 and remove width
          // width: "100%",
          display: "flex", //Make div flexbox to align contents
          justifyContent: "center", //Align image to end of div
          alignItems: "center"
        }}
      >
        <img
          src="/Announce.jpg"
          alt="insd"
          style={{ height: "440px", width: "400px",}}
        />
      </div>
    </div>
  );
};

export default Announcements;
