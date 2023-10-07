import React from "react";
import "../assets/css/footer.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";
const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="user-name">Rajrup Das</div>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
        <div className="newsletter">
          <div className="newslabel">
            <label htmlFor="email">News Letter</label>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <div className="send-icon">
            <BiMailSend />
          </div>
        </div>
        <div className="copyright">© 2023 Rajrup.dev. All rights reserved.</div>
      </footer>
    </>
  );
};
export default Footer;
