import City from "./City";
function App() {
  const cities = ['Pune', 'Mumbai', 'Chennai', 'Banglore', 'Noida']
  return (
    <>
      <City cities={cities} />
    </>
  );
}
export default App;