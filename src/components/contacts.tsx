import React from "react";
import "../assets/css/contact.scss";
import NavBar from "./Nav";
import Footer from "./Footer";

const Contact: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="contact-page">
        <div className="contact-content">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="google-map">
            {/* Embed your Google Map here */}
            {/* <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_HERE!2dYOUR_LONGITUDE_HERE!..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14706.224702381181!2d88.33880808585887!3d22.855904187543864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8910f7fc2014d%3A0x90a4118279564abe!2sChandannagar%2C%20West%20Bengal%20712136!5e0!3m2!1sen!2sin!4v1696333720162!5m2!1sen!2sin"
              width="600"
              height="450"
              //   style={{  0} }
              //   allowfullscreen=""
              loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
