import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TopBanner from "../components/TopBanner";
import AddPatient from "../components/AddPatient";
import useJaneHopkins from "../hooks/useJaneHopkins";
import PatientTable from "../components/PatientTable";
import { Button, Stack, Typography, Box } from "@mui/material";
import SideBanner from "../components/SideBanner";
import PatientDisplay from "../components/PatientDisplay";
import { ApolloProvider } from "@apollo/client";
import client from "../components/apolloClient";
import { useNavigate } from "react-router-dom";


const JaneHopkinsDoctor = () => {
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
  
   
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  }
    const handleAddPatient = async (patientData) => {
      await addPatient(patientData);
    };

  return (
    <div>
      
    <TopBanner />
    <Navbar onLogout={handleLogout} />
    <Stack direction="row">
      <SideBanner />
      <Typography >Add Patient</Typography>
      <AddPatient onAddPatient={handleAddPatient} />
    </Stack>
    <h1>Patient List</h1>
    <Button>View Patients</Button>
    <PatientTable patients={patients} />
    <ApolloProvider client = {client}>
    <PatientDisplay />
    </ApolloProvider>
  </div>
  )
}

export default JaneHopkinsDoctor;