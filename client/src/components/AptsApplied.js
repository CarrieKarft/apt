import React, {useContext} from "react";
import { useParams, NavLink } from "react-router-dom";
import Apartment from "./Apartment";
import { UserContext } from "../context/UserContext";

function AptsAppliedTo() {
    const {currentUser} = useContext(UserContext)
    const {apartments} = currentUser
    if(!currentUser) return <h2>Loading...</h2>
    if (apartments.length < 1) return <p>Looks like you haven't applied to any apartments yet. Click here to view new listings</p>
    // console.log("currentUser", currentUser)
    const mappingUserApartments = currentUser.apartments.map((apartment, index) => {
        return (
            <div key={index}>
                <Apartment apartment={apartment} />
                <NavLink to={`/appartment/${apartment.id}/application`}>click here to view your completed application for {apartment.name}</NavLink>
            </div>
        )
    })
    return (
        <div>
            <h2 style={{color: "red"}}>AptsAppliedTo</h2>
            {/* click on appartment to view applicaiton? */}
            {mappingUserApartments}
        </div>
    )
}

export default AptsAppliedTo;