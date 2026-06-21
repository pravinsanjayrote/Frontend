import { NavLink, Outlet } from "react-router-dom";
import "./header.css";

function Login() {
  return (
    <div className="main" style={{ textAlign: "center" }}>
      <h1>Login Page For</h1>

      <NavLink className="link" to="/">
        Go Back To Home Page
      </NavLink>
      <NavLink className="link" to="admin">
        ADMIN
      </NavLink>

      <NavLink className="link" to="employee">
        EMPLOYEE
      </NavLink>

      <NavLink className="link" to="freelancer">
        FREELANCER
      </NavLink>

      <Outlet />
    </div>
  );
}

export default Login;