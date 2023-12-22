import React, {useState} from "react";
import UpdateApplicationForm from "./UpdateApplicaitonForm";

function Appliction({app, id, handleApplicationDelete, handleUpdatingUserApplication }) {
    const [isClicked, setIsClicked] = useState(false)
    console.log(app)
    const {apartment_id} = app
    return (
        <div className='mappedDiv'>
        <h3>Applicant Name: {app.applicant_name}</h3>
        <h4>Applicant Email: {app.applicant_email}</h4>
        <h4>Yearly Income: {app.yearly_income}</h4>
        <h4>Current Residence Address: {app.current_residence_address}</h4>
        <h4>Current Residence Phone: {app.current_residence_phone}</h4>

        <button onClick={() => handleApplicationDelete(id, apartment_id)}>Delete</button>
        <button onClick={() => setIsClicked(true)}>Update</button>
        <div style={{display: isClicked ? null : "none"}}>
            <UpdateApplicationForm app={app} handleUpdatingUserApplication={handleUpdatingUserApplication} setIsClicked={setIsClicked}/>
        </div>
    </div>
    )
}

export default Appliction;