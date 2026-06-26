import { useState } from "react";
import "./App.css";
function App() {

  let [display, setDisplay] = useState(false);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Show/Hide</button>
      <h2>Toggle in React</h2>
      {display ? <h3>Pravin Rote</h3> : null}
    </>
  )
}
export default App;