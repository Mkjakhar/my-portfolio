import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Project from "./views/Project";
import Contact from "./views/Contact";
import Cursor from "./components/Cursor";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Cursor />
        <ProgressBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/project"} element={<Project />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
