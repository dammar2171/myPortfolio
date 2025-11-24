import { FaFolderOpen } from "react-icons/fa";
import CardProject from "./CardProject";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import "../css/ProjectPage.css";
const ProjectPage = ({ setActive }) => {
  return (
    <>
      <div className="project-top">
        <FaFolderOpen />
        My Work
      </div>
      <div className="project-heading">Featured Projects</div>
      <p id="my-intro-about">
        A selection of projects showcasing my skill in web development , design
        and my problem solving skill.
      </p>
      <CardProject />
      <div className="contact-card-project">
        <p id="card-p-project">
          Like what you see? Let's work together in next project.
        </p>
        <button id="getintouch-btn" onClick={() => setActive("contact")}>
          Get in Touch
          <HiChatBubbleBottomCenterText />
        </button>
      </div>
    </>
  );
};
export default ProjectPage;
