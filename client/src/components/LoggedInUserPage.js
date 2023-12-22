import React, {useContext} from "react";
import NavBar from "./NavBar";
import AptsAppliedTo from "./AptsApplied";
import { UserContext } from "../context/UserContext";


function LoggedInUserPage() {

    const {currentUser, setCurrentUser} = useContext(UserContext);

    function handleLogout(e) {
        console.log("logging out")
        fetch("/logout", {
            method: "DELETE",
          }).then(() => onLogout());
    }
    

    function onLogout() {
        console.log("before state change", currentUser)
        setCurrentUser(null)
    }


    const {first_name} = currentUser
    return (
        <div>
            <h1>Hello, {first_name}</h1>
            <NavBar onHandleLogout={handleLogout}/>
            <AptsAppliedTo />
        </div>
    )
}

export default LoggedInUserPage;