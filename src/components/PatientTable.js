import React from "react";
import "./PatientTable.css";

const PatientTable = ({ patients }) => {
  if (!Array.isArray(patients)) {
    return <div>No patient data available.</div>;
  }

  return (
    <table className="patient-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Insurance Number</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.name}</td>
            <td>{patient.dob}</td>
            <td>{patient.insuranceNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientTable;