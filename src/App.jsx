import { useState, useEffect } from "react";
import "./App.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function App() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [futureDate, setFutureDate] = useState("");
  const [timeDifference, setTimeDifference] = useState({});

  useEffect(() => {
    // Update date and time every second
    const interval = setInterval(() => {
      setCurrentDate(dayjs().format("dddd" + ", " + "MMMM D YYYY"));
      setCurrentTime(dayjs().format("hh:mm:ss A"));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update time difference every 100 milliseconds
    const interval = setInterval(() => {
      if (futureDate) {
        const futureDateTime = dayjs(futureDate);
        const now = dayjs();

        const diffInMilliseconds = futureDateTime.diff(now);
        const diffInUnits = calculateTimeDifference(diffInMilliseconds);

        setTimeDifference(diffInUnits);
      }
    }, 100);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [futureDate]);

  const handleFutureDateChange = (event) => {
    setFutureDate(event.target.value);
  };

  const calculateTimeDifference = (difference) => {
    return {
      milliseconds: difference,
      seconds: dayjs(difference).diff(0, "seconds"),
      minutes: dayjs(difference).diff(0, "minutes"),
      hours: dayjs(difference).diff(0, "hours"),
      days: dayjs(difference).diff(0, "days"),
      weeks: dayjs(difference).diff(0, "weeks"),
      months: dayjs(difference).diff(0, "months"),
      years: dayjs(difference).diff(0, "years"),
    };
  };

  return (
    <>
      <h1>{currentDate}</h1>
      <h1>{currentTime}</h1>
      <div className="card">
        <input
          type="datetime-local"
          value={futureDate}
          onChange={handleFutureDateChange}
        />
      </div>
      <div>
        <h2>Time Difference:</h2>
        {futureDate ? (
          <ul>
            <li>Milliseconds: {timeDifference.milliseconds}</li>
            <li>Seconds: {timeDifference.seconds}</li>
            <li>Minutes: {timeDifference.minutes}</li>
            <li>Hours: {timeDifference.hours}</li>
            <li>Days: {timeDifference.days}</li>
            <li>Weeks: {timeDifference.weeks}</li>
            <li>Months: {timeDifference.months}</li>
            <li>Years: {timeDifference.years}</li>
          </ul>
        ) : (
          <p>Enter a future date above to calculate the difference.</p>
        )}
      </div>
    </>
  );
}

export default App;
