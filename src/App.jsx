import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css"; // Global styles (optional)

const App = () => {
  // Theme state: light or dark
  const [theme, setTheme] = useState("light");

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Apply theme to <body> class for global styling
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      {/* Add more sections like Resume, Skills, Projects, Contact here */}
    </>
  );
};

export default App;
