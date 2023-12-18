import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateApplicationForm from "./UpdateApplicaitonForm";

function CompletedAppliction({ handleUpdatingUserApplication, handleApplicationDelete, application, setApplication }) {
    // const [application, setApplication] = useState({});
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        fetch(`/applications/${id}`)
        .then((r) => r.json())
        .then(applicaitonData => setApplication(applicaitonData))
            // if(r.ok) {
            //     r.json().then((applicationData) => console.log(applicationData))
            // }
            // } else {
            //     r.json().then((errorData) => console.log(errorData.errors))
            // }
        // })
    }, [id])
    console.log("THIS IS APPLICATION OUTPUT", application)
    if (!application) return <h2>Loading...</h2>
    // const {apartment_id, applicant_email, applicant_name, current_residence_address, current_residence_phone, yearly_income, user_id} = application
    const mappingApps = application.map((app, index) => {
        return (
            <div key={index}>
            {/* fetch request will get application info from application#show */}
            {/* How will I get appartment name? */}
            {/* might be accessing applications through appartments instead of user */}
            {/* <h1>Completed Appliction</h1> */}
            <h3>Applicant Name: {app.applicant_name}</h3>
            <h4>Applicant Email: {app.applicant_email}</h4>
            <h4>Applicant Phone: </h4>
            <h4>Yearly Income: {app.yearly_income}</h4>
            <h4>Current Residence Address: {app.current_residence_address}</h4>
            <h4>Current Residence Phone: {app.current_residence_phone}</h4>
            <button>Update</button>
            {/* when user hits update render <UpdateApplictionForm */}
            <button onClick={() => handleApplicationDelete(id)}>Delete</button>
            <UpdateApplicationForm application={app} handleUpdatingUserApplication={handleUpdatingUserApplication} appartmentId={id}/>
        </div>
        )
    })
    return (
        <div>
        <h1>Completed Applictions</h1>
        {mappingApps}
        </div>
        // <div>
        //     {/* fetch request will get application info from application#show */}
        //     {/* How will I get appartment name? */}
        //     {/* might be accessing applications through appartments instead of user */}
        //     <h1>Completed Appliction</h1>
        //     <h3>Appartment Name: {applicant_name}</h3>
        //     <h4>Applicant Email: {applicant_email}</h4>
        //     <h4>Applicant Phone: </h4>
        //     <h4>Yearly Income: {yearly_income}</h4>
        //     <h4>Current Residence Address: {current_residence_address}</h4>
        //     <h4>Current Residence Phone: {current_residence_phone}</h4>
        //     <button>Update</button>
        //     {/* when user hits update render <UpdateApplictionForm */}
        //     <button onClick={() => handleApplicationDelete(id)}>Delete</button>
        //     <UpdateApplicationForm application={application} handleUpdatingUserApplication={handleUpdatingUserApplication} appartmentId={id}/>
        // </div>
    )
}

// t.integer "appartment_id"
//     t.integer "user_id"
//     t.string "applicant_name"
//     t.string "current_residence_phone"
//     t.string "current_residence_address"
//     t.string "yearly_income"
//     t.string "applicant_email"

export default CompletedAppliction;