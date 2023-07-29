import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useRef } from "react";
import "./Form.css";
import gradientImage from "../Utilities/final.jpg";

function Form(props) {
  // const [name, setName] = useState(null);
  // const [phone, setPhone] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [choice, setChoice] = useState(null);
  // const [message, setMessage] = useState(null);

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

  // const messageHandler = (e) => {
  //   setName(e.target.value);
  // };
  // const submitHandler = () => {
  //   console.log("73");
  //   // Forward to db
  // };

  const form = useRef();
  const [disabled, setDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setDisabled(true);

    emailjs
      .sendForm(
        "service_hk6g79n",
        "template_jgj25lm",
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully");
          console.log(result.text);
          setDisabled(false);
        },
        (error) => {
          alert("Error has occurred");
          console.log(error.text);
          setDisabled(false);
        }
      );
  };
  return (
    <div className="janhvi">
      <div className='topsection'>
           <h1>{props.coursename}</h1>
      </div>
      <div className="containerform">
      <div className="leftcontainer">
        <div class="leftContainer-content">
          <h1>Career Paths after {props.coursename} Course in Nanded</h1>
        </div>
        <div className="listmain">
          <div className="list1">
            <div className="l1">
              <img
                src={gradientImage}
                alt="Gradient"
                className="gradient-image"
              />
              <p>{props.point1}</p>
            </div>
            <div className="l2">
              <img
                src={gradientImage}
                alt="Gradient"
                className="gradient-image"
              />
              <p>{props.point2}</p>
            </div>
            <div className="l3">
              <img
                src={gradientImage}
                alt="Gradient"
                className="gradient-image"
              />
              <p>{props.point3}</p>
            </div>
            <div className="l4">
              <img
                src={gradientImage}
                alt="Gradient"
                className="gradient-image"
              />
              <p>{props.point4}</p>
            </div>
            <div className="l5">
              <img
                src={gradientImage}
                alt="Gradient"
                className="gradient-image"
              />
              <p>{props.point5}</p>
            </div>
          </div>
          <div className="list2">
            <div className="l6">
              <img
                src={gradientImage}
                alt="Gradient"
                className="gradient-image"
              />
              <p>{props.point6}</p>
            </div>
            <div className="l7">
              <img
                src={gradientImage}
                alt="Gradient"
                className="gradient-image"
              />
              <p>{props.point7}</p>
            </div>
            <div className="l8">
              <img
                src={gradientImage}
                alt="Gradient"
                className="gradient-image"
              />
              <p>{props.point8}</p>
            </div>
            <div className="l9">
              <img
                src={gradientImage}
                alt="Gradient"
                className="gradient-image"
              />
              <p>{props.point9}</p>
            </div>
            <div className="l10">
              <img
                src={gradientImage}
                alt="Gradient"
                className="gradient-image"
              />
              <p>{props.point10}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Right Container ---------------- */}

      <div className="rightmost-container">
        <div className="innerRight">
          <div class="container">
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact"
              action=""
              method="post"
            >
              <h3>Reach Out to Us</h3>
              <h4>Contact us for custom quote.</h4>
              <fieldset>
                <input
                  placeholder="Your name"
                  type="text"
                  tabindex="1"
                  required
                  autofocus
                  name="user_name"
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Email Address"
                  type="email"
                  tabindex="2"
                  required
                  name="user_email"
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Phone Number"
                  type="tel"
                  tabindex="3"
                  required
                  name="user_phone"
                />
              </fieldset>
              <fieldset>
                <select
                  name="user_course"
                  id="courses"
                  placeholder="Select the course"
                  type="choice"
                  tabindex="4"
                  required
                >
                  <option disabled hidden selected>
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
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Type your message here...."
                  tabindex="5"
                  name="user_message"
                  required
                ></textarea>
              </fieldset>
              <fieldset>
                <button
                  name="submit"
                  type="submit"
                  disabled={disabled}
                  id="contact-submit"
                  className="disabled:cursor-not-allowed"
                >
                  {disabled ? "Sending..." : "Send"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Form;
