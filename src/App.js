// eslint
import "./App.css";
import Navbar from "./Components/Navbar";
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
      <Navbar />
      <Announcements />
      <About />
      <Courses />
      <Events />
      <Awards />
      <Recruiters />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
