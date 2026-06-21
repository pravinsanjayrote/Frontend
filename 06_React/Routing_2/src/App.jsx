import { Routes, Route, Link } from "react-router";
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
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}>
          <Route path="admin" element={<Admin />} />
          <Route path="employee" element={<Employee />}></Route>
          <Route path="freelancer" element={<Freelancer />}></Route>
        </Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}
export default App;