import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Login from "./Login";
import Admin from "./Admin";
import Employee from "./Employee";
import Freelancer from "./Freelancer";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/login" element={<Login />}>
        <Route path="admin" element={<Admin />} />
        <Route path="employee" element={<Employee />} />
        <Route path="freelancer" element={<Freelancer />} />
      </Route>

      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;