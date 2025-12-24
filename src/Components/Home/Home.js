import React from "react";
import "./Home.css";
import TylerPfp from "../../Assets/TylerPfp.jpeg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={TylerPfp} alt="" className="home__img" />
        <h1 className="home__name">Tyler LaRocca</h1>
        <span className="home__education">
          Full Stack Developer and Engineer - IT and SEO Expert - Leader -
          Solution Creator - Problem Solver - Team Builder
        </span>

        <HeaderSocials />

        <div class="tech-stack">
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          />
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-typescript-plain colored"></i>
          <i class="devicon-react-original colored"></i>
          <i class="devicon-python-plain colored"></i>
          <i class="devicon-nextjs-original-wordmark colored"></i>
          <i class="devicon-css3-plain colored"></i>
          <i class="devicon-html5-plain colored"></i>
          <i class="devicon-amazonwebservices-plain-wordmark colored"></i>
          <i class="devicon-bootstrap-plain colored"></i>
          <i class="devicon-postgresql-plain-wordmark colored"></i>
          <i class="devicon-knexjs-plain-wordmark colored"></i>
          <i class="devicon-express-original-wordmark colored"></i>
        </div>

        <a href="#contact" className="btn">
          Contact
        </a>

        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
