import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </div>
      <div className="copyright">&copy; {new Date().getFullYear()} Copyright</div>
    </footer>
  );
};

export default Footer;
