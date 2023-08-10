import { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Body() {
  const [futureDate, setFutureDate] = useState("");
  const [timeDifference, setTimeDifference] = useState({});

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
      <div className="card">
        <input
          className="datetime-wrapper"
          type="datetime-local"
          value={futureDate}
          onChange={handleFutureDateChange}
        />
      </div>
      <div>
        <h2>Time Difference:</h2>
        {futureDate ? (
          <div>
            <p>Future Date: {futureDate}</p>
            <p>Milliseconds: {timeDifference.milliseconds}</p>
            <p>Seconds: {timeDifference.seconds}</p>
            <p>Minutes: {timeDifference.minutes}</p>
            <p>Hours: {timeDifference.hours}</p>
            <p>Days: {timeDifference.days}</p>
            <p>Weeks: {timeDifference.weeks}</p>
            <p>Months: {timeDifference.months}</p>
            <p>Years: {timeDifference.years}</p>
          </div>
        ) : (
          <p>Enter a future date above to calculate the difference.</p>
        )}
      </div>
    </>
  );
}
