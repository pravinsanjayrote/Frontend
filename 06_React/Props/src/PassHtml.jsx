function PassHtml({ children, color = "green" }) {
  console.log(color);

  return (
    <>
      <div style={{
        color,
        border: "5px solid red",
        width: "1000px",
        margin: "10px"
      }}>
        {children}
      </div>
    </>);
}
export default PassHtml;