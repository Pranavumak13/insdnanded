import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonDressBurst,
  faCouch,
  faScissors,
  faGem,
  faPenToSquare,
  faPersonRunning,
  faCamera,
  faUserNinja,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import "./Courses.css";

const iconSelector = (name) => {
  switch (name) {
    case "fashion":
      return faPersonDressBurst;
    case "interior":
      return faCouch;
    case "textile":
      return faScissors;
    case "jewellery":
      return faGem;
    case "graphic":
      return faPenToSquare;
    case "animation & vfx":
      return faPersonRunning;
    case "photography":
      return faCamera;
    case "beauty & hair":
      return faUserNinja;
    default:
      return faSun;
  }
};

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState("none");

  const CourseButton = (props) => {
    return (
      <button
        className={selectedCourse === props.name ? "course-active" : ""}
        onClick={() => {
          selectedCourse === props.name
            ? setSelectedCourse("none")
            : setSelectedCourse(props.name);
        }}
      >
        <div className="courses-icon">
          <FontAwesomeIcon icon={iconSelector(props.name)} />
        </div>
        <div className="courses-name">
          {props.name === "animation & vfx" ||
          props.name === "photography" ||
          props.name === "beauty & hair"
            ? props.name
            : props.name + " Design"}
        </div>
      </button>
    );
  };

  const renderContent = () => {
    if (selectedCourse === "none") {
      return (
        <>
          <h1>Our Design Courses</h1>
          <p>Select from our wide range of courses.</p>
        </>
      );
    } else if (selectedCourse === "fashion") {
      return (
        <>
          <h1>Fashion Design</h1> <br />
          <p>
            At INSD, we help integrate the creative talents of aspiring
            designers with demands of the fashion industry offer the best output
            for luxury and affordable fashion.
            <br /> <br />
            With Fashion Designing Courses you will Learn from scratch– textile
            suitability, garment construction, pattern making and tailoring to
            giving insight to technological innovations and hands-on exposure of
            working with reputed names of the fashion industry, INSD offers the
            best approach to learning and applying principles of Fashion Design.
            Book your Admission at Best Fashion Design School in India.
          </p>
          <br />
          <a href="/courses/fashiondesign">
            <button>Apply now</button>
          </a>
        </>
      );
    } else if (selectedCourse === "interior") {
      return (
        <>
          <h1>Interior Design</h1> <br />
          <p>
            Interior design is the art and science of enhancing the interior of
            a building to achieve a healthier and more aesthetically pleasing
            environment for the people using the space.
            <br /> <br />
            The learning in Interior Designing Courses in Nanded will be
            project-based which will enable students to understand the creative
            construction of interior spaces and the correct representation of a
            concept. The approach of Interior Designing Courses in Nanded is
            more practical along with an in-depth study of the technical, design
            process and studio techniques required to integrate individual
            client preferences with their own creative capacity to bring out the
            best living spaces.
            <br />
            INSD offers the best approach to learning and applying principles of
            Interior Design. Book your Admission at Best Interior Design School
            in India.
          </p>
          <br />
          <a href="/courses/interiordesign">
            <button>Apply now</button>
          </a>
        </>
      );
    } else if (selectedCourse === "textile") {
      return (
        <>
          <h1>Textile Design</h1> <br />
          <p>
            Textile design forms the core of the whole business of fashion. the
            rapidly expanding activities in the export and domestic sectors of
            the Indian apparel and home furnishing industry demands professional
            inputs in design and development of textiles and raw material, which
            is responsible for 60-80% of the cost of the product.
            <br /> <br />
            Textile design today is that strategic value-adding activity that
            can make all the difference in transforming a fashion business into
            an economically viable and profitable proposition. The Textile
            Design Courses offered at INSD equips students with broad spectrum
            education in textiles while developing creativity, originality and
            design application in apparel and home fashion industries.
            <br /> <br /> With Textile Design Courses you will Learn to create
            extraordinary Designs on the fabrics.
          </p>
          <br />
          <a href="/courses/textiledesign">
            <button>Apply now</button>
          </a>
        </>
      );
    } else if (selectedCourse === "jewellery") {
      return (
        <>
          <h1>Jewellery Design</h1> <br />
          <p>
            The Jewellery Designing Course curriculum is designed in such a
            manner that it will cover all aspects of the field such as different
            types of stones, design themes, presentations, jewellery costing and
            jewellery making and diamond grading etc. We also teach
            Computer-aided design in terms of the jewellery field.
            <br /> <br /> Candidates get to learn the art of working with
            precious metals, alloys and the mathematics that goes into the
            manufacturing of contemporary and antique jewellery items. During
            the course of study many internship opportunities under renowned
            jewellery houses, practical workshops are conducted by jewellery
            designers and guest lecturers to give a more in-depth glimpse into
            the workings of the industry. If You want to build a career in
            Jewellery Designing, we offer you an ample number of courses to
            start with Jewellery Designing Courses at INSD Nanded.
          </p>
          <br />
          <a href="/courses/jewellerydesign">
            <button>Apply now</button>
          </a>
        </>
      );
    } else if (selectedCourse === "graphic") {
      return (
        <>
          <h1>Graphic Design</h1> <br />
          <p>
            This Graphic Design Course helps you learn the art and practice of
            planning and projecting ideas and experiences with visual and
            textual content. In other terms, with this graphic design course,
            you will be able to communicate certain ideas or messages in a
            visual way. These visuals can be as simple as a business logo, or as
            complex as page layouts on a website.
            <br /> <br />
            Graphic Design Course in Nanded is suitable for Students who love
            Creative work or Passionate about Creativity & great at the
            imagination.
            <br />
            After completing Graphic Design Course in Nanded, Graduates of this
            pathway will have the knowledge and skill to pursue professional
            careers as graphic designers, typographers, illustrators, storyboard
            artists, print and layout designers, motion graphic artists, and
            two-dimensional animators.
          </p>
          <br />
          <a href="/courses/graphicdesign">
            <button>Apply now</button>
          </a>
        </>
      );
    } else if (selectedCourse === "animation & vfx") {
      return (
        <>
          <h1>Animation & VFX</h1> <br />
          <p>
            Animation Courses Are One Of The Most Demanded Courses Today.
            International School of Design offers the Most comprehensive
            Animation Course in Nanded. Animation Is About Creating Visual
            Effects With Using Latest Technologies And More Visual Treat. India
            Is Emerging In The Field Of Animation And This Would Create A Lot Of
            Employment Opportunities In India. Companies Like Disney Are
            Outsourcing Their Animation Work From India. Its One Of The Goldmine
            Fields To Explore. This Profession Is Very Remunerative And Requires
            Determination.
            <br /> <br />
            In This Course, You Will Be Familiarized To A Variety Of Forms Of
            Animation. Through Primary Projects, You Will Be Trained About The
            Production Of Different Forms And Techniques Of Animation. We Will
            Also Be Looking At An Overview Of The Technical And Historical
            Evolution Of Animation To Help You Understand And Acknowledge The
            Art.
          </p>
          <br />
          <a href="/courses/animation_VFX_design">
            <button>Apply now</button>
          </a>
        </>
      );
    } else if (selectedCourse === "photography") {
      return (
        <>
          <h1>Photography</h1> <br />
          <p>
            This diploma course in creative photography has been designed &
            created for individuals who are planning to build their career in
            professional photography. <br></br>
            The Professional Photography Course is split into three modules and
            all sessions are assignment based. Students will be given weekly
            assignments which are mentored by a faculty. There will be
            professional and renowned photographers who will conduct some
            lectures and mentor students throughout the year. <br />
            There will be regular assessment of student work and critique will
            be provided to help improve understanding of concept, skill,
            technique and presentation. <br />
            INSD USP gives you exposure to the best professionals who would
            guide you on a regular basis by observing & mentoring your work.The
            course will follow the latest market practices in various aspects of
            photography so that students are kept updated to the present time
            and ever evolving world and requirements of the photography
            industry. <br />
            During the end of the term, students have an option to specialize in
            different genres of photography, e.g. photojournalism, commercial &
            product photography, fashion photography etc.
          </p>
          <br />
          <a href="/courses/photographydesign">
            <button>Apply now</button>
          </a>
        </>
      );
    } else if (selectedCourse === "beauty & hair") {
      return (
        <>
          <h1>Beauty & Hair</h1> <br />
          <p>
            The cosmetic industry is one of the fast-growing industry with ever
            growing demand for Best Makeup Artists. INSD Nanded conducts best
            makeup classes in Nanded. Today beauty care is a global
            multi-billion dollar industry that employs millions of people - from
            scientists and production engineers' right up to your neighborhood
            pedicurist and mehndiwalli. If you have an eye for beauty, enjoy
            interacting with people and delight in transforming a plain jane
            into a stunning sophisticate, beauty care is a field you could excel
            in. <br />
            <br />
            Although tastes and trends keep changing, the basic job of beauty
            care professionals remains the same: to help people look their best!{" "}
            <br />
          </p>
          <br />
          <a href="/courses/beautyhairdesign">
            <button>Apply now</button>
          </a>
        </>
      );
    }
  };

  return (
    <div className="courses-container">
      <div className="courses-list">
        <div className="courses-box">
          <CourseButton name="fashion" />
          <CourseButton name="graphic" />
        </div>
        <div className="courses-box lower">
          <CourseButton name="interior" />
          <CourseButton name="animation & vfx" />
        </div>
        <div className="courses-box">
          <CourseButton name="textile" />
          <CourseButton name="photography" />
        </div>
        <div className="courses-box lower">
          <CourseButton name="jewellery" />
          <CourseButton name="beauty & hair" />
        </div>
      </div>
      <div className="courses-data">{renderContent()}</div>
    </div>
  );
}

export default Courses;
