import React, { useEffect, useState } from "react";
import useBavaria from '../hooks/useBavaria';

const PatientListArray = [
  { key: "Name (first & last)", bgColor: "yellow" },
  { key: "Patient Picture", bgColor: "yellow" },
  { key: "DOB" },
  { key: "Insurance number", bgColor: "yellow" },
  { key: "Height" },
  { key: "Weight" },
  { key: "Blood Pressure" },
  { key: "Blood type" },
  { key: "Temperature" },
  { key: "Oxygen Saturation" },
  { key: "UUID" },
  { key: "Address", bgColor: "yellow" },
  { key: "Allergies" },
  { key: "Current medications" },
  { key: "Family history" },
  { key: "Currently employed" },
  { key: "Currently insured" },
  { key: "ICD health codes" },
];

const PatientDisplay = () => {
  const { entities } = useBavaria();
  const [patientData, setPatientData] = useState(null);

  const [patientName, setPatientName] = useState(null);
  const [patientPicture, setPatientPicture] = useState(null);
  const [patientDob, setPatientDob] = useState(null);
  const [patientInsuranceNumber, setPatientInsuranceNumber] = useState(null);
  const [patientHeight, setPatientHeight] = useState(null);
  const [patientWeight, setPatientWeight] = useState(null);
  const [patientBloodPressure, setPatientBloodPressure] = useState(null);
  const [patientBloodType, setPatientBloodType] = useState(null);
  const [patientTemperature, setPatientTemperature] = useState(null);
  const [patientOxygenSaturation, setPatientOxygenSaturation] = useState(null);
  const [patientUuid, setPatientUuid] = useState(null);
  const [patientAddress, setPatientAddress] = useState(null);
  const [patientAllergies, setPatientAllergies] = useState(null);
  const [patientCurrentMedications, setPatientCurrentMedications] = useState(null);
  const [patientFamilyHistory, setPatientFamilyHistory] = useState(null);
  const [patientCurrentlyEmployed, setPatientCurrentlyEmployed] = useState(null);
  const [patientCurrentlyInsured, setPatientCurrentlyInsured] = useState(null);
  const [patientIcdHealthCodes, setPatientIcdHealthCodes] = useState(null);
  

// We don't need to add more:  We can use "get", "onRemove", "remove", etc. to get data from the entities.  See console.log(entities)
  /*const handleAddPatient = () => {
    return new Promise((resolve, reject) => {
      entities.patient.add(
        {
          name: "Bob",
          patientPicture: "BobPatient.png",
          dob: "01-31-1999",
          insuranceNumber: "666-666-6666",
          height: "300cm",
          weight: "375kg",
          bloodPressure: "120",
          bloodType: "B+",
          temperature: "102",
          oxygenSaturation: "97",
          uuid: "acde070d-8c4c-4f0d-9d8a-162843c10333",
          address: "1234 NW Bobcat Lane, St. Robert, MO 65584-5678",
          allergies: [ { "allergy": "PBJ" } ],
          currentMedications: [ { "medication": "N/A" } ],
          familyHistory: "PBJ allgergies",
          currentlyEmployed: "Y",
          currentlyInsured: "Y",
          icdHealthCodes: [ { "code": "adf" } ]
        }, ACL is just for filtering, let's comment it out for now until we fix the error
        {
          aclInput: {
            acl: [
              {
                principal: {
                  nodes: ["Bavaria", "FDA"],
                },
                operations: [
                  "READ",
                ],
                path: "dob.height.weight.bloodPressure.bloodType.temperature.oxygenSaturation.UUID.allergies.currentMedications.familyHistory.currentlyEmployed.currentlyInsured.icdHealthCodes",
              },
            ],
          }},
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };
  

  handleAddPatient() //Just some promise with useEffect
  .then((response) => {
    console.log("data2: ", response);
  })
  .catch((error) => {
    console.error(error);
  });
  
  useEffect(() => {
    handleAddPatient()
      .then((response) => {
        setPatientData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);*/

  //....

  //console.log("entities", entities);
  //console.log("entities.patient", entities.patient.get("01871fa8-7096-1f83-ba94-8363279ddf71", "address"));
  // ^ this is my attempt at retreving the address of the entities > patient > address.  .then() and .catch is necessery.
  
  let patientID = "01871ff3-7d6a-2254-7039-b1355d8b2834";

  const handleGetPatient = () => {
    entities.patient.get(patientID)
    .then((response) => {
      console.log("PatientDisplay.js Data: ", response);
      setPatientName(response.name);
      setPatientPicture(response.picture);
      setPatientAddress(response.address);
      setPatientDob(response.dob);
      setPatientInsuranceNumber(response.insuranceNumber);
      setPatientHeight(response.height);
      setPatientWeight(response.weight);
      setPatientBloodPressure(response.bloodPressure);
      setPatientBloodType(response.bloodType);
      setPatientTemperature(response.temperature);
      setPatientOxygenSaturation(response.oxygenSaturation);
      setPatientUuid(response.uuid);
      setPatientAllergies(response.allergies);
      setPatientCurrentMedications(response.currentMedications);
      setPatientFamilyHistory(response.familyHistory);
      setPatientCurrentlyEmployed(response.currentlyEmployed);
      setPatientCurrentlyInsured(response.currentlyInsured);
      setPatientIcdHealthCodes(response.icdHealthCodes);
    })
    .catch((error) => {
      console.error(error);
    });
}

useEffect(() => {
  handleGetPatient();
}, []);


  //console.log(patientData);

  if (!patientName) {
    return (
      <div style={{border: "1px solid black", padding: "10em", margin: "5em"}}>
              <td>No patient data available</td>
      </div>
    );
  } else {
    return (
      <div>
        <div style={{ float: "left", border: "1px solid black"}}>
        <div style={{ }}>
  {PatientListArray.map((item, index) => (
    <h3 key={index} style={{ backgroundColor: item.bgColor }}>
      {item.key === "Name (first & last)" && patientName !== null ? item.key + ": " + patientName : null}
      {item.key === "Patient Picture" && patientPicture !== null ? item.key + ": " + patientPicture : null}
      {item.key === "DOB" && patientDob !== null ? item.key + ": " + patientDob : null}
      {item.key === "Insurance number" && patientInsuranceNumber !== null ? item.key + ": " + patientInsuranceNumber : null}
      {item.key === "Height" && patientHeight !== null ? item.key + ": " + patientHeight : null}
      {item.key === "Weight" && patientWeight !== null ? item.key + ": " + patientWeight : null}
      {item.key === "Blood Pressure" && patientBloodPressure !== null ? item.key + ": " + patientBloodPressure : null}
      {item.key === "Blood type" && patientBloodType !== null ? item.key + ": " + patientBloodType : null}
      {item.key === "Temperature" && patientTemperature !== null ? item.key + ": " + patientTemperature : null}
      {item.key === "Oxygen Saturation" && patientOxygenSaturation !== null ? item.key + ": " + patientOxygenSaturation : null}
      {item.key === "UUID" && patientUuid !== null ? item.key + ": " + patientUuid : null}
      {item.key === "Address" && patientAddress !== null ? item.key + ": " + patientAddress : null}
      {item.key === "Allergies" && patientAllergies !== null ? item.key + ": " + patientAllergies : null}
      {item.key === "Current medications" && patientCurrentMedications !== null ? item.key + ": " + patientCurrentMedications : null}
      {item.key === "Family history" && patientFamilyHistory !== null ? item.key + ": " + patientFamilyHistory : null}
      {item.key === "Currently employed" && patientCurrentlyEmployed !== null ? item.key + ": " + patientCurrentlyEmployed : null}
      {item.key === "Currently insured" && patientCurrentlyInsured !== null ? item.key + ": " + patientCurrentlyInsured : null}
      {item.key === "ICD health codes" && patientIcdHealthCodes !== null ? item.key + ": " + patientIcdHealthCodes : null}
    </h3>
  ))}
  <h4>patientID: {patientID}</h4>
</div>


        </div>
      </div>
    );
  }
};

export default PatientDisplay;