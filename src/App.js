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
import Form from "./Components/Multipage/Utilities/Form"
import { Analytics } from "@vercel/analytics/react";

// COURSES IMPORT
import ButtonData from "./Components/Multipage/Courses/ButtonData";
import { fashion, interior, graphic, textile, animaton, jwellery } from "./Components/Multipage/Courses/CoursesData";
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
      <span id="events"></span>
      <Events />
      <span id="awards"></span>
      <Awards />
      <Recruiters />
      <span id="contact"></span>
      <Contact />
    </>
  );
};

// COURSES
const FashionDesign = (props) => {
  return (
    <>
      {/* FORM & LIST */}
      <ButtonData dataobj={fashion} />
    </>
  );
};

const GraphicDesign = (props) => {
  return (
    <>
      {/* FORM & LIST */}
      <ButtonData dataobj={graphic} />
    </>
  );
};

const TextileDesign = (props) => {
  return (
    <>
      {/* FORM & LIST */}
      <ButtonData dataobj={textile} />
    </>
  );
};

const InteriorDesign = (props) => {
  return (
    <>
      {/* FORM & LIST */}
      <ButtonData dataobj={interior} />
    </>
  );
};

const AnimationDesign = (props) => {
  return (
    <>
      {/* FORM & LIST */}
      <ButtonData dataobj={animaton} />
    </>
  );
};

const JewelleryDesign = (props) => {
  return (
    <>
      {/* FORM & LIST */}
      <ButtonData dataobj={jwellery} />
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
                <Route path="/" element={<Home />}></Route>
                <Route
                  path="/courses/fashiondesign"
                  element={<> <Form /> <FashionDesign data="sample data 2" /> </>}
                ></Route>
                <Route
                  path="/courses/interiordesign"
                  element={<> <Form /> <InteriorDesign /> </>}
                ></Route>
                <Route
                  path="/courses/textiledesign"
                  element={<> <Form /> <TextileDesign /> </>}
                ></Route>
                <Route
                  path="/courses/jewellerydesign"
                  element={<> <Form /> <JewelleryDesign /> </>}
                ></Route>
                <Route
                  path="/courses/graphicdesign"
                  element={<> <Form /> <GraphicDesign /></>}
                ></Route>
                <Route
                  path="/courses/animation_VFX_design"
                  element={<> <Form /> <AnimationDesign /></>}
                ></Route>
                <Route
                  path="/courses/photographydesign"
                  element={<><Form /> <h1> Photography </h1></>}
                ></Route>
                <Route
                  path="/courses/beautyhairdesign"
                  element={<> <Form /> <h1> Beauty and Hair </h1></>}
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
