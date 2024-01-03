import React, {useContext} from "react";
import Appartment from "./Apartment";
import {ApartmentContext} from "../context/ApartmentContext"
import { NavLink } from "react-router-dom";


function AppartmentsListingPage() {
    const {apartments} = useContext(ApartmentContext);

    const mappingAppartentListings = apartments.map(apartment =>{
        return <Appartment key={apartment.id} apartment={apartment}/>
    })

    return (
        <div className="aptsDiv">
            <h1>Luxury Apratments Available For Rent</h1>
            <div className="NavDiv">
                <NavLink to='/user-profile'><button>View User Profile</button></NavLink>
                <NavLink to='/apartments/new'><button>Create A New Listing</button></NavLink>
            </div>
            <div className="aptsDiv">
            {mappingAppartentListings}
            </div>
        </div>
    )
}

export default AppartmentsListingPage;