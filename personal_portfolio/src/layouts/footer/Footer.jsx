import React from "react";
import "./footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="py-12 text-center text-2xl">
      <ul className="permalinks pl-0">
        <li>
          <a
            href="#"
            className=" text-purple-500 no-underline hover:text-purple-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className=" text-purple-500 no-underline hover:text-purple-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#services"
            className=" text-purple-500 no-underline hover:text-purple-300"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className=" text-purple-500 no-underline hover:text-purple-300"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Talha Solutions. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
