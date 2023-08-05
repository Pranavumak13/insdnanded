import React from "react";
import "./Placement.css";
const Placement = () => {
  return (
    <div className="pcontainer">
      <div className="placement-topsection">
        <h1>Placements</h1>
      </div>
      <div className="placement-middlesection">
        <div className="placementcell">
          <div className="para">
            <h2>Placement Cell</h2>
            <p>
              Every academic year will see a placement fair accompanying major
              recruiters including Vogue Interior, Fine Edge ,Orient Craft ,P.C
              Chandra Jewellers , Marks & Spencer to name a few. Prior to the
              placement fair we provide workshops on Resume building, cover
              letter writing, cracking aptitude test along with their regular
              curriculum of theory and practicals which give the students a
              hands-on experience in understanding the dynamics of the industry.
              Conducting mock interviews, encouraging students to build good
              connections in the industry, helping students to understand the
              job profile and the growth prospects of any job opportunity is a
              vital part of the placement cell. Not only in-house faculties but
              also live interaction with industry experts, professional trainers
              contribute to grooming and shaping the students in order to face
              the competitive industrial world.
            </p>
          </div>
          <div className="pararight">
            <img src="/placement.jpeg" alt="placement information" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="middlesection">
          <div className="middle1">
            <h2>Personal Grooming & Soft-Skill Training</h2>
            <p>
              First impressions leave an everlasting imprint on someone’s mind.
              Body language, Code of Conduct, Physical appearance, Dressing
              Styles, Communication techniques, Public speaking, and General
              etiquette are key workshops organized by INSD to ensure holistic
              growth & development of students which not only prepare them for
              interviews but also improve their overall confidence and
              self-esteem.
            </p>
          </div>
          <div className="middle2">
            {" "}
            <h2>Career Development Cell</h2>{" "}
            <p>
              Making a career choice can be a daunting task for most young
              aspirants, especially with multiple options today. At INSD, we
              ensure that the chosen career path is most suited for the student
              and aligns with his/her interests and abilities. Special emphasis
              is laid on preparing students to work towards self-growth to meet
              the increasing demands of the industry in the most comprehensive
              yet competitive manner. Personalised Counselling and guidance,
              building IQ (Intelligence Quotient) and EQ (Emotional Quotient) to
              survive and sustain in stressful situations, and keeping the
              work-life balance to enjoy their chosen career paths is the
              cornerstone of all our endeavours for a student.
            </p>
          </div>
          <div className="middle3">
            {" "}
            <h2>Entrepreneurship Development Cell</h2>{" "}
            <p>
              An essential component to growth today is making start-ups
              realistic, feasible and sustainable. The Entrepreneurship
              Development Cell will provide workshops, activities, and
              interactive sessions to work out set-ups, raise finances,
              accounting and inculcate managerial and people skills required to
              run a successful business. The design industry is such that every
              individual has his/her own creative way of working, making it
              imperative to have their own business model that they can set up
              and run by themselves to achieve their goals and live their
              dreams.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
