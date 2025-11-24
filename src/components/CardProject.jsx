import "../css/CardProject.css";
import project1 from "../assets/project1.png";
import project11 from "../assets/project11.png";
import project2 from "../assets/project2.png";
import project22 from "../assets/proect22.png";

const CardProject = () => {
  return (
    <>
      <div className="main-card-project">
        <h2 className="featured-title">🌟 Featured Work</h2>
        <div className="card-project">
          <div className="top-image">
            <img src={project1} alt="project1" />
            <img src={project11} alt="project11" />
          </div>
          <h3 className="project-title">Service Website</h3>
          <p className="project-desc">
            A modern, responsive service website built with WordPress.
          </p>
          <div className="technology">
            <span>WordPress</span>
            <span>Responsive</span>
            <span>SEO</span>
            <span>Elementor</span>
          </div>
          <div className="btn-group-project">
            <a
              href="https://craftersea.com/"
              target="_blank"
              className="btn live-demo"
            >
              🚀 Live Demo
            </a>
            <a href="#" className="btn github">
              📁 GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="main-card-project">
        <div className="card-project">
          <div className="top-image">
            <img src={project2} alt="project2" />
            <img src={project22} alt="project22" />
          </div>
          <h3 className="project-title">Resturant Website</h3>
          <p className="project-desc">
            A modern, responsive resturant website built with WordPress.
          </p>
          <div className="technology">
            <span>WordPress</span>
            <span>Responsive</span>
            <span>SEO</span>
            <span>Elementor</span>
          </div>
          <div className="btn-group-project">
            <a
              href="https://olamexican.com.au/"
              target="_blank"
              className="btn live-demo"
            >
              🚀 Live Demo
            </a>
            <a href="#" className="btn github">
              📁 GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;
