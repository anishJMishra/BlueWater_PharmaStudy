import React, { useState } from 'react';


const Send_Samples = () => {
  return (
    <div>
        <div style={{textAlign: "center", marginTop: "10em"}}>
            <h3>Ongoing Study: Study_name</h3>

            <div>
                <label htmlFor="input-box">Shipment History: </label>
                <input
                    type="text"
                    id="input-box"
                    value={"Entry Box"}
                    onChange={"adf"}
                />

                <label htmlFor="input-box"> drug_name vs </label>
                <input
                    type="text"
                    id="input-box"
                    value={"Entry Box"}
                    onChange={"adf"}
                />
                <h3> Placebo </h3>

                <button>Confirm Order Shipment</button>
            </div>
        </div>
    </div>
  )
}

export default Send_Samples