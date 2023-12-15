import React from "react";
import {NavLink} from 'react-router-dom';
import SearchBar from "./SearchBar";
import AppartmentsContainer from "./AppartmentsContainer";
// import {ApartmentContext} from "../context/ApartmentContext";

function AppartmentsListingPage() {
    // const {apartments} = useContext(ApartmentContext);
    // console.log(apartments)
    return (
        <div>
            <h1>AppartmentsListingPage</h1>
            {/* onClick will direct to login and signup page when reactDom render is being used */}
            <NavLink to={'/signup-page'}><button>Login or Signup</button></NavLink>
            {/* either get rid of search bar or create custom method to search by location */}
            <SearchBar />
            <AppartmentsContainer />
        </div>
    )
}

export default AppartmentsListingPage;