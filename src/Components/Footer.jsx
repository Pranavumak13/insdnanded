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

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* remove max-width: 7xl */}
      <div className="mx-auto w-full bg-black" style={{ padding: 25 }}>
        {" "}
        <div className="grid grid-cols-1 text-center md:grid-cols-3 justify-between md:text-left">
          <div className="mb-6 flex flex-col justify-center">
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

                // Responsive styles // ?????????
                // "@media (max-width: 375px)": {
                //   width: "90%",
                //   left: "50%",
                //   transform: "translateX(-50%)",
                //   right: "40%",
                //   top: "50%",
                //   fontFamily: "Inter",
                //   fontStyle: "normal",
                //   fontSize: "10px",
                //   lineHeight: "12px",
                //   color: "red",
                // },
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
                <li className="flex text-left justify-center md:text-center md:justify-start" >
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ marginRight: "10px" }}
                  />
                  +91-8605431313, 9665070493
                </li>
                <br />
                <li className="flex text-left justify-center md:text-center md:justify-start" >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "10px" }}
                  />
                  info@insdnanded.com
                </li>
              </ul>
              <br />
              <div className="flex justify-center gap-4 text-white sm:justify-start">
                <Typography
                  as="a"
                  href="https://www.instagram.com/insdnanded/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                  target="_blank"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <FontAwesomeIcon icon={faInstagram} />{" "}
                  {/* Replace svg with FontAwesomeIcon */}
                </Typography>

                <Typography
                  as="a"
                  href="https://www.facebook.com/profile.php?id=100092238022279"
                  target="_blank"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <FontAwesomeIcon icon={faFacebook} />{" "}
                  {/* Replace svg with FontAwesomeIcon */}
                </Typography>

                <Typography
                  as="a"
                  href="https://www.yotube.com"
                  target="_blank"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <FontAwesomeIcon icon={faYoutube} />{" "}
                  {/* Replace svg with FontAwesomeIcon */}
                </Typography>

                <Typography
                  as="a"
                  href="https://www.linkedin.com/in/insd-nanded-609935276"
                  target="_blank"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <FontAwesomeIcon icon={faLinkedin} />{" "}
                  {/* Replace svg with FontAwesomeIcon */}
                </Typography>

                <Typography
                  as="a"
                  href="https://www.twitter.com"
                  target="_blank"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <FontAwesomeIcon icon={faTwitter} />{" "}
                  {/* Replace svg with FontAwesomeIcon */}
                </Typography>
              </div>
            </div>
            {/* <input
              type="email"
              placeholder="email@email.com"
              style={{
                padding: "0px 16px",
                color: "#000",
                width: "200px",
                height: "35px",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            />
            <button
              type="submit"
              value="Submit"
              style={{
                background:
                  "linear-gradient(90deg, rgba(233,68,132,1) 0%, rgba(230,143,92,1) 100%)",
                height: "36px",
                width: "80px",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              Submit
            </button> */}
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
          <a href="#"> Web Development By Team APJ</a>
        </Typography>
      </div>
    </footer>
  );
}
