import { Link } from "react-router";
import "./header.css";
function NavBar() {
  return (
    <>
      <div className="header">
        <div>
          <Link className="link" to={"/"}>
            <h2>Company Logo</h2>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/login"}>LOGIN</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavBar;