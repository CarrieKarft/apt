import React, {useContext} from "react";
import { useParams, NavLink } from "react-router-dom";
import Apartment from "./Apartment";
import { UserContext } from "../context/UserContext";

function AptsAppliedTo() {
    const {currentUser} = useContext(UserContext)
    const {unique_apartments} = currentUser
    if(!currentUser) return <h2>Loading...</h2>
    if (unique_apartments.length < 1) return <p>Looks like you haven't applied to any apartments yet. Click here to view new listings</p>
    // console.log("currentUser", currentUser)
    const mappingUserApartments = currentUser.unique_apartments.map((apartment, index) => {
        return (
            <div key={index}>
                <Apartment apartment={apartment} />
                <NavLink to={`/appartment/${apartment.id}/application`}>click here to view your completed applications for {apartment.name}</NavLink>
            </div>
        )
    })
    return (
        <div>
            <h2 style={{color: "red"}}>AptsAppliedTo</h2>
            {/* click on appartment to view application? */}
            {mappingUserApartments}
        </div>
    )
}

export default AptsAppliedTo;