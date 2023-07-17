import React from "react";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Brochure from "../assets/CourseBrochure.pdf";
import "./Footer.css";

const currentYear = new Date().getFullYear();

const FooterLink = (props) => {
  return (
    <>
      <li>
        <Typography
          as="a"
          href={props.linkto}
          color="white"
          className="py-1.5 font-normal transition-colors hover:text-blue-600 "
        >
          {props.name}
        </Typography>
      </li>
    </>
  );
};

const showTooltip = (element) => {
  var tooltip = element.querySelector(".tooltip");
  if (tooltip.style.opacity === 1) {
    tooltip.style.opacity = 0;
    tooltip.style.visibility = "hidden";
    tooltip.style.pointerEvents = "none";
  } else {
    tooltip.style.opacity = 1;
    tooltip.style.visibility = "visible";
    tooltip.style.pointerEvents = "auto";
  }
};

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* remove max-width: 7xl */}
      <div className="mx-auto w-full bg-black" style={{ padding: 25 }}>
        {" "}
        <div className="grid grid-cols-1 text-center md:grid-cols-3 justify-between md:text-left">
          <div className="mb-6 flex flex-col justify-start">
            <img
              src="/LOGO3.png"
              alt="INSD Nanded"
              className="w-60 flex self-center h-auto ml-8 mr-16 md:self-start"
              style={{
                paddingTop: "22px",
              }}
            />
            <p
              className="text-white text-xs self-center"
              style={{
                width: "90%",
                marginTop: "50px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "15px",
              }}
            >
              <h6>
                At INSD, Nanded we strongly believe in providing quality
                education by setting high academic standards and providing
                hands-on learning experiences to its students.
              </h6>
            </p>
          </div>

          <div className="grid grid-cols-1 text-center  md:grid-cols-1 justify-between gap-3 md:ml-40  md:text-left">
            <ul className="mb-6" style={{ alignItems: "center" }}>
              <FooterLink name="Home" linkto="#home" />
              <FooterLink name="About Us" linkto="#about" />
              <FooterLink name="Events" linkto="#events" />
              <FooterLink name="Awards" linkto="#awards" />
              <li>
                <Typography
                  as="a"
                  href={Brochure}
                  color="white"
                  className="py-1.5 font-normal transition-colors hover:text-blue-600 "
                >
                  Brochure
                </Typography>
              </li>
            </ul>
          </div>

          <div className="text-black" style={{ color: "#E7DBCE" }}>
            <h1 className="text-white">Contact Us</h1>
            <div
              className="text-white"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <ul>
                <li
                  className="flex text-left justify-center md:justify-start"
                  style={{
                    alignItems: "baseline",
                    gap: "10px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ fontSize: "18px" }}
                  />
                  1st Floor, Bhagwati plaza,
                  <br />
                  Beside Union Bank, Ashok Nagar,
                  <br />
                  Bhagya Nagar Road,
                  <br />
                  Nanded.
                </li>
                <br />
                <li className="flex text-left justify-center md:text-center md:justify-start">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ marginRight: "10px" }}
                  />
                  +91-8605431313, 9665070493
                </li>
                <br />
                <li className="flex text-left justify-center md:text-center md:justify-start">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "10px" }}
                  />
                  info@insdnanded.com
                </li>
              </ul>
              <br />
              <ul class="wrapper">
                <li
                  class="icon facebook"
                  onClick={(e) => showTooltip(e.currentTarget)}
                >
                  <span class="tooltip">Facebook</span>
                  <span>
                    <a href="https://www.facebook.com/profile.php?id=100092238022279">
                      <FontAwesomeIcon icon={faFacebook} />{" "}
                    </a>
                  </span>
                </li>
                <li class="icon twitter">
                  <span class="tooltip">Twitter</span>
                  <span>
                    <a href="https://www.twitter.com">
                      <FontAwesomeIcon icon={faTwitter} />{" "}
                    </a>
                  </span>
                </li>
                <li class="icon instagram">
                  <span class="tooltip">Instagram</span>
                  <span>
                    <a href="https://www.instagram.com/insdnanded/?igshid=NTc4MTIwNjQ2YQ%3D%3D">
                      <FontAwesomeIcon icon={faInstagram} />{" "}
                    </a>
                  </span>
                </li>
                <li class="icon linkedin">
                  <span class="tooltip">LinkedIn</span>
                  <span>
                    <a href="https://www.linkedin.com/in/insd-nanded-609935276">
                      <FontAwesomeIcon icon={faLinkedin} />{" "}
                    </a>
                  </span>
                </li>
                <li class="icon youtube">
                  <span class="tooltip">Youtube</span>
                  <span>
                    <a href="https://www.yotube.com">
                      <FontAwesomeIcon icon={faYoutube} />{" "}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center border-blue-gray-50 py-4 px-5 md:flex-row md:justify-between"
        style={{
          background:
            "linear-gradient(90deg, rgba(233,68,132,1) 0%, rgba(230,143,92,1) 100%)",
          alignItems: "center",
        }}
      >
        <Typography
          variant="small"
          color="white"
          className="mb-4 text-center font-normal md:mb-0"
        >
          &copy; {currentYear} INSDnanded |
          <a href="#home"> Web Development By Team APJ</a>
        </Typography>
      </div>
    </footer>
  );
}
