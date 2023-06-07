import React, { useState } from "react";
import "./Navbar.css";
import Button from "./Button";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "COURSES", link: "#courses" },
    { name: "CONTACT", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div
      className="shadow-md w-full fixed top-0 left-0 z-40" //Add z-index 50 to prevent images from appearing above navbar
    >
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="text-sm cursor-pointer flex items-center font-[serif] text-gray-800">
          <span className="text-3xl text-black-600 mr-1 pt-2">
            <img src="/insdlogo.jpg" alt="logo" className="h-14 justify" />
          </span>
          {/* Designer */}
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer z-50 md:hidden" //Add z-index 50 to prevent navbar from appearing above button
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center bg-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-black md:my-0 my-7">
              <a
                href={Link.link}
                className="text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-red-400"
              >
                {Link.name}
                {/* <span className='text-black font-[serif] text-xs text-transparent bg-clip-text hover:bg-gradient-to-r from-pink-500 via-orange-400 to-red-400'>
                    </span> */}
              </a>
            </li>
          ))}
          <Button>
            CALL: <a href="tel:9503058390">9503058390</a>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
