import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "./Popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import EventPoster from "../img/event-poster.jpeg";

function Popup() {
  // const [name, setName] = useState(null);
  // const [phone, setPhone] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [choice, setChoice] = useState(null);

  // const nameHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const phoneHandler = (e) => {
  //   setPhone(e.target.value);
  // };

  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  // };

  // const choiceHandler = (e) => {
  //   setChoice(e.target.value);
  // };

  // const submitHandler = () => {
  //   console.log("73");
  //   // Forward to db
  // };

  const form = useRef();
  const [disabled, setDisabled] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setDisabled(true);

  //   emailjs
  //     .sendForm(
  //       "service_hk6g79n",
  //       "template_2skh8fm",
  //       form.current,
  //       process.env.REACT_APP_PUBLIC_KEY
  //     )
  //     .then(
  //       (result) => {
  //         alert("Message sent successfully");
  //         console.log(result.text);
  //         setDisabled(false);
  //       },
  //       (error) => {
  //         alert("Error has occurred");
  //         console.log(error.text);
  //         setDisabled(false);
  //       }
  //     );
  // };

  const [isShowPop, setIsShowPop] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowPop(true);
    }, 5000);
  }, []);

  return (
    <div className={isShowPop ? "popup popup-show" : "popup popup-hide"}>
      <img src={EventPoster} alt="eventposter" />
      <div
        className="popup-close"
        onClick={() => {
          setIsShowPop(false);
        }}
      >
        <FontAwesomeIcon icon={faClose} />
      </div>
      {/* <div className="popup-form">
        <div
          className="popup-close"
          onClick={() => {
            setIsShowPop(false);
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex justify-center w-full">
            <h1 className="my-2 text-lg">For Courses Info</h1>
          </div>
          <input
            type="text"
            className="border-solid border-b-2 border-black outline-none w-full py-2 my-2"
            // onChange={nameHandler}
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input
            type="tel"
            name="user_phone"
            className="border-solid border-b-2 border-black outline-none w-full py-2 my-2"
            // onChange={phoneHandler}
            placeholder="Phone Number"
            required
          />
          <input
            type="email"
            name="user_email"
            className="border-solid border-b-2 border-black outline-none w-full py-2 my-2"
            // onChange={emailHandler}
            placeholder="Email Address"
            required
          />
          <select
            name="user_course"
            id="courses"
            className="border-solid border-b-2 border-black outline-none bg-transparent w-full py-2 my-2"
            // onChange={choiceHandler}
            // value={choice}
            required
          >
            <option value="" disabled hidden selected>
              Select a course
            </option>
            <option value="Fashion Design">Fashion Designing</option>
            <option value="Interior Desgin">Interior Designing</option>
            <option value="Textile Design">Textile Designing</option>
            <option value="Jewellery Design">Jewellery Designing</option>
            <option value="Graphic Design">Graphic Designing</option>
            <option value="Animation & VFX">Animation & VFX</option>
            <option value="Photography">Photography</option>
            <option value="Beauty & Hair">Beauty & Hair</option>
          </select>

          <button
            type="submit"
            disabled={disabled}
            className="disabled:cursor-not-allowed border-none rounded-xl outline-none bg-gradient-to-r from-[#E94484] to-[#E68F5C] w-full py-4 text-white mt-5"
          >
            {disabled ? "Sending..." : "Send"}
          </button>
        </form>
      </div> */}
    </div>
  );
}

export default Popup;
