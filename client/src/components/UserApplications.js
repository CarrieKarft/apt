import React, {useContext} from "react";
import {UserContext} from '../context/UserContext';

function UserApplications() {
    // this will hold applications associated with user
    // each application when clicked will trigger a fetch that will show the application
    const {currentUser} = useContext(UserContext);
    const {applications} = currentUser
    console.log(applications)
    return (
        <div>
            <h1>User Applications</h1>
        </div>
    )

}

export default UserApplications;