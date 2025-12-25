import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar-desktop">
        <nav className="nav">
          <a href="#home" className="nav__logo">
            {/* <img src={} alt="" /> */}
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__footer">
            <span className="copyright">&copy; 2023 - 2024</span>
          </div>
        </nav>
      </aside>
      {/* Mobile Top Bar - horizontal, small */}
      <nav className="sidebar-mobile-horizontal">
        <ul className="nav__list--mobile-horizontal">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              <i className="icon-home"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <i className="icon-user-following"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#resume" className="nav__link">
              <i className="icon-graduation"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link">
              <i className="icon-layers"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <i className="icon-bubble"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
