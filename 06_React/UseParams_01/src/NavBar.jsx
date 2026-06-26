import { Link, Outlet } from "react-router-dom"

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
                        <li>
                            <Link to={"/user"}>USERS</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}
export default NavBar;