import React, {useContext} from "react";
import Apartment from "./Apartment";
import { UserContext } from "../context/UserContext";

function AptsAppliedTo() {
    const {currentUser} = useContext(UserContext)
    if(!currentUser) return <h2>Loading...</h2>
    console.log("currentUser", currentUser)
    const mappingUserApartments = currentUser.apartments.map((apartment, index) => {
        return <Apartment key={index} apartment={apartment} />
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