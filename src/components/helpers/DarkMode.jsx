/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode on initial render
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
      body.classList.remove("light");

    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`container mx-auto h-full flex items-center ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
      <Switch
        defaultSelected={isDarkMode}
        size="lg"
        color="success"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onChange={toggleDarkMode}
      >
        {isDarkMode ? "Light mode" : "Dark mode"}
      </Switch>
    </div>
  );
};

export default DarkMode;
