import { useState } from "react";
import Tbox from "./Contact2";

const Regi2 = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

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

  const submitHandler = () => {
    console.log("73");
    // Forward to db
  };

  let Ddate = new Date("Jun 10, 2023 00:00:00").getTime();

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
                <form action="">
                  <div className="flex justify-center w-full">
                    <h1 className="my-2 text-lg">For Courses Info</h1>
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
                    className="border-none rounded-xl outline-none bg-gradient-to-r from-[#E94484] to-[#E68F5C] w-full py-4 text-white mt-5"
                    onClick={submitHandler}
                    value="SUBMIT"
                  />
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
