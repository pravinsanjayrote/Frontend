import { useState } from "react";
import "./App.css";
import StudentInfo from "./StudentInfo";
function App() {

  const studentData = [
    {
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      city: "Mumbai",
      roll: "101",
    },
    {
      name: "Priya Verma",
      email: "priya.verma@example.com",
      city: "Pune",
      roll: "102",
    },
    {
      name: "Rohan Patil",
      email: "rohan.patil@example.com",
      city: "Bangalore",
      roll: "103",
    },
    {
      name: "Sneha Gupta",
      email: "sneha.gupta@example.com",
      city: "Delhi",
      roll: "104",
    },
    {
      name: "Vikram Joshi",
      email: "vikram.joshi@example.com",
      city: "Chennai",
      roll: "105",
    },
  ];
  return (
    <>
      {
        studentData.map((student) => (
          <StudentInfo studentDetails={student}></StudentInfo>
        ))
      }

    </>
  )
}
export default App;