import { useState } from "react";
import "./App.css";
function App() {

  const mystyle = {
    color: "red",
    backgroundColor: "black",
    fontFamily: "arial",
    padding: "10px",
  };
  return (
    <>
      <h1 style={mystyle}>How to apply CSS in React</h1>
    </>
  )
}
export default App;