import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { Testimonial } from "./components/Testimonials/Testimonial";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Ed } from "./components/Education/Ed";
import { Skills } from "./components/Skills/skills";
import { Video } from "./components/Videoplayer/Video";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <>
    <Router>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route path="/projects/video" element={<Video/>}></Route>
        <Route exact path="/testimonial" element={<Testimonial />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/about/education" element={<Ed />}></Route>
        <Route exact path="/about/skills" element={<Skills />}></Route>
        <Route exact path="/testimonial/feedback" element={<Feedback />}></Route>
      </Routes>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
