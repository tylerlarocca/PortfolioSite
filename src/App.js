import React from "react"; 
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App;