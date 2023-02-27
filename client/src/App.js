import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./views/Navbar";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import SkillsPage from "./views/SkillsPage";
import ProjectsPage from "./views/ProjectsPage";
import ContactPage from "./views/ContactPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
