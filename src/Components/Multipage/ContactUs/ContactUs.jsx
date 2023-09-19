import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import "./ContactUs.css";
export default function ContactUs() {
  const form = useRef();
  const [disabled, setDisabled] = useState(false);

  // code for starting the new page from top.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
    <div>
      {/* Container Div  */}
      <div className="ContactUs-container">
        {/* First Container */}

        <div className="CU-first-container">
          <h1>Contact Us</h1>
          <p>Get in touch and let us know how we can help.</p>
        </div>

        {/* Second Container */}

        <div className="CU-second-container">
          <div className="contact-details">
            <div className="contact-card card-1">
              <FontAwesomeIcon className="card-icons" icon={faPaperPlane} />
              <a href="mailto:info@insdnanded.com">Email Us</a>
              <p>Our team here in Nanded will get back to you in no time.</p>
            </div>
            <div className="contact-card card-2">
              <FontAwesomeIcon className="card-icons" icon={faLocationDot} />
              <>
                <a
                  href="https://goo.gl/maps/ViPvVwacVrZLgaAc6"
                  style={{ marginTop: 24 }}
                >
                  College Location
                </a>
              </>
              <p>
                1st Floor, Bhagwati plaza, Beside Union Bank, Ashok Nagar,
                Bhagya Nagar Road, Nanded.
              </p>
            </div>
            <div className="contact-card card-3">
              <FontAwesomeIcon className="card-icons" icon={faPhoneVolume} />
              <>
                <a href="tel:+91 9665070493">Call Us</a>
              </>
              <p>
                Just Dial: 8605431313, <br /> 9665070493
              </p>
            </div>
          </div>
        </div>

        {/* Third Container */}

        <div className="CU-third-container">
          <div class="CU-container CU-Form-container">
            <div class="flex flex-wrap mx-4 contact-wrap">
              <div class="w-full">
                <div class="form h-full ">
                  <h3 class="form-title">Get Started</h3>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    class="mb-5"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                  >
                    <div class="flex flex-wrap -mx-4">
                      <div class="w-full md:w-1/2 px-4 mb-3">
                        <label for="" class="col-form-label">
                          Name *
                        </label>
                        <br />
                        <input
                          type="text"
                          class="form-control"
                          name="user_name"
                          id="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-4 mb-3">
                        <label for="" class="col-form-label">
                          Email *
                        </label>
                        <br />
                        <input
                          type="email"
                          class="form-control"
                          name="user_email"
                          id="email"
                          placeholder="Your Email Address"
                          required
                        />
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-4">
                      <div class="w-full md:w-1/2 px-4 mb-3">
                        <label for="" class="col-form-label">
                          Phone No.*
                        </label>
                        <br />
                        <input
                          type="tel"
                          class="form-control"
                          name="user_phone"
                          id="phone"
                          placeholder="Your Phone Number"
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-4 mb-3">
                        <label for="" class="col-form-label">
                          Course*
                        </label>
                        <br />
                        <select
                          name="user_course"
                          id="courses"
                          class="custom-select "
                          placeholder="Select the course"
                          type="choice"
                          tabindex="4"
                          required
                        >
                          <option disabled hidden selected>
                            Select a course
                          </option>
                          <option value="Fashion Design">
                            Fashion Designing
                          </option>
                          <option value="Interior Desgin">
                            Interior Designing
                          </option>
                          <option value="Textile Design">
                            Textile Designing
                          </option>
                          <option value="Jewellery Design">
                            Jewellery Designing
                          </option>
                          <option value="Graphic Design">
                            Graphic Designing
                          </option>
                          <option value="Animation & VFX">
                            Animation & VFX
                          </option>
                          <option value="Photography">Photography</option>
                          <option value="Beauty & Hair">Beauty & Hair</option>
                        </select>
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-4">
                      <div class="w-full md:w-1/1 px-4 mb-3">
                        <label for="message" class="col-form-label">
                          Message *
                        </label>
                        <br />
                        <textarea
                          class="form-control form-control-msg"
                          name="user_message"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Write your message here...."
                        ></textarea>
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-4">
                      <div class="w-full px-4 button-div">
                        <button
                          name="submit"
                          type="submit"
                          disabled={disabled}
                          id="contact-submit"
                          className="disabled:cursor-not-allowed CU-button"
                        >
                          {disabled ? "Sending..." : "Send"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Container */}

        <div className="CU-fourth-container">
          <div className="Frame-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.371227948955!2d77.30374337439137!3d19.17898158204695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7e6f75c912b%3A0x945165791cd2a943!2sInternational%20School%20of%20Design%20(INSD)%20Nanded!5e0!3m2!1sen!2sin!4v1690200397207!5m2!1sen!2sin"
              width="960"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
