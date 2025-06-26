import React from "react";
import "./Hero.css"; // Optional: for custom styling
import profileImg from "../assets/profile.png"; // Replace with your image

const Hero = ({ theme }) => {
  return (
    <section
      id="hero"
      className={`d-flex align-items-center ${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-white"
      }`}
      style={{ minHeight: "100vh", transition: "0.3s" }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-md-6 text-center text-md-start">
            <span className="badge rounded-pill bg-primary px-3 py-2 mb-3">
              Hello!
            </span>
            <h1 className="display-5 fw-bold">
              I’m <span className="text-primary">Anish</span>
            </h1>
            <p className="lead mb-4">
              UI/UX Designer, Front-End Developer & Thinker.<br />
              Based in India.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="/cv.pdf" className="btn btn-warning fw-semibold">
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline-light">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <div className="hero-img-wrapper position-relative">
              <img
                src={profileImg}
                alt="Anish"
                className="img-fluid rounded-circle border border-4 border-white"
                style={{
                  maxWidth: "300px",
                  background: "#FDF500",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
