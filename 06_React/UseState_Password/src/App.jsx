import { useState } from "react";
import "./App.css";
import { Eye, EyeOff } from "lucide-react";
function App() {

  const [showpass, setPass] = useState(false);
  return (
    <>
      <div>
        <input type={showpass ? "text" : "password"} placeholder="Enter Password" />
      </div>
      <div>
        <button onClick={() => setPass(!showpass)}>
          {showpass ? <Eye size={10} /> : <EyeOff size={10} />}
        </button>
      </div>
    </>
  )
}
export default App;