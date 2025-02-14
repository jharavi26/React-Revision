import React, { useState } from "react";

function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={darkMode ? darkTheme : {}}>
      <h1>Toggle Theme</h1>
      <label>
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        Dark Mode
      </label>
    </div>
  );
}

export default Mode;
