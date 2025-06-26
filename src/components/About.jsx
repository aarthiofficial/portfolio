import React from "react";
import "./About.css"; // Optional: for styling
import aboutImg from "../assets/hand.png"; // Replace with illustration image

const About = ({ theme }) => {
  return (
    <section
      id="about"
      className={`py-5 ${theme === "light" ? "bg-white text-dark" : "bg-secondary text-white"}`}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center gy-4">
          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">About Me</h2>
            <p className="mb-3">
              I’m a creative front-end developer and designer based in India.
              With a passion for building beautiful, responsive websites and applications,
              I bring ideas to life using clean code and eye-catching UI.
            </p>
            <p>
              I specialize in HTML, CSS, JavaScript, React, and Bootstrap. I also enjoy
              working with Figma to design interfaces and transform them into code.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-md-5 text-center">
            <img
              src={aboutImg}
              alt="Illustration"
              className="img-fluid rounded"
              style={{ maxHeight: "350px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
