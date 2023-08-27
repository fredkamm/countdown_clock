import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import DarkMode from "./components/helpers/DarkMode";
import Clock from "./components/clock";
import Body from "./components/body";

function App() {
  return (
    <>
      <DarkMode />
      <Clock />
      <Body />
    </>
  );
}

export default App;
