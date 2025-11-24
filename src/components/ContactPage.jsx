import "../css/ContactPage.css";
import { MdContactMail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const ContactPage = () => {
  return (
    <>
      <div className="about-top">
        <MdContactMail />
        About me
      </div>
      <div className="about-heading">Let's Work Together</div>
      <p id="my-intro-about">
        Have a project in mind? I'd love to hear about it. Send me a message and
        let's create something amazing together.
      </p>
      <div className="contact-container">
        <div className="contact-content">
          <div className="left-info">
            <h3>Get in Touch</h3>
            <p>
              I'm always excited to take on new challenges and collaborate with
              amazing people.
            </p>

            <div className="info-box">
              <h4>
                <MdEmail />
                Email
              </h4>
              <p>Send me an email anytime</p>
              <a href="dammarbhatt111@gmail.com">dammarbhatt111@gmail.com</a>
            </div>

            <div className="info-box">
              <h4>
                <FaPhoneSquareAlt />
                Phone
              </h4>
              <p>Sun-Fri from 9am to 6pm</p>
              <a href="tel:+9779805752792">+977 9805752792</a>
            </div>

            <div className="info-box">
              <h4>
                <FaLocationDot />
                Location
              </h4>
              <p>Available for remote work</p>
              <a href="#">Bekot-03 kanchanpur, Nepal</a>
            </div>

            <div className="availability">
              <p>✅ Available for new projects</p>
              <small>Currently booking for college website</small>
            </div>
          </div>

          <div className="right-form">
            <h3>
              <IoIosSend /> Send me a message
            </h3>
            <p>
              Fill out the form below and I’ll get back to you within 24 hours.
            </p>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <div className="form-row">
                <select>
                  <option>Select budget range</option>
                  <option>Below RS5000</option>
                  <option>RS5000–RS10000</option>
                  <option>Above RS10000</option>
                </select>
                <select>
                  <option>Select timeline</option>
                  <option>1 week</option>
                  <option>2–4 weeks</option>
                  <option>1–2 months</option>
                </select>
              </div>
              <textarea rows="4" placeholder="Message"></textarea>
              <button type="submit">
                Send Message <IoIosSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
