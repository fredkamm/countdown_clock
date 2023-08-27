import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import DarkMode from "./components/helpers/DarkMode";
import Clock from "./components/Clock";
import Body from "./components/Body";

function App() {
  return (
    <div className="container mx-auto">
      <DarkMode />
      <Clock />
      <Body />
    </div>
  );
}

export default App;
