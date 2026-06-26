import { useState } from "react";
import "./App.css";
import Home from "./Home";
function App() {

  let [display, setDisplay] = useState(false);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Show/Hide</button>
      <h2>Toggle in React</h2>
      {display ? <Home /> : "Nothing to show!!!"}
    </>
  )
}
export default App;