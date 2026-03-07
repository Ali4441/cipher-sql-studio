import "./App.css";
import AssignmentsCard from "./componets/AssignmentsCard/AssignmentsCard";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/assignments`)
      .then((res) => {
        setAssignments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AssignmentsCard assignments={assignments} />
    </>
  );
}

export default App;