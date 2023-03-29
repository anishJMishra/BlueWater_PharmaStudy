import React from 'react';
import PreviousVisits from '../components/PreviousVisits';
import PatientDisplay from '../components/PatientDisplay';

const Patients = () => {
  return (

    <div>
      
      <div>URL: http://localhost:3000/Patients</div>
      
      <div style={{fontSize: "12px"}}>
          <PatientDisplay/>

      </div>

      <div>
        <PreviousVisits />
      </div>
      
    </div>
  )
}

export default Patients