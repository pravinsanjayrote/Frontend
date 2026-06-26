import { Link, Outlet } from "react-router-dom";
function Users() {
    const userList = [
        { id: 1, name: "Pravin Rote" },
        { id: 2, name: "Rahul Dive" },
        { id: 3, name: "Prashant Rajput" },
    ];
    return (
        <>
            <div>
                <h2>Users List:</h2>
                <ul>
                    {userList.map((user) => (
                        <li key={user.id}>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default Users;