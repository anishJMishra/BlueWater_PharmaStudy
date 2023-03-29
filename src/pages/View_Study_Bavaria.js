import React from 'react';
import Patients_Display from '../components/Patients_Display';

const View_Study = () => {
  return (

    <div>
      
      <div>URL: http://localhost:3000/View_Study</div>

      <div style={{textAlign: "left", fontSize: "12px"}}>
          <h1>Ongoing Study: Study_name</h1>
          <h1>Shipment History: [50] drug_name vs [50] Placebo Shipment Date</h1>
        </div>


          <Patients_Display />
      

      
    </div>
  )
}

export default View_Study