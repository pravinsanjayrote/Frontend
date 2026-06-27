import { useState } from "react";
import "./App.css";
import { Eye, EyeOff } from "lucide-react";
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
      <table border="3">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default App;