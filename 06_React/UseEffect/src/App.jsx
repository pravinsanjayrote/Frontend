import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
function App() {

  const [data, setData] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    hello();
  }, [counter]);

  function hello() {
    console.log("Learning useEffect...");
  }

  return (
    <>
      <button onClick={() => setData(data + 1)}>Data Button {data}</button>
      <button onClick={() => setCounter(counter + 1)}>Counter Button {counter}</button>
    </>
  )
}
export default App;