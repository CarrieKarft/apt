import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UpdateApplicationForm from "./UpdateApplicaitonForm";
import Appliction from "./Application";
import { NavLink } from "react-router-dom";
import {ApartmentContext} from "../context/ApartmentContext"
import {UserContext} from "../context/UserContext"

function CompletedAppliction({ handleUpdatingUserApplication, handleApplicationDelete }) {

    const {apartments} = useContext(ApartmentContext);
    const {currentUser} = useContext(UserContext);
    const {id} = useParams();

    const currentApt = apartments.find(apt => apt.id == id)

    if (!currentApt) return <h2>Loading...</h2>
    // console.log(currentApt)
    const filteringForUser = currentApt.applications.filter(app => app.user_id === currentUser.id)
    // console.log(filteringForUser)
 
    const mappingApps = filteringForUser.map((app, index) => {
        return <Appliction app={app} id={app.id} key={index} handleApplicationDelete={handleApplicationDelete} handleUpdatingUserApplication={handleUpdatingUserApplication}/>
    })

    return (
        <div>
        <h1>Completed Applictions</h1>
        {mappingApps}
        </div>
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