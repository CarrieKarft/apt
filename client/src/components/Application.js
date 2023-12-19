import React from "react";
import UpdateApplicationForm from "./UpdateApplicaitonForm";

function Appliction({app, id, handleApplicationDelete, handleUpdatingUserApplication }) {
    const {apartment_id} = app
    return (
        <div>
        {/* How will I get appartment name? */}
        <h3>Applicant Name: {app.applicant_name}</h3>
        <h4>Applicant Email: {app.applicant_email}</h4>
        <h4>Applicant Phone: </h4>
        <h4>Yearly Income: {app.yearly_income}</h4>
        <h4>Current Residence Address: {app.current_residence_address}</h4>
        <h4>Current Residence Phone: {app.current_residence_phone}</h4>
        {/* <button>Update</button> */}
        {/* when user hits update render <UpdateApplictionForm */}
        <button onClick={() => handleApplicationDelete(id, apartment_id)}>Delete</button>
        <button>Update</button>

        <UpdateApplicationForm application={app} handleUpdatingUserApplication={handleUpdatingUserApplication} />
    </div>
    )
}

export default Appliction;