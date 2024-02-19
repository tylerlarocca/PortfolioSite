import React from "react"; 
import "./About.css";  
import Image from "../../Assets/TylerFamily.jpeg";
import resume from "../../Assets/TylerResume.pdf";

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img"/>

        <div className="about__data gird">
          <div className="about__info">
            <p className="about__description">I am Tyler LaRocca, an M.Ed. in Higher Education graduate and a skilled Full Stack Engineer specializing in JavaScript and am also AWS Cloud Practitioner Certified. I have successfully completed numerous projects using a range of JavaScript applications, including Express, Node, Knex, CORS, and SQL. I am deeply committed to expanding my knowledge in various coding languages and further strengthening my expertise in JavaScript.</p>
            <a href={resume} download={true} className="btn">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
    )
}

export default About;