import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

import "./index.css";
import "@fontsource/outfit";
import "@fontsource/roboto";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <App />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
  
    </React.StrictMode>
);
