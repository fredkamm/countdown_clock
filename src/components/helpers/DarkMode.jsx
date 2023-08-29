/* eslint-disable no-unused-vars */
import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "./ThemeProvider"; // Import the useTheme hook

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Access theme context

  return (
    <div className="container mx-auto h-full flex items-center">
      <Switch
        defaultSelected={isDarkMode}
        size="lg"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
          ) : (
          <SunIcon className={className} />
        )
      }
        onChange={toggleDarkMode}
      >
        {isDarkMode ? "Dark mode" : "Light mode"}
      </Switch>
    </div>
  );
};

export default DarkMode;
