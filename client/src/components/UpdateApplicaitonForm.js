import { useState } from 'react'
import React from 'react';

function UpdateApplicationForm({ handleUpdatingUserApplication, application, apartmentId }) {
    const { applicant_email, applicant_name, current_residence_address, current_residence_phone, yearly_income, user_id, id } = application
    // console.log(application)

    const [applicantEmail, setApplicantEmail] = useState("");
    const [applicantName, setApplicantName] = useState("")
    const [currentResidenceAddress, setCurrentResidenceAddress] = useState("");
    const [currentResidencePhone, setCurrentResidencePhone] = useState("");
    const [yearlyIncome, setYearlyIncome] = useState("");


    // console.log(completedApplication)
    function createUpdateApplicationObj(e) {
        e.preventDefault()
        const updatedApplicationObj = {
            id,
            user_id,
            applicant_email: applicantEmail,
            applicant_name: applicantName,
            current_residence_address: currentResidenceAddress,
            current_residence_phone: current_residence_phone,
            yearly_income: yearlyIncome,
            apartment_id: apartmentId
        }
        handleUpdatingUserApplication(updatedApplicationObj)
    }
    return (
        // prefil input fields with application data passes down as props from completed application
        <div>
            <h2 style={{color: "red"}}>UpdateApplicationForm</h2>
            <form onSubmit={e => createUpdateApplicationObj(e)}>
            <lable>Full Name: 
                    <input 
                    type="text"
                    value={applicantName}
                    onChange={e => setApplicantName(e.target.value)}
                    ></input>
                </lable>
                <lable>Email: 
                    <input 
                    type="text"
                    value={applicantEmail}
                    onChange={e => setApplicantEmail(e.target.value)}
                    ></input>
                </lable>
                <lable>Yearly Income: 
                    <input 
                    type="text"
                    value={yearlyIncome}
                    onChange={e => setYearlyIncome(e.target.value)}
                    ></input>
                </lable>
                <lable>Current Residence Phone: 
                    <input 
                    type="text"
                    value={currentResidencePhone}
                    onChange={e => setCurrentResidencePhone(e.target.value)}
                    ></input>
                </lable>
                <lable>Current Residence Address: 
                    <input 
                    type="text"
                    value={currentResidenceAddress}
                    onChange={e => setCurrentResidenceAddress(e.target.value)}
                    ></input>
                </lable>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default UpdateApplicationForm;