// eslint
import "./App.css";
// HOMEPAGE IMPORTS
import Navbar from "./Components/Navbar";
import Popup from "./Components/Popup";
import Announcements from "./Components/Announcements";
import About from "./Components/About";
import Courses from "./Components/Courses";
import Events from "./Components/Events";
import Awards from "./Components/Awards";
import Recruiters from "./Components/Recruiters";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Form from "./Components/Multipage/Utilities/Form";
import { Analytics } from "@vercel/analytics/react";

// About Us Page
import TechCollab from "./Components/Multipage/DiscoverUs/TechCollab";
import AboutUs from "./Components/Multipage/DiscoverUs/AboutUs";
import AboutCampus from "./Components/Multipage/DiscoverUs/AboutCampus";

// Placement Page
import Placement from "./Components/Multipage/Placements/Placement";
//Contact Us
import ContactUs from "./Components/Multipage/ContactUs/ContactUs";

// COURSES IMPORT
import ButtonData from "./Components/Multipage/Courses/ButtonData";
import {
  fashion,
  interior,
  graphic,
  textile,
  animaton,
  jwellery,
  photography,
} from "./Components/Multipage/Courses/CoursesData";
import { Routes, Route, Link } from "react-router-dom";


// HOMEPAGE
const Home = () => {
  return (
    <>
      <Popup />
      <Announcements />
      <span id="about"></span>
      <About />
      <span id="Courses"></span>
      <Courses />
      <span id="placement"></span>
      {/* <Placement /> */}
      <span id="events"></span>
      <Events />
      <span id="awards"></span>
      <Awards />
      <Recruiters />
      <span id="Registercontact"></span>
      <Contact />
    </>
  );
};


// COURSES
const FashionDesign = (props) => {
  return (
    <>

      <Form
        name="Fashion"
        coursename="Fashion Designing"
        point1="Designer/Assistant Designer"
        point2="Fashion Illustrator"
        point3="Costume Designer"
        point4="Personal Stylist"
        point5="Production Pattern Maker"
        point6="Pattern Designer"
        point7="Fashion Entrepreneur"
        point8="Fashion Consultant"
        point9="Technical Designer"
        point10="Fashion Coordinator"
      />
      <ButtonData dataobj={fashion} />
    </>
  );
};

const GraphicDesign = (props) => {
  return (
    <>
      <Form
        coursename="Graphic Designing"
        point1="Graphic designer"
        point2="Web designer"
        point3="Creative director"
        point4="User experience (UX) designer"
        point5="Art director"
        point6="Packaging Designer"
        point7="Illustrator"
        point8="Dtp Operator"
        point9="Layout Designer"
        point10="Digital Storyboard Designer"
      />
      <ButtonData dataobj={graphic} />
    </>
  );
};

const TextileDesign = (props) => {
  return (
    <>
      <Form
        coursename="Textile Designing"
        point1="Patternmaker"
        point2="Product developer"
        point3="Fashion buyerFashion consultant"
        point4="Textile research scientist"
        point5="Technical designer"
        point6="Store manager"
        point7="Quality assurance evaluator"
        point8="Costume designer"
        point9="Theatrical costuming operations manager"
        point10="Apparel sales representative"
      />
      <ButtonData dataobj={textile} />
    </>
  );
};

const InteriorDesign = (props) => {
  return (
    <>
      <Form
        coursename="Interior Designing"
        point1="Commercial interior designer"
        point2="Residential interior designer"
        point3="Design consultant"
        point4="Cad designer"
        point5="Exhibition designer furniture designer"
        point6="Furniture Designer"
        point7="Institutional interior designer"
        point8="Lighting designer"
        point9="Freelancer designer"
        point10="Interior Stylist"
      />
      <ButtonData dataobj={interior} />
    </>
  );
};

const AnimationDesign = (props) => {
  return (
    <>
      <Form
        coursename="Animation & VFX"
        point1="Titling Artist"
        point2="Maya Animator"
        point3="Maya Lighting Artist"
        point4="Matchmoving Artist"
        point5="Motion Graphics Artist"
        point6="Maya Modeler"
        point7="Maya Texturing Artist"
        point8="Maya Dynamics Artist"
        point9="Compositor"
        point10="FxArtist"
      />
      <ButtonData dataobj={animaton} />
    </>
  );
};

const JewelleryDesign = (props) => {
  return (
    <>
      <Form
        coursename="Jewellery Designing"
        point1="Jewellery Designer"
        point2="Jewellery Merchandiser"
        point3="Jewellery Blogger"
        point4="Jewellery Journalist"
        point5="Manufacturer"
        point6="Lecturer/professor"
        point7="Casting Manager"
        point8="Jewellery Social media manager"
        point9="Marketing Head/assistant"
        point10="Sales Representative"
      />
      <ButtonData dataobj={jwellery} />
    </>
  );
};

const PhotographyDesign = (props) => {
  return (
    <>
      <Form />
      <ButtonData dataobj={photography} />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <span id="home"></span>
              <Routes>
                {/* Home */}
                <Route path="/" element={<Home />}></Route>
                {/* Contact Page */}
                <Route path="/contact" element={<ContactUs />}></Route>
                {/* Placement Page */}
                <Route path="/placement"
                  element={
                    <>
                      <Placement />
                      <Recruiters />
                      {" "}
                    </>
                  }
                ></Route>
                {/* Discover Us */}
                <Route path="/discoverus/techcollab" element={
                  <>
                    <AboutUs />
                    <AboutCampus />
                    <TechCollab />
                  </>}></Route>
                {/* Courses */}
                <Route
                  path="/courses/fashiondesign"
                  element={
                    <>
                      {" "}
                      <FashionDesign />{" "}
                    </>
                  }
                ></Route>
                <Route
                  path="/courses/interiordesign"
                  element={
                    <>
                      {" "}
                      <InteriorDesign />{" "}
                    </>
                  }
                ></Route>
                <Route
                  path="/courses/textiledesign"
                  element={
                    <>
                      {" "}
                      <TextileDesign />{" "}
                    </>
                  }
                ></Route>
                <Route
                  path="/courses/jewellerydesign"
                  element={
                    <>
                      {" "}
                      <JewelleryDesign />{" "}
                    </>
                  }
                ></Route>
                <Route
                  path="/courses/graphicdesign"
                  element={
                    <>
                      {" "}
                      <GraphicDesign />
                    </>
                  }
                ></Route>
                <Route
                  path="/courses/animation_VFX_design"
                  element={
                    <>
                      {" "}
                      <AnimationDesign />
                    </>
                  }
                ></Route>
                <Route
                  path="/courses/photographydesign"
                  element={
                    <>
                      <PhotographyDesign />{" "}
                    </>
                  }
                ></Route>
                <Route
                  path="/courses/beautyhairdesign"
                  element={
                    <>
                      {" "}
                      <Form /> <h1> Beauty and Hair </h1>
                    </>
                  }
                ></Route>
                <Route
                  path="/:id"
                  element={
                    <div style={{ marginLeft: "80px" }}>
                      <h1>
                        Error 404 !! <br /> Page not found :(
                      </h1>
                      <p>
                        Go to the{" "}
                        <span style={{ color: "#00f" }}>
                          <Link to="/">homepage</Link>
                        </span>
                        .
                      </p>
                    </div>
                  }
                ></Route>
              </Routes>
              <Analytics /> {/* Vercel Analytics  */}
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
