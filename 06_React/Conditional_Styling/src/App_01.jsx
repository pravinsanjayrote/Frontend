import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
function App() {

  const [mystyle, setMyStyle] = useState({
    color: "red",
    backgroundcolor: "black",
    fontFamily: "arial",
    padding: "10px",
  });

  const divstyle = {
    border: "2px solid green",
    width: "300px",
    margin: "10px",
  }

  return (
    <>
      <h1 style={mystyle}> How to Apply CSS in React</h1>
      <h2 style={mystyle}> How to Apply CSS in React</h2>
      <div style={{ display: "flex" }}>
        <div style={divstyle}>
          <img style={{ width: "300px" }} src="./src/assets/DSC_0334.JPG" />
          <div>
            <h4>Pravin</h4>
            <p>The Programmer</p>
          </div>
        </div>

        <div style={divstyle}>
          <img style={{ width: "300px" }} src="./src/assets/DSC_0334.JPG" />
          <div>
            <h4>Rahul</h4>
            <p>The Developer</p>
          </div>
        </div>

        <div style={divstyle}>
          <img style={{ width: "300px" }} src="./src/assets/DSC_0334.JPG" />
          <div>
            <h4>Priya</h4>
            <p>The Devops Engineer</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;