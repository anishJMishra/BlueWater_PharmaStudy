import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AddPatient = ({ onAddPatient }) => {
  const [name, setName] = useState("");
  const [insuranceNumber, setInsuranceNumber] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPatient({ name, insuranceNumber, dob });

    // Reset input fields after submission
    setName("");
    setInsuranceNumber("");
    setDob("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" p ={2} flexDirection="column" gap={2} width="100%" padding={2}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Insurance Number"
          variant="outlined"
          value={insuranceNumber}
          onChange={(e) => setInsuranceNumber(e.target.value)}
          required
        />
        <TextField
          label="Date of Birth"
          type="date"
          variant="outlined"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Add Patient
        </Button>
      </Box>
    </form>
  );
};

export default AddPatient;
