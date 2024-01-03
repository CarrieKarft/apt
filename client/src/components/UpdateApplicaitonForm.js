import { useState } from 'react'
import React from 'react';


function UpdateApplicationForm({ handleUpdatingUserApplication, app, setIsClicked }) {
    const { applicant_email, applicant_name, current_residence_address, current_residence_phone, yearly_income, id } = app

    const [applicantEmail, setApplicantEmail] = useState(applicant_email);
    const [applicantName, setApplicantName] = useState(applicant_name)
    const [currentResidenceAddress, setCurrentResidenceAddress] = useState(current_residence_address);
    const [currentResidencePhone, setCurrentResidencePhone] = useState(current_residence_phone);
    const [yearlyIncome, setYearlyIncome] = useState(yearly_income);



    function createUpdateApplicationObj(e) {
        e.preventDefault()
        const updatedApplicationObj = {
            id,
            applicant_email: applicantEmail,
            applicant_name: applicantName,
            current_residence_address: currentResidenceAddress,
            current_residence_phone: currentResidencePhone,
            yearly_income: yearlyIncome,
            apartment_id: app.apartment_id
        }
        handleUpdatingUserApplication(updatedApplicationObj)
        setIsClicked(false)
    }
    return (
        <div>
            <h2 style={{color: "#12406A"}}>UpdateApplicationForm</h2>
            <form onSubmit={e => createUpdateApplicationObj(e)}>
            <label>Full Name: 
                    <input 
                    type="text"
                    value={applicantName}
                    onChange={e => setApplicantName(e.target.value)}
                    ></input>
                </label>
                <label>Email: 
                    <input 
                    type="text"
                    value={applicantEmail}
                    onChange={e => setApplicantEmail(e.target.value)}
                    ></input>
                </label>
                <label>Yearly Income: 
                    <input 
                    type="text"
                    value={yearlyIncome}
                    onChange={e => setYearlyIncome(e.target.value)}
                    ></input>
                </label>
                <label>Current Residence Phone: 
                    <input 
                    type="text"
                    value={currentResidencePhone}
                    onChange={e => setCurrentResidencePhone(e.target.value)}
                    ></input>
                </label>
                <label>Current Residence Address: 
                    <input 
                    type="text"
                    value={currentResidenceAddress}
                    onChange={e => setCurrentResidenceAddress(e.target.value)}
                    ></input>
                </label>
                <input type="submit"></input>
            </form>
            <button onClick={() => setIsClicked(false)}>Hide Edit Form</button>
        </div>
    )
}

export default UpdateApplicationForm;