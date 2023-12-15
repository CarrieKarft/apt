import './App.css';
import {Routes, Route} from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import AppartmentsListingPage from './components/ApartmentsListingPage';
import SignupPage from './components/SignupPage';
import LoggedInUserPage from './components/LoggedInUserPage';
import NewApplicationForm from './components/NewApplicationForm';
import CompletedAppliction from './components/CompletedApplication';
// import { UserProvider } from './context/UserContext';
import { ApartmentProvider } from './context/ApartmentContext';
import {UserContext} from '../src/context/UserContext'


function App() {
  const {currentUser, setCurrentUser} = useContext(UserContext);

  if(!currentUser) return <h2>Loading...</h2>

  const {applications} = currentUser
  // console.log("current user", currentUser)
  // console.log("applications", applications)

  function handleSignupUser(newUserObj) {
    console.log(newUserObj)
    fetch('/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserObj)
    }).then(r => {
      if(r.ok) {
          r.json().then(newUserData => handleUpdatingUsers(newUserData))
      } else {
          r.json().then(errorData => console.log(errorData.errors))
      }
  })
  }

  function handleUpdatingUsers(newUserData) {
    // dont want to set user with this info since it contains password, need to use history.push to direct user to logged in user page or have this fetch '/me'
    console.log(newUserData)
  }

  function handleUpdatingUserApplication(updatedApplicationObj) {
    console.log(updatedApplicationObj)
  }

  function handleCreatingNewApplicaiton(newApplicaitonObj) {
    console.log(newApplicaitonObj)
    fetch('/applications', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newApplicaitonObj),
          }).then(r => {
            if(r.ok) {
                r.json().then(newAppData => handleAddingApplicationToUserState(newAppData))
            } else {
                r.json().then(errorData => console.log(errorData.errors))
            }
        })
  }

  function handleAddingApplicationToUserState(newAppData){
    console.log(newAppData)
    console.log("before state managemant", currentUser)
    // const {applications} = currentUser
    const newApplications = [...currentUser.applications, newAppData]
    const updatedCurrentUser = {...currentUser, applications: [newApplications]}
    setCurrentUser(updatedCurrentUser);
    console.log("during? state managgement", currentUser)

    // const upNewWalks = [...currentDog.walks, newWalkData]
    // const updatedCurrentDog = {...currentDog, walks: upNewWalks}
    // setCurrentDog(updatedCurrentDog)

    // const updatingDogsList = dogs.map(dog => dog.id === currentDog.id ? updatedCurrentDog : dog)
    // setDogs(updatingDogsList)
  }
  console.log("after state managgement", currentUser)


  return (
    <div>
      <ApartmentProvider>
        <Routes>
          <Route path='/appartment-listings' element={<AppartmentsListingPage />} />
          <Route path='/appartment/:id/application' element={<CompletedAppliction />} handleUpdatingUserApplication={handleUpdatingUserApplication}/>
          <Route path='/apartment/:id/new-application' element={<NewApplicationForm onHandleCreatingNewApplicaiton={handleCreatingNewApplicaiton}/>} />
          <Route path='/signup-page' element={<SignupPage handleSignupUser={handleSignupUser}/>} />
          <Route path='/user-profile' element={<LoggedInUserPage />} />
        </Routes>
      </ApartmentProvider>
    </div>
  );
}

export default App;
