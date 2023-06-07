import React, { useState, useEffect } from "react";
import "./Popup.css";

function Popup() {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = () => {
    console.log("73");
    // Forward to db
  };

  const [isShowPop, setIsShowPop] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowPop(true);
    }, 5000);
  }, []);

  return (
    <div className={isShowPop ? "popup popup-show" : "popup popup-hide"}>
      <div className="popup-form">
        <div
          className="popup-close"
          onClick={() => {
            setIsShowPop(false);
          }}
        >
          x
        </div>
        <form action="">
          <div className="flex justify-center w-full">
            <h1 className="my-4 text-xl">Get in touch!</h1>
          </div>
          <input
            type="text"
            className="border-solid border-b-2 border-black outline-none w-full py-2 my-2"
            onChange={nameHandler}
            placeholder="Full Name"
            required
          />
          <input
            type="tel"
            className="border-solid border-b-2 border-black outline-none w-full py-2 my-2"
            onChange={phoneHandler}
            placeholder="Phone Number"
            required
          />
          <input
            type="email"
            className="border-solid border-b-2 border-black outline-none w-full py-2 my-2"
            onChange={emailHandler}
            placeholder="Email Address"
            required
          />
          <input
            type="submit"
            className="border-none outline-none bg-gradient-to-r from-[#E94484] to-[#E68F5C] w-full p-4 text-white mt-5"
            onClick={submitHandler}
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
}

export default Popup;
