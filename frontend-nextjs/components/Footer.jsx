import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <header className="footer-title">Climate Aware</header>
        <a href="/about" className="link link-hover">About us</a>
        <a href="/news" className="link link-hover">News</a>
        <a href="#section4" className="link link-hover">Educations</a>
        <a href="https://forum.muhammadirfani.dev" className="link link-hover">Forum</a>
      </nav>
      <nav>
        <header className="footer-title">Educations</header>
        <a href="education/evidence" className="link link-hover">Evidence</a>
        <a href="education/causes" className="link link-hover">Causes</a>
        <a href="education/effects" className="link link-hover">Effects</a>
        <a href="education/solutions" className="link link-hover">Solutions</a>
      </nav>
    </footer>
    <footer className="footer px-10 py-4 bg-neutral text-neutral-content justify-center">
      <nav className="flex items-center"><FaRegCopyright /> 2024 - Climate Aware. All rights reserved</nav>
    </footer>
    </>
  );
};

export default Footer;
