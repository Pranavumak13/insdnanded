import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Tbox from "./Contact2";
import "./Contact.css";

const Regi2 = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [choice, setChoice] = useState(null);

  const [tday, setTday] = useState(null);
  const [thour, setThour] = useState(null);
  const [tmin, setTmin] = useState(null);
  const [tsec, setTsec] = useState(null);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const choiceHandler = (e) => {
    setChoice(e.target.value);
  };

  // const submitHandler = () => {
  //   console.log("73");
  //   // Forward to db
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hk6g79n",
        "template_2skh8fm",
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully");
          console.log(result.text);
        },
        (error) => {
          alert("Error while sending the message");
          console.log(error.text);
        }
      );
  };

  let Ddate = new Date("July 08, 2023 00:00:00").getTime();

  const setTime = () => {
    let getDate = new Date();
    let now = Ddate - getDate;
    let TDay = Math.floor(now / (1000 * 60 * 60 * 24));
    let THour = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let TMin = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    let TSec = Math.floor((now % (1000 * 60)) / 1000);
    setTday(TDay);
    setThour(THour);
    setTmin(TMin);
    setTsec(TSec);
  };

  setInterval(setTime, 1000);

  return (
    <>
      <div className="h-max bg-gradient-to-r from-[#E94484] to-[#E68F5C] text-white py-10">
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-28">
          <div className="block">
            <div className="">
              <h1 className="text-5xl font-bold mx-5 pt-10">Register Now</h1>
              <h1 className="text-[.9rem] mx-5 pt-4 ">
                Explore a wide range of courses with INSD Nanded.
              </h1>
            </div>
            <div className="flex justify-center px-5 gap-4 mt-5">
              <Tbox num={tday} unit="Days" />
              <Tbox num={thour} unit="Hours" />
              <Tbox num={tmin} unit="Mins" />
              <Tbox num={tsec} unit="Sec" />
            </div>
          </div>
          <div className="w-full md:w-max text-black">
            <div className="h-max max-w-sm mx-auto bg-white rounded-2xl flex items-center justify-center p-10 md:mr-5 shadow-md">
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="flex justify-center w-full">
                    <h1 className="my-2 text-lg">For Courses Info</h1>
                  </div>
                  <input
                    type="text"
                    className="border-solid border-b-2 border-black outline-none w-full py-2 my-2"
                    onChange={nameHandler}
                    placeholder="Full Name"
                    name="user_name"
                    required
                  />
                  <input
                    type="tel"
                    name="user_phone"
                    className="border-solid border-b-2 border-black outline-none w-full py-2 my-2"
                    onChange={phoneHandler}
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    className="border-solid border-b-2 border-black outline-none w-full py-2 my-2"
                    onChange={emailHandler}
                    placeholder="Email Address"
                    required
                  />
                  <select
                    name="user_course"
                    id="courses"
                    className="border-solid border-b-2 border-black outline-none bg-transparent w-full py-2 my-2"
                    onChange={choiceHandler}
                    value={choice}
                    required
                  >
                    <option value="" disabled hidden>
                      Select a course
                    </option>
                    <option value="Fashion Design">Fashion Designing</option>
                    <option value="Interior Desgin">Interior Designing</option>
                    <option value="Textile Design">Textile Designing</option>
                    <option value="Jewellery Design">
                      Jewellery Designing
                    </option>
                    <option value="Graphic Design">Graphic Designing</option>
                    <option value="Animation & VFC">Animation & VFX</option>
                    <option value="Photography">Photography</option>
                    <option value="Beauty & Hair">Beauty & Hair</option>
                  </select>

                  <button
                    type="submit"
                    className="border-none rounded-xl outline-none bg-gradient-to-r from-[#E94484] to-[#E68F5C] w-full py-4 text-white mt-5"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Regi2;
