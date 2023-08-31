import React from "react";
import "./TechCollab.css";

const TechCollab = () => {
  return (
    <>
      {/* First Container */}
      <div className="TC-container">
        <div className="TC-First-Container">
          <h1>Technical Collaboration</h1>
        </div>

        {/* Second Container */}
        <div className="TC-width-container">
          <div className="TC-second-container">
            <h2>Academic Programmes in Technical Collaboration with...</h2>
            <img src="/TC_image.png" alt="Collaborator's Logo" />
          </div>

          {/* Third Container */}

          <div className="TC-third-container">
            <h2>About HGU</h2>
            <p>
              HGU is an autonomous body promulgated by the Government of
              Uttrakhand through UK Act No. 33 of 2016 passed by Uttrakhand
              Assembly, Himalayan Garhwal University was notified by the
              Uttrakhand State Government vide Notification No. XXXVI
              (3)/2016/48(1)/2016, Under Section 2(f) of the University Grants
              Commission, UGC Act 1956.
            </p>
            <h2>About Sikkim Professional University</h2>
            <p>
              We now offer Bachelor, Master’s Degree programmes. The Sikkim
              Professional University is a reputed UGC-recognized university
              established since last more than one decade. Duly recognized by
              the University Grants Commission (UGC), Sikkim Professional
              University is a centre of quality higher learning aiming to
              produce highly capable graduates who, given an opportunity, can
              compete in today’s corporate world.
            </p>
            <h2>About INSD</h2>
            <p>
              INSD has set up under the aegis of a panel consisting of prominent
              educationist and industry leaders. Awarded as the Best Design
              Institute, it has emerged as one of the leading design education
              institute in India, with many flagship education centres all
              across India in the field of Fashion Design, Jewellery Design,
              Interior Design, Animation & VFX Design, Textile Design, Graphic
              Design, Photography Course and other Management programmes, for
              developing professionals to train & take up leadership positions
              in related industries in the emerging global scenario. The
              Institute is a pioneer in evolving design education in our
              country, INSD focuses on bridging the gap between Academics and
              Industry. The ideology behind our education system is to
              contribute significantly to the development of the Indian Design
              Industry, by tapping hidden talent, passion, dedication,
              innovation, and tremendous potential that Youth of today has.INSD
              had a rewarding journey so far. The brand collaborated with The
              India Runway Week as their educational partners in September 2015
              which set new milestones for budding designers and emerge as
              technically competent professionals in this era.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechCollab;
