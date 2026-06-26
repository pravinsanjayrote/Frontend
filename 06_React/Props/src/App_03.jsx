import User from "./City";
function App() {

  let userDetail1 = {
    userName: "Pravin Rote",
    age: 29,
    city: "Nashik"
  }

  let userDetail2 = {
    userName: "Rahul Chaudhari",
    age: 49,
    city: "Pune"
  }

  let userDetail3 = {
    userName: "Akansha Patil",
    age: 24,
    city: "Mumbai"
  }
  return (
    <>
      <User user={userDetail1} />
      <User user={userDetail2} />
      <User user={userDetail3} />
    </>
  );
}
export default App;