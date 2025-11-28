import { useState } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import HomeGreet from "./components/HomeGreet";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
import ExperiencePage from "./components/ExperiencePage";
import ContactPage from "./components/ContactPage";
import ServicePage from "./components/ServicePage";

function App() {
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark-theme" : "light-theme"}>
       
        <button
          className="menu-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
        {isSidebarOpen && window.innerWidth <= 768 && (
          <div
            className="overlay"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        <div className="d-flex">
          <Sidebar
            active={active}
            setActive={setActive}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            className={`sidebar ${isSidebarOpen ? "open" : ""}`}
          />

          <div
            className={`p-5 custom-main-content ${
              isSidebarOpen && window.innerWidth <= 768 ? "hide-content" : ""
            }`}
          >
            {active === "home" ? (
              <HomeGreet setActive={setActive} />
            ) : active === "about" ? (
              <AboutPage active={active} />
            ) : active === "project" ? (
              <ProjectPage setActive={setActive} />
            ) : active === "experience" ? (
              <ExperiencePage />
            ) : active === "services" ? (
              <ServicePage setActive={setActive} />
            ) : active === "contact" ? (
              <ContactPage />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
