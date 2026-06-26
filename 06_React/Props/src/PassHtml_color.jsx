function PassHtml({ children }) {
  return (
    <>
      <div style={{
        color: "green",
        border: "5px solid red",
        width: "1000px",
        margin: "10px"
      }}>
        {children}
      </div>
    </>);
}
export default PassHtml;