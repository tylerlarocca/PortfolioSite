import React from "react";
import { useState } from "react"; 
import "./Projects.css";  
import Menu from "./Menu"; 

function Projects() {
  const [items, setItems] = useState(Menu); 
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter ((curElement) => {
      return curElement.category === categoryItem; 
    })

    setItems(updatedItems)
  }


  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Work</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={() => filterItem("Front-End Development")}>Front-End Development</span>
        <span className="work__item" onClick={() => filterItem("Back-End Development")}>Back-End Development</span>
        <span className="work__item" onClick={() => filterItem("Full-Stack Development")}>Full-Stack Development</span>
        <span className="work__item" onClick={() => filterItem("Data Structures")}>Databases</span>
      </div>

      <div className="work__container grid">
        {items.map ((element) => {
          const {id, image, title, category, url} = element; 
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img"/>
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={url} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects;