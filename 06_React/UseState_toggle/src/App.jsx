import { useState } from "react";
import "./App.css";
import Admin from "./Admin";
import User from "./User";
function App() {

  const [role, setRole] = useState("user");//default role is user
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        {
          role === "admin" ? <Admin /> : <User />
        }
        <button onClick={() => setRole(role === "admin" ? "user" : "admin")}>
          Switch To: {(role === "admin" ? "Admin" : "User")}</button>
      </div>
    </>
  )
}
export default App;