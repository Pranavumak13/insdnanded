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
    <div className="containerform">
      <div className="leftcontainer">
        <h1>Career Paths after {props.coursename} Course in Nanded</h1>
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
      <div className="rightmost">
        <div className="rightcontainer">
          <h1>FASHION DESIGNING</h1>
          {/* <p>The Fashion Designing Courses in Coimbatore at INSD has a curriculum which is unique and which equips a student with all the knowledge & skills needed to sustain in today’s fashion designing industry.</p> */}
          <div className="innerRight">
            <form ref={form} onSubmit={sendEmail}>
              <br />
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    className="label"
                    id="label3"
                    for="full-name"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Full name
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name1="full-name"
                      id="full-name3"
                      autocomplete="given-name"
                      class="block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      // onChange={nameHandler}
                      placeholder="Full Name"
                      name="user_name"
                      required
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    className="label"
                    id="label3"
                    for="email"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name="user_email"
                      id="email3"
                      autocomplete="email"
                      class="block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      // onChange={emailHandler}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    className="label"
                    id="label3"
                    for="phone-number"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="tel"
                      name="user_phone"
                      id="phone-number3"
                      autocomplete="tel"
                      class="block rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      // onChange={phoneHandler}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="label"
                    id="label3"
                    for="full-name"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Select a course
                  </label>
                  <div class="mt-2.5">
                    <select
                      name="user_course"
                      id="courses3"
                      class="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      // onChange={choiceHandler}
                      // value={choice}
                      required
                    >
                      <option value="" disabled hidden>
                        Select a course
                      </option>
                      <option value="Fashion Design">Fashion Designing</option>
                      <option value="Interior Desgin">
                        Interior Designing
                      </option>
                      <option value="Textile Design">Textile Designing</option>
                      <option value="Jewellery Design">
                        Jewellery Designing
                      </option>
                      <option value="Graphic Design">Graphic Designing</option>
                      <option value="Animation & VFX">Animation & VFX</option>
                      <option value="Photography">Photography</option>
                      <option value="Beauty & Hair">Beauty & Hair</option>
                    </select>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    className="label"
                    id="label3"
                    for="message"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div class="mt-2.5">
                    <textarea
                      name="user_message"
                      id="message3"
                      rows="4"
                      class="block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      // onChange={messageHandler}
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <button
                  id="button3"
                  type="submit"
                  disabled={disabled}
                  className="border-none outline-none bg-gradient-to-r from-[#E94484] to-[#E68F5C] w-full py-4 text-white mt-5"
                >
                  {disabled ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
