function User({ user }) {
  return (
    <>
      <div>
        <h2>Name is:{user.userName}</h2>
        <h2>Age is:{user.age}</h2>
        <h2>City is:{user.city}</h2>
      </div>
    </>);
}
export default User;