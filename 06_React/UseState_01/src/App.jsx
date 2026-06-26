import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(1);
  let increaseValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("Value of counter is: " + counter);
  };
  let decreaseValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log("Value of counter is: " + counter);
  };
  return (
    <>
      <h2>Value is:{counter}</h2>
      <button onClick={increaseValue}>Count++</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Count--</button>

    </>
  )
}
export default App;