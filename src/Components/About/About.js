import React from "react";
import "./About.css";
import Image from "../../Assets/TylerFamily.jpeg";
import resume from "../../Assets/TylerResume.pdf";

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data gird">
          <div className="about__info">
            <p className="about__description">
              I am Tyler LaRocca, an M.Ed graduate and engineering leader. I
              enjoy creating new solutions to difficult problems through a vast
              technology stack including JavaScript, TypeScript, Python, React
              and more. With a strong foundation in both education and
              technology, I bring a unique perspective to software development
              and IT solutions. When I'm not coding, I love spending time with
              my family, podcasting about sports, and continuously learning
              about the latest advancements in technology.
            </p>
            <a href={resume} download={true} className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
