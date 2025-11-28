import "../css/ContactPage.css";
import { MdContactMail, MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vcvw81o",
        "template_axiruab",
        formRef.current,
        "UMqwTLLl13mOUU8IQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Try again later.");
        }
      );
  };

  return (
    <>
      <div className="about-top">
        <MdContactMail /> About Me
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
                <MdEmail /> Email
              </h4>
              <p>Send me an email anytime</p>
              <a href="mailto:dammarbhatt111@gmail.com">
                dammarbhatt111@gmail.com
              </a>
            </div>

            <div className="info-box">
              <h4>
                <FaPhoneSquareAlt /> Phone
              </h4>
              <p>Sun-Fri from 9am to 6pm</p>
              <a href="tel:+9779805752792">+977 9805752792</a>
            </div>

            <div className="info-box">
              <h4>
                <FaLocationDot /> Location
              </h4>
              <p>Available for remote work</p>
              <a href="#">Bekot-03 Kanchanpur, Nepal</a>
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

            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-row">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-row">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                />
              </div>
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
