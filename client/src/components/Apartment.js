import React from "react";
import {NavLink} from 'react-router-dom';

function Apartment({ apartment }) {
    const {id, name, address, phone, number_of_rooms, parking_available, monthly_rent, pets_allowed, available_to_rent} = apartment

    return (
        <div>
            <div className='mappedDiv'>
                <div className="HeaderDiv">
                    <h3>{name}</h3>
                    <h4>{address}</h4>
                    <h4>{phone}</h4>
                </div>
                <div className="MoreInfo">
                    <p>Number of bedrooms: {number_of_rooms}</p>
                    <p>{parking_available ? "Parking is available" : null}</p>
                    <p>Monthly rent: {monthly_rent}</p>
                    <p>{pets_allowed}</p>
                    {available_to_rent? <NavLink to={`/apartment/${id}/new-application`}>Apply Now</NavLink> : null}
                </div>
            </div>
        </div>
    )
}

export default Apartment;

// t.string "name"
// t.integer "number_of_rooms"
// t.boolean "parking_available"
// t.integer "monthly_rent"
// t.string "address"
// t.string "phone"
// t.string "pets_allowed"
// t.boolean "available_to_rent"