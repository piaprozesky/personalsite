import React from "react";
import Navbar from "./components/NavBar";

import "./App.css";

import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ProjectsView from "./views/ProjectsView";
import ContactView from "./views/ContactView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <HomeView />
        <AboutView />
        <ProjectsView />
        <ContactView />
      </div>
    </div>
  );
}

export default App;
