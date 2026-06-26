import { Link, useParams } from "react-router-dom";
function UserDetail() {
    const { id } = useParams();
    return (
        <>
            <div className="main">
                <Link className="link" to={"/user"}>Go Back To User's Page!!!</Link>
            </div>
            <div>
                <h2>User Detail</h2>
                <p>
                    You are viewing Detail of user id <strong>{id}</strong>
                </p>
            </div>
        </>
    );

};
export default UserDetail;