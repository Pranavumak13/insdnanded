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
import { Analytics } from '@vercel/analytics/react';

// COURSES IMPORT
import ButtonData from "./Components/Multipage/Courses/ButtonData";



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
      <ButtonData />
    </>
  );
}

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
                <Route path="/courses/fashiondesign" element={<FashionDesign data="sample data 2" />} ></Route>
                <Route path="/courses/interiordesign" element={<>Interior</>} ></Route>
                <Route path="/courses/textiledesign" element={<>Textile</>} ></Route>
                <Route path="/courses/jewellerydesign" element={<>Jewellery</>} ></Route>
                <Route path="/courses/graphicdesign" element={<>Graphics</>} ></Route>
                <Route path="/courses/animation_VFX_design" element={<>Animation and VFX</>} ></Route>
                <Route path="/courses/photographydesign" element={<>Photography</>} ></Route>
                <Route path="/courses/beautyhairdesign" element={<>Beauty and Hair</>} ></Route>
                <Route
                  path="/:id"
                  element={
                    <div style={{ marginLeft: "80px" }}>
                      <h1>Error 404 !! <br /> Page not found :(</h1>
                      <p>
                        Go to the{" "}
                        <span style={{ color: "#00f" }}>
                          <Link to="/">homepage</Link>
                        </span>
                        .
                      </p>
                    </div>
                  }
                >
                </Route>
              </Routes>
              <Analytics />  {/* Vercel Analytics  */}
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
