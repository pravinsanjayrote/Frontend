import User from "./City";
function App() {

  let userDetail = {
    userName: "Pravin Rote",
    age: 29,
    city: "Nashik"
  }
  return (
    <>
      <User user={userDetail} />
    </>
  );
}
export default App;