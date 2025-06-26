import React from "react";

const ToggleTheme = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm btn-outline-secondary ms-3"
      title="Toggle theme"
      aria-label="Toggle light/dark mode"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ToggleTheme;
