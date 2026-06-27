import { useRef } from "react";
import styled from "styled-components";

function App() {
  const MyButton = styled.button`
    background-color: blue;
    color: white;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: darkblue;
    }
  `;

  const h1ref = useRef(null);

  const changeText = () => {
    console.log("Hello...");
    h1ref.current.innerText = "Hi Everyone...";
  };

  const changeColor = () => {
    h1ref.current.style.color = "red";
  };

  const changeBackgroundColor = () => {
    h1ref.current.style.backgroundColor = "black";
    h1ref.current.style.color = "white";
  };

  const changeStyle = () => {
    h1ref.current.style.padding = "10px";
    h1ref.current.style.borderRadius = "10px";
    h1ref.current.style.width = "350px";
    h1ref.current.style.textAlign = "center";
  };

  return (
    <>
      <h1 ref={h1ref}>We are Learning useRef!!!</h1>

      <MyButton onClick={changeText}>
        Click To Change The Text
      </MyButton>

      <MyButton onClick={changeColor}>
        Click To Change The Text Color
      </MyButton>

      <MyButton onClick={changeBackgroundColor}>
        Click To Change The Background Color
      </MyButton>

      <MyButton onClick={changeStyle}>
        Click To Change Style
      </MyButton>
    </>
  );
}

export default App;