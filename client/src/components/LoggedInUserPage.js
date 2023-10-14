import React, {useContext} from "react";
import NavBar from "./NavBar";
import AptsAppliedTo from "./AptsApplied";
import {useEffect, useState} from 'react'
import { UserContext } from "../context/UserContext";

function LoggedInUserPage() {
    // just turn the firstname thing into a custom serializer method later
    // once routerDOM in project change so that login fetch just uses history.push to send user to LoggedInUserPage and not set current user in fetch
    const {currentUser, setCurrentUser} = useContext(UserContext);

    function handleLogout(e) {
        console.log("logging out")
        fetch("/sessions/1", {
            method: "DELETE",
          }).then(() => onLogout());
    }
    

    function onLogout() {
        console.log("before state change", currentUser)
        setCurrentUser(null)
    }
    console.log("after state change", currentUser)


    if(!currentUser) return <h2>Loading</h2>
    const {name} = currentUser
    const firstName = name.split(" ")
    return (
        <div>
            <h1>Hello, {firstName[0]}</h1>
            <NavBar onHandleLogout={handleLogout}/>
            <AptsAppliedTo />
        </div>
    )
}

export default LoggedInUserPage;