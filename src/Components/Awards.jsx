import React from "react";
import "./Awards.css";

import image1 from "../img/awards/Award - Best Design Institute in North India JPG.jpg";
import image2 from "../img/awards/Best design school award 2017 insd.jpg";
import image3 from "../img/awards/INSD receives National award.jpg";
import image4 from "../img/awards/academic leader award.jpg";

export const Awards = () => {
  return (
    <div className="awards-container">
      <h1>Awards & Recognition</h1>
      <div className="awards">
        <img src={image1} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image2} alt="" />
      </div>
    </div>
  );
};

export default Awards;
