import React from "react"; 
import "./Home.css";  
import TylerPfp from "../../Assets/TylerPfp.jpeg"
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={TylerPfp} alt="" className="home__img" />
        <h1 className="home__name">Tyler LaRocca</h1>
        <span className="home__education">Full Stack Developer and AWS Certified Cloud Practitioner</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>
        
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home;