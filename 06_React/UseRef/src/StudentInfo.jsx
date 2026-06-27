import { useState } from "react";
function StudentInfo({ studentDetails }) {
  return (
    <>
      <div style={{
        border: "8px solid green",
        width: "400px",
        margin: "10px",
        padding: "10px",


      }}>
        <h3>Name:{studentDetails.name}</h3>
        <h3>Name:{studentDetails.email}</h3>
        <h3>Name:{studentDetails.city}</h3>
        <h3>Name:{studentDetails.roll}</h3>
      </div>
    </>
  )
}
export default StudentInfo;