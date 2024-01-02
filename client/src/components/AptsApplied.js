import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import Apartment from "./Apartment";
import { UserContext } from "../context/UserContext";

function AptsAppliedTo() {
    const {currentUser} = useContext(UserContext)
    const {unique_apartments} = currentUser
    if (unique_apartments.length < 1) return <p style={{color: "white"}}>Looks like you haven't applied to any apartments yet. Select 'Search For Apartments' Above To View New Listings</p>
    const mappingUserApartments = currentUser.unique_apartments.map((apartment, index) => {
        return (
            <div key={index} className='mappedDiv'>
                <Apartment apartment={apartment} />
                <NavLink to={`/appartment/${apartment.id}/applications`}>click here to view your completed applications for {apartment.name}</NavLink>
            </div>
        )
    })
    return (
        <div>
            <h2 style={{color: "white"}}>Apartments You've Applied To</h2>
            {mappingUserApartments}
        </div>
    )
}

export default AptsAppliedTo;