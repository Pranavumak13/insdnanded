// eslint
import "./App.css";
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

import { Routes, Route, Link } from "react-router-dom";

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
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <span id="home"></span>
              <Navbar />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/:id"
          element={
            <div style={{ marginLeft: "80px" }}>
              <h1>Page not found :(</h1>
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
    </>
  );
}

export default App;
