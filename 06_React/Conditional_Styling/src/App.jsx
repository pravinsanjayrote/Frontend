import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
function App() {

  const [divstyle, setDivStyle] = useState({
    border: "2px solid green",
    width: "300px",
    margin: "10px",
  });

  const [textcolor, setTextColor] = useState("black");

  const [grid, setGrid] = useState(true);
  const updateTheme = (bgcolor, textcolor) => {
    setDivStyle({ ...divstyle, backgroundColor: bgcolor });
    setTextColor(textcolor);
  }

  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "black" }}> How to Apply CSS in React</h1>
      <button onClick={() => updateTheme("black", "red")}>Gray Theme</button>
      <button onClick={() => updateTheme("white", "black")}>Default Theme</button>
      <button onClick={() => setGrid(!grid)}>Toggle Display</button>
      <div style={{ display: grid ? "flex" : "block" }}>
        <div style={divstyle}>
          <img style={{ width: "300px" }} src="/src/assets/hero.png" alt="" />
          <div style={{ color: textcolor }}>
            <h4>Pravin</h4>
            <p>The Programmer</p>
          </div>
        </div>

        <div style={divstyle}>
          <img style={{ width: "300px" }} src="/src/assets/hero.png" alt="" />
          <div style={{ color: textcolor }}>
            <h4>Rahul</h4>
            <p>The Developer</p>
          </div>
        </div>

        <div style={divstyle}>
          <img style={{ width: "300px" }} src="/src/assets/hero.png" alt="" />
          <div style={{ color: textcolor }}>
            <h4>Lakshay</h4>
            <p>The Network</p>
          </div>
        </div>

      </div>
    </>
  );
}
export default App;