import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import AddPatient from "./components/AddPatient";
import useJaneHopkins from "./hooks/useJaneHopkins";
import PatientTable from "./components/PatientTable";
import { Button, Stack, Typography, Box } from "@mui/material";
import SideBanner from "./components/SideBanner";
import PatientDisplay from "./components/PatientDisplay";
import { ApolloProvider } from "@apollo/client";
import client from "./components/apolloClient";
import JaneHopkinsDoctor from "./pages/JaneHopkinsDoctor";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/JaneHopkinsDoctor" element={<JaneHopkinsDoctor />} />
        </Routes>
      </ApolloProvider>
    </div>
  );
}

export default App;
