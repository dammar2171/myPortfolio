import "../css/ServicePage.css";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import ProcessCard from "./ProcessCard";
const services = [
  {
    title: "Website Development",
    description:
      "Full-stack website development using HTML, CSS, JavaScript, PHP, and React.",
    features: [
      "Frontend & Backend",
      "Cross-browser Compatibility",
      "Clean Code",
      "Fully Functional",
    ],
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first, responsive web design that looks great on all screen sizes.",
    features: [
      "Media Queries",
      "Bootstrap/Flexbox",
      "Pixel Perfect UI",
      "Fast Loading",
    ],
  },
  {
    title: "Custom Web Apps",
    description:
      "Develop custom apps like file upload systems, notes apps, or admin panels.",
    features: [
      "User Dashboard",
      "Authentication",
      "PDF/Image Uploads",
      "Role-Based Access",
    ],
  },
  {
    title: "E-commerce Setup",
    description:
      "Online stores with cart, checkout, seller dashboard & payment flow.",
    features: [
      "Product Listing",
      "Cart & Checkout",
      "Order Management",
      "Admin Panel",
    ],
  },
  {
    title: "Bug Fixing & Optimization",
    description:
      "Improve site speed, fix layout or backend errors, and boost SEO.",
    features: [
      "Performance Boost",
      "SEO Friendly",
      "Code Refactoring",
      "Responsive Fixes",
    ],
  },
  {
    title: "Maintenance & Updates",
    description:
      "Ongoing support for your site, including edits, new features, or backups.",
    features: [
      "Content Updates",
      "Security Checks",
      "Backup Management",
      "New Feature Add-ons",
    ],
  },
];

const ServicePage = ({ setActive }) => {
  return (
    <>
      <div className="about-top">
        <MdMiscellaneousServices />
        Services
      </div>
      <div className="about-heading">What Can I Do For You</div>
      <p id="my-intro-about">
        From concept to deployment, I offer comprehensive web development
        services to bring your ideas to life.
      </p>
      <div className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h2>{service.title}</h2>
              <p className="service-desc">{service.description}</p>
              <ul className="features-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>

              <button
                className="get-started-btn"
                onClick={() => setActive("contact")}
              >
                Get Started ➜
              </button>
            </div>
          ))}
        </div>
      </div>
      <h1 id="my-process-heading">My Process</h1>
      <ProcessCard />
      <div className="service-contact-container">
        <h1 id="service-contact-heading">Ready to start your project?</h1>
        <p id="service-contact-para">
          Let's discuss your requirement and create something amazing together.
          I'm here to help bring your vision to life.
        </p>
        <button id="service-contact-btn" onClick={() => setActive("contact")}>
          Start a Conversation
          <FaLongArrowAltRight />
        </button>
      </div>
    </>
  );
};
export default ServicePage;
