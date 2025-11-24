import "../css/HomeGreet.css";
import { FaRegSmileBeam, FaLongArrowAltRight, FaPlay } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
const HomeGreet = ({ setActive }) => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/myCV.pdf";
    link.download = "myCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="main-div">
      <div className="shape circle"></div>
      <div className="shape square"></div>
      <div className="shape rectangle"></div>
      <div className="home-greet">
        <FaRegSmileBeam />
        Welcome to my portfolio
      </div>
      <div className="home-intro">
        Hii, I'm <span id="name">Dammar Bhatt</span>
      </div>
      <div id="web-developer">Web Developer</div>
      <br />
      <p id="my-intro">
        Hello! I’m Dammar Bhatt, a passionate and creative Web Developer lived
        in Sudurpashchim, Nepal. I specialize <br />
        in building modern, responsive, and user-friendly websites,web
        application using technologies like HTML, CSS, JavaScript, PHP, and
        React.I love turning ideas into functional digital experiences. Whether
        it's developing interactive front-end designs or crafting back-end
        systems, I strive for clean code and efficient performance.
      </p>
      <div className="home-btn-group">
        <button id="view-work-btn" onClick={() => setActive("project")}>
          View my work
          <FaLongArrowAltRight />
        </button>
        <button id="download-resume-btn" onClick={downloadResume}>
          <FaDownload />
          Download my resume
        </button>
        <button id="lets-talk-btn" onClick={() => setActive("contact")}>
          <FaPlay />
          Let's Talk
        </button>
      </div>
      <br />
      <h5 id="home-quote">
        "Creativity is intelligence having fun." — Albert Einstein
      </h5>
    </div>
  );
};
export default HomeGreet;
