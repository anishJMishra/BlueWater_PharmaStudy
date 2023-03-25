import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import AddPatient from "./components/AddPatient";
import useJaneHopkins from "./hooks/useJaneHopkins";
import PatientTable from "./components/PatientTable";
import { Button } from "@mui/material";

function App() {
  const { entities } = useJaneHopkins();

  console.log("Entities in App:", entities);
  console.log("Patient entity:", entities.patient);

  const addPatient = async (patientData) => {
    const { name, dob, insuranceNumber } = patientData;
    const addPatientResponse = await entities.patient.add({
      name: name,
      dob: dob,
      insuranceNumber: insuranceNumber,
    });
    console.log(addPatientResponse);
  };


  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await entities.patient.list();
        setPatients(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatients();
  }, []);

  const handleAddPatient = async (patientData) => {
    await addPatient(patientData);
  };

  return (
    <div>
      <TopBanner />
      <Navbar />
      <h1>Add Patient</h1>
      <AddPatient onAddPatient={handleAddPatient} />
      <h1>Patient List</h1>
      <Button >View Patients</Button>
      <PatientTable patients={patients} />
    </div>
  );
}

export default App;
