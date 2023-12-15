import { useState } from 'react'
import React from 'react';

function UpdateApplicationForm({ handleUpdatingUserApplication, Application, apartmentId }) {
    const { applicant_email, applicant_name, current_residence_address, current_residence_phone, yearly_income, user_id} = Application
    console.log(Application)

    const [applicantEmail, setApplicantEmail] = useState(applicant_email);
    const [applicantName, setApplicantName] = useState(applicant_name)
    const [currentResidenceAddress, setCurrentResidenceAddress] = useState(current_residence_address);
    const [currentResidencePhone, setCurrentResidencePhone] = useState(current_residence_phone);
    const [yearlyIncome, setYearlyIncome] = useState(yearly_income);


    // console.log(completedApplication)
    function createUpdateApplicationObj(e) {
        e.preventDefault()
        const updatedApplicationObj = {
            user_id,
            applicant_email: applicantEmail,
            applicant_name: applicantName,
            current_residence_address: currentResidenceAddress,
            current_residence_phone: current_residence_phone,
            yearly_income: yearlyIncome,
            apartment_id: apartmentId
        }
        console.log(updatedApplicationObj)
    }
    return (
        // prefil input fields with applicaiton data passes down as props from completed application
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