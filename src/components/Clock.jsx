/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTheme } from "./helpers/ThemeProvider"; // Import the useTheme hook

dayjs.extend(relativeTime);

export default function Clock() {
  const { isDarkMode } = useTheme(); // Access theme context

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Update date and time every second
    const interval = setInterval(() => {
      setCurrentDate(dayjs().format("dddd" + ", " + "MMMM D YYYY"));
      setCurrentTime(dayjs().format("hh:mm:ss A"));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`header ${isDarkMode ? "dark" : "light"}`}>
      <h1>{currentDate}</h1>
      <h1>{currentTime}</h1>
    </div>
  );
}
