import "./App.css";
import Navbar from "./Components/Navbar";
import Announcements from "./Components/Announcements";

function App() {
  return (
    <>
      <Navbar />
      <Announcements />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  );
}

export default App;