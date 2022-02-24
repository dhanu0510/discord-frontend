import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import axios from "axios";

export default function Create() {
  const [student, setStudent] = useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: "",
  });

  const createStudentHandle = (e) => {
    axios.post("http://localhost:8000/student/create", student);
    console.log(student);
  };

  return (
    <>
      <h2>Create Student</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Reg. No."
          variant="outlined"
          value={student.regNo}
          onChange={(e) => setStudent({ ...student, regNo: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={student.studentName}
          onChange={(e) =>
            setStudent({ ...student, studentName: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Grade"
          variant="outlined"
          value={student.grade}
          onChange={(e) => setStudent({ ...student, grade: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Section"
          variant="outlined"
          value={student.section}
          onChange={(e) => setStudent({ ...student, section: e.target.value })}
        />

        <Button variant="contained" onClick={createStudentHandle}>
          Add
        </Button>
      </Box>
    </>
  );
}
