import React, {useContext} from "react";
import Appartment from "./Apartment";
import {ApartmentContext} from "../context/ApartmentContext"

function AppartmentsContainer() {
    // fetch to grab appartments from appartments#index then map to render Appartment component
    const {apartments} = useContext(ApartmentContext);
    console.log(apartments)

    const mappingAppartentListings = apartments.map(apartment =>{
        return <Appartment key={apartment.id} apartment={apartment}/>
    })

    return (
        <div>
            <h1>AppartmentsContainer</h1>
            {mappingAppartentListings}
        </div>
    )
}

export default AppartmentsContainer;