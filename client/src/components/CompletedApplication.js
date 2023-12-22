import { useParams } from "react-router-dom";
import { useContext } from "react";
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
    const filteringForUser = currentApt.applications.filter(app => app.user_id === currentUser.id)
 
    const mappingApps = filteringForUser.map((app, index) => {
        return <Appliction app={app} id={app.id} key={index} handleApplicationDelete={handleApplicationDelete} handleUpdatingUserApplication={handleUpdatingUserApplication}/>
    })

    return (
        <div>
        <h1>Completed Applictions For {currentApt.name}</h1>
        <NavLink to='/user-profile'><button>Return To User Profile</button></NavLink>
        <NavLink to='/appartment-listings'><button>View More Apartments</button></NavLink>
        {mappingApps}
        </div>
    )
}

export default CompletedAppliction;