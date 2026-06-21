import { Link } from "react-router";
function PageNotFound() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Page Not Found !!! 404 Error!</h1>
      <Link to={"/"}>Go Back to Home Page!!</Link>
    </>
  );
}
export default PageNotFound;