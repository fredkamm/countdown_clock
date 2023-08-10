import "./App.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import Clock from "./components/clock";
import Body from "./components/body";

function App() {
  return (
    <>
      <Clock />
      <Body />
    </>
  );
}

export default App;
