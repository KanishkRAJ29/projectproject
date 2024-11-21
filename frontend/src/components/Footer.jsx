import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer style={{ padding: "2rem", backgroundColor: "black" }}>
      <div>
        <img src="/logo.png" alt="Company Logo" style={{ maxWidth: "150px" }} />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>New York, USA</li>
          <li>
            <a href="mailto:crypto@gmail.com">crypto@gmail.com</a>
          </li>
          <li>
            <a href="tel:+91 1231231230">+91 1231231230</a>
          </li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter (X)"
            >
              <FaSquareTwitter /> Twitter (X)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube /> YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaSquareInstagram /> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
