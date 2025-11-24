import "../css/LoveCard.css";
import { FaCode, FaLightbulb } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { GiCoffeeMug, GiLoveMystery } from "react-icons/gi";
const LoveCard = () => {
  return (
    <>
      <div className="love-card">
        <div className="card">
          <span className="icon">
            <FaCode />
          </span>
          <span className="heading-card">Clean Code</span>
          <span className="card-content">
            Writing maintainable,scalable code
          </span>
        </div>
        <div className="card">
          <span className="icon">
            <IoIosColorPalette />
          </span>
          <span className="heading-card">Design</span>
          <span className="card-content">
            Creating beautiful user interface
          </span>
        </div>
        <div className="card">
          <span className="icon">
            <MdDeveloperMode />
          </span>
          <span className="heading-card">Web Development</span>
          <span className="card-content">
            Building interective web experience
          </span>
        </div>
        <div className="card">
          <span className="icon">
            <GiCoffeeMug />
          </span>
          <span className="heading-card">coffee</span>
          <span className="card-content">
            Fuel for late night coding session
          </span>
        </div>
        <div className="card">
          <span className="icon">
            <GiLoveMystery />
          </span>
          <span className="heading-card">Open Source</span>
          <span className="card-content">
            Contributing open source community
          </span>
        </div>
        <div className="card">
          <span className="icon">
            <FaLightbulb />
          </span>
          <span className="heading-card">Creativity</span>
          <span className="card-content">Bringing idea to life with code </span>
        </div>
      </div>
    </>
  );
};
export default LoveCard;
