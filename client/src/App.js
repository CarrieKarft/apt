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
  const [application, setApplication] = useState();

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
    const {id} = updatedApplicationObj
    console.log(id)
    fetch(`/applications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedApplicationObj),
    }).then(r => {
      if(r.ok) {
          r.json().then(updatedAppData => handleUpdatingApplicationInUserState(updatedAppData))
      } else {
          r.json().then(errorData => console.log(errorData.errors))
      }
    })

  }

  function handleUpdatingApplicationInUserState(updatedAppData){
    console.log(updatedAppData)
    console.log("before state change", currentUser)
    const filteringOutOldApplication = applications.map(app => app.id === updatedAppData.id ? updatedAppData : app)
    console.log(filteringOutOldApplication)
    const updatedCurrentUser = {...currentUser, applications: [filteringOutOldApplication]}
    setApplication(updatedAppData)
    // const newApplications = [...currentUser.applications, newAppData]
    // const updatedCurrentUser = {...currentUser, applications: [newApplications]}
    setCurrentUser(updatedCurrentUser);
  }
  console.log("after state change", currentUser)

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

  function handleApplicationDelete(id){
    console.log("delete")
    fetch(`/applications/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => filteringDetetedApplicationFromState(id))
  }

  function filteringDetetedApplicationFromState(id) {
    const filteringOutDeletedApplication = application.filter(app => app.id !== id)
    const updatingCurrentUser = {...currentUser, applications: [filteringOutDeletedApplication]}
    setCurrentUser(updatingCurrentUser)
    setApplication()
  }


  return (
    <div>
      <ApartmentProvider>
        <Routes>
          <Route path='/appartment-listings' element={<AppartmentsListingPage />} />
          <Route path='/appartment/:id/application' element={<CompletedAppliction handleUpdatingUserApplication={handleUpdatingUserApplication} application={application} setApplication={setApplication} handleApplicationDelete={handleApplicationDelete}/>} />
          <Route path='/apartment/:id/new-application' element={<NewApplicationForm onHandleCreatingNewApplicaiton={handleCreatingNewApplicaiton}/>} />
          <Route path='/signup-page' element={<SignupPage handleSignupUser={handleSignupUser}/>} />
          <Route path='/user-profile' element={<LoggedInUserPage />} />
        </Routes>
      </ApartmentProvider>
    </div>
  );
}

export default App;
