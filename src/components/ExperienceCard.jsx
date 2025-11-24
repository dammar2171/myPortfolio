import "../css/ExperiencePage.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { GrOrganization } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
const timelineData = [
  {
    heading: "Educator | Teaching Programming ",
    year: "2025",
    organization: "Araniko Secondary School",
    location: "Bedkot-03, Kanchanpur",
    description:
      "Taught computer fundamentals, QBASIC programming, HTML, and networking to secondary students. Focused on practical learning, regular assessments, and exam preparation to build digital skills and logical thinking.",
    secondHeading: "Key Achievement",
    keys: {
      first: "Developed Practical Programming Skills",
      second: "Improved Exam Performance",
      third: "Organized Tech Activities",
    },
    thirdHeading: "Tools And Methods",
    tags: {
      first: "Lesson Planning",
      second: "Classroom Activities",
      third: "Student Assignment",
      fourth: "BlackBoard Teaching",
      fifth: "Workshops",
    },
  },
  {
    heading: "Developer | Website Developer ",
    year: "2025",
    organization: "CraftSea",
    location: "Kalwapur, Kanchanpur",
    description:
      "I began exploring WordPress out of curiosity, starting with simple blog customization. Over time, I learned to create full websites using themes and plugins. I gradually moved on to customizing layouts with Elementor and writing basic PHP for more control. WordPress helped me understand content management, responsive design, and website deployment. It was my first step into web development and laid the foundation for my interest in building dynamic websites.",
    secondHeading: "Key Achievement",
    keys: {
      first: "Built Fully Functional Websites",
      second: "Learned Theme & Plugin Customization",
      third: "Improved Web Development Skills",
    },
    thirdHeading: "Tools And Methods",
    tags: {
      first: "Elementor",
      second: "WordPress Dashboard",
      third: "Theme Customization",
      fourth: "Plugin Integration",
      fifth: "Responsive Design",
    },
  },
];
const ExperienceCard = () => {
  return (
    <>
      <div className="main-card-experience">
        {timelineData.map((item, index) => (
          <div className="card-experience" key={index}>
            <h3 className="experience-title">{item.heading}</h3>
            <div className="addresses">
              <span>
                <MdDateRange />
                {item.year}
              </span>
              <br />
              <span>
                <GrOrganization />
                {item.organization}
              </span>
              <br />
              <span>
                <FaLocationDot />
                {item.location}
              </span>
            </div>
            <div className="line-experience"></div>
            <p className="experience-desc">{item.description}</p>
            <h4 className="experience-key">
              {" "}
              <FaUser />
              {item.secondHeading}
            </h4>
            <ul className="experience-ul">
              <li>{item.keys.first}</li>
              <li>{item.keys.second}</li>
              <li>{item.keys.third}</li>
            </ul>
            <h4 className="experience-key">
              <GiLaptop />
              {item.thirdHeading}
            </h4>
            <div className="technology-experience">
              <span className="experience-span">{item.tags.first}</span>
              <span className="experience-span">{item.tags.second}</span>
              <span className="experience-span">{item.tags.third}</span>
              <span className="experience-span">{item.tags.fourth}</span>
              <span className="experience-span">{item.tags.fifth}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ExperienceCard;
