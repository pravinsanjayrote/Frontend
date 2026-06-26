function App() {
  let counter = 1;
  let increaseValue = () => {
    counter = counter + 1;
    console.log("Button Clicked.." + Math.random());
  };
  return (
    <>
      <button onClick={increaseValue}>Count++:{counter}</button>
      <p>value of counter is:{counter}</p>
    </>
  )
}
export default App;