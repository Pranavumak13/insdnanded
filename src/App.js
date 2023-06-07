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

function App() {
  return (
    <>
      <span id="home"></span>
      <Navbar />
      <Popup />
      <Announcements />
      <span id="about"></span>
      <About />
      <span id="courses"></span>
      <Courses />
      <Events />
      <Awards />
      <Recruiters />
      <span id="contact"></span>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
