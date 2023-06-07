import React from "react";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const LINKS = [
  {
    items: [
      "About",
      "Service",
      "Team",
      "Privacy Policy",
      "Testimonial",
      "Support",
    ],
  },
];

const currentYear = new Date().getFullYear();

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
              className="w-60 h-auto"
              style={{
                paddingTop: "22px",
                marginLeft: "50px",
                marginRight: "62px",
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
              At INSD, Nanded we strongly believe in providing quality education
              by setting high academic standards and providing hands-on learning
              experiences to its students.
            </p>
          </div>

          <div className="grid grid-cols-1 text-center md:grid-cols-1 justify-between gap-3 md:ml-40  md:text-left">
            {LINKS.map(({ items }) => (
              <ul className="mb-6">
                <Typography
                  variant="small"
                  color="white"
                  className="mb-3 font-medium opacity-40"
                ></Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="py-1.5 font-normal transition-colors hover:text-blue-600 "
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="text-white">
            <h1>Register Now</h1>
            <p style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              {" "}
              The wide variety of entrepreneurial programs offered to students
              makes sure the current needs of the industry are met.
            </p>
            <input
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
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center border-blue-gray-50 py-4 px-5 md:flex-row md:justify-between"
        style={{
          background:
            "linear-gradient(90deg, rgba(233,68,132,1) 0%, rgba(230,143,92,1) 100%)",
        }}
      >
        <Typography
          variant="small"
          color="white"
          className="mb-4 text-center font-normal md:mb-0"
        >
          &copy; {currentYear} INSDnanded |
          <a href="https://google.com/"> Web Development By ...</a>
        </Typography>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <FontAwesomeIcon icon={faFacebook} />{" "}
            {/* Replace svg with FontAwesomeIcon */}
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <FontAwesomeIcon icon={faInstagram} />{" "}
            {/* Replace svg with FontAwesomeIcon */}
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <FontAwesomeIcon icon={faTwitter} />{" "}
            {/* Replace svg with FontAwesomeIcon */}
          </Typography>
        </div>
      </div>
    </footer>
  );
}
