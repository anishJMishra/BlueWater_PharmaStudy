import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const MY_QUERY = gql`
  query MyQuery {
    list_PatientItems(limit: 25) {
      items {
        name
        dob
        insuranceNumber
      }
    }
  }
`;

const PatientDisplay = () => {
  const { loading, error, data } = useQuery(MY_QUERY);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    if (data && data.list_PatientItems) {
      setPatients(data.list_PatientItems.items);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Patient List</h1>
      {patients.length === 0 && <p>No patient data available.</p>}
      {Array.isArray(patients) && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Insurance Number</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.dob}</td>
                <td>{patient.insuranceNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PatientDisplay;