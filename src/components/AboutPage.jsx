import "../css/AboutPage.css";
import ProgressiveBar from "../components/ProgressiveBar";
import { FaUser } from "react-icons/fa";
import LoveCard from "./LoveCard";
import { useState, useEffect } from "react";

const AboutPage = ({ active }) => {
  // Target numbers for quick facts
  const targets = {
    projects: 10,
    years: 1,
    clients: 10,
    satisfaction: 100,
  };

  // States for counters, initially zero
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    // Only start counting if AboutPage is active (optional)
    if (!active) return;

    // Helper function to animate count up
    const animateCount = (target, setter) => {
      let start = 0;
      const duration = 3000; // total animation time in ms
      const intervalTime = 100; // update interval in ms
      const increment = Math.ceil(target / (duration / intervalTime));

      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(start);
        }
      }, intervalTime);
    };

    animateCount(targets.projects, setProjectsCount);
    animateCount(targets.years, setYearsCount);
    animateCount(targets.clients, setClientsCount);
    animateCount(targets.satisfaction, setSatisfactionCount);
  }, [active]);

  return (
    <>
      <div className="about-top">
        <FaUser />
        About me
      </div>
      <div className="about-heading">Know Me Better</div>
      <p id="my-intro-about">
        I'm a passionate developer dedicated to crafting innovatice and seamless
        web experience.
      </p>
      <div className="container">
        <div className="about-journey">
          <div className="top-section">
            <FaUser />
            <br />
            My Story
          </div>
          <hr />
          <p id="story">
            Hi, I’m Dammar Bhatt, a passionate web developer from Bedkot-03,
            Mahendranagar, Sudurpashchim, Nepal. Ever since I was introduced to
            the world of coding, I’ve been captivated by how ideas can come to
            life through clean code and creative design. I started my journey
            with HTML, CSS, and JavaScript, gradually exploring PHP, Bootstrap,
            and other tools to build dynamic, responsive websites. I’m currently
            pursuing my education at Janajyoti Multiple Campus, where I also
            serve as the Secretary of the IICC (Innovative Idea with Code Club).
            This experience has helped me enhance my leadership, teamwork, and
            technical skills. One of my proudest achievements is “Notepy”, a
            platform that allows admins to share notes and resources with
            students through a clean and user-friendly interface. I’ve built
            several other projects with a focus on accessibility, design, and
            practical use. Whether it’s building a modern portfolio, a
            notes-sharing platform, or a digital marketplace — I’m always
            excited to turn challenges into elegant web solutions.
          </p>
        </div>
        <div className="quick-fact">
          <div className="top-section">Quick Facts</div>
          <hr />
          <div className="fact">
            <div className="fact-fact">
              {projectsCount} + <span className="fact-fact-name">Projects</span>
            </div>
            <div className="fact-fact">
              {yearsCount} + <br />
              <span className="fact-fact-name">Years</span>
            </div>
            <div className="fact-fact">
              {clientsCount} + <span className="fact-fact-name">Clients</span>
            </div>
            <div className="fact-fact">
              {satisfactionCount} %{" "}
              <span className="fact-fact-name">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1 id="technical-heading">Technical Skills</h1>
        <ProgressiveBar />
      </div>
      <div className="ilove">
        <h1>What I Love</h1>
      </div>
      <LoveCard />
    </>
  );
};

export default AboutPage;
