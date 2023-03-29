import React, { useEffect, useState } from "react";
import useBavaria from '../hooks/useBavaria';

const PreviousVisits = () => {
  const { entities } = useBavaria();

  const [date, setDate] = useState(null);
  const [doseNumber, setDoseNumber] = useState(null);
  const [viralLoad, setViralLoad] = useState(null);
  const [notes, setNotes] = useState(null);

  let patientID = "01872013-240b-c3ac-ba6f-1e95e65d98d9";

  console.log(entities);

  const handleGetPatient = () => {
    entities.listOfVisits.get(patientID)
    .then((response) => {
      console.log("PreviousVists.js Data: ", response);
      setDate(response.dateTime);
      setDoseNumber("xx");
      setViralLoad(response.hivViralLoad);
      setNotes(response.notes);
    })
    .catch((error) => {
      console.error(error);
    });
}

  useEffect(() => {
    handleGetPatient();
  }, []);

  return (
    <div style={{ border: "1px solid black", margin: "2em", padding: "3em", float: "right"  }}>
      <h3 >Previous Visits</h3>
        <div style={{ border: "1px solid black", margin: "3em" }}>
          <div>Date: {date}</div>
          <div>Dose Number: {doseNumber}</div>
          <div style={{backgroundColor: "red"}}>Viral Load: {viralLoad}</div>
          <div style={{ marginTop: "20px" }}>
            <h4 style={{backgroundColor: "red"}}>Notes</h4>
            <div>{notes}</div>
          </div>
        </div>

        <h4>patientID: {patientID}</h4>
    </div>
  )
};

export default PreviousVisits;