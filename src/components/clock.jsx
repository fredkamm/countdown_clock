import { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Clock() {
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
    <div className="header">
      <h1>{currentDate}</h1>
      <h1>{currentTime}</h1>
    </div>
  );
}
