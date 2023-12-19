import './App.css';
import {Routes, Route} from "react-router-dom";
import { useState, useContext } from 'react';
import AppartmentsListingPage from './components/ApartmentsListingPage';
import SignupPage from './components/SignupPage';
import LoggedInUserPage from './components/LoggedInUserPage';
import NewApplicationForm from './components/NewApplicationForm';
import CompletedAppliction from './components/CompletedApplication';
import UpdateApplicationForm from './components/UpdateApplicaitonForm';
import { ApartmentContext } from './context/ApartmentContext';
import {UserContext} from '../src/context/UserContext'


function App() {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const {apartments, setApartments} = useContext(ApartmentContext);
  const [application, setApplication] = useState();

  if(!currentUser) return <h2>Loading...</h2>

  const {applications} = currentUser

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
    console.log("second update obj", updatedApplicationObj)
    // const {id} = updatedApplicationObj
    console.log("id", updatedApplicationObj.id)
    fetch(`/applications/${updatedApplicationObj.id}`, {
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
    const updatedCurrentUser = {...currentUser, applications: filteringOutOldApplication}


    setCurrentUser(updatedCurrentUser);

    const findingApartmentRelatedToApp = apartments.find(apt => apt.id == updatedAppData.apartment_id)
    const mapingAptsAppsToUpdate = findingApartmentRelatedToApp.applications.map(app => app.id === updatedAppData.id ? updatedAppData : app)
    const updatingAptWithNewAppsArray = {...findingApartmentRelatedToApp, applications: mapingAptsAppsToUpdate}
    console.log("3", updatingAptWithNewAppsArray)
    const mappingAptsArrayToAddUpdatedApt = apartments.map(apt => updatingAptWithNewAppsArray.id === apt.id ? updatingAptWithNewAppsArray : apt)
    console.log(mappingAptsArrayToAddUpdatedApt)
    setApartments(mappingAptsArrayToAddUpdatedApt)

  }
  console.log("after state change", currentUser)

  function handleCreatingNewApplicaiton(newApplicaitonObj) {
    // console.log(newApplicaitonObj)
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

    const newApplications = [...currentUser.applications, newAppData]
    const updatedCurrentUser = {...currentUser, applications: newApplications}
    setCurrentUser(updatedCurrentUser);

    const findingApartmentRelatedToApp = apartments.find(apt => apt.id == newAppData.apartment_id)
    const addingAppToApartmentApplications = [...findingApartmentRelatedToApp.applications, newAppData]
    const updatingApartmentRelatedToApp = {...findingApartmentRelatedToApp, applications: addingAppToApartmentApplications}
    const addingUpdatedAptToApartments = apartments.map(apt => apt.id == newAppData.apartment_id ? updatingApartmentRelatedToApp : apt) 
    setApartments(addingUpdatedAptToApartments)
  }


  function handleApplicationDelete(id, apartment_id){
    fetch(`/applications/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => filteringDetetedApplicationFromState(id, apartment_id))
  }

  function filteringDetetedApplicationFromState(id, apartment_id) {
    const filteringOutDeletedApplication = applications.filter(app => app.id !== id)
    const updatingCurrentUser = {...currentUser, applications: [filteringOutDeletedApplication]}
    setCurrentUser(updatingCurrentUser)

    const findingApartmentRelatedToApp = apartments.find(apt => apt.id === apartment_id)
    const filteringOutApplicationForApt = findingApartmentRelatedToApp.applications.filter(app => app.id !== id)
    const updatingAptRelatedToApp = {...findingApartmentRelatedToApp, applications: filteringOutApplicationForApt}
    const addingUpdatedAptBackToApartments = apartments.map(apt => apt.id === updatingAptRelatedToApp.id ? updatingAptRelatedToApp : apt)
    setApartments(addingUpdatedAptBackToApartments)
  }


  return (
    <div>
        <Routes>
          <Route path='/appartment-listings' element={<AppartmentsListingPage />} />
          <Route path='/appartment/:id/application' element={<CompletedAppliction handleUpdatingUserApplication={handleUpdatingUserApplication} application={application} setApplication={setApplication} handleApplicationDelete={handleApplicationDelete}/>} />
          <Route path='/applications/:id' element={ <UpdateApplicationForm handleUpdatingUserApplication={handleUpdatingUserApplication} />}></Route>
          <Route path='/apartment/:id/new-application' element={<NewApplicationForm onHandleCreatingNewApplicaiton={handleCreatingNewApplicaiton}/>} />
          <Route path='/signup-page' element={<SignupPage handleSignupUser={handleSignupUser}/>} />
          <Route path='/user-profile' element={<LoggedInUserPage />} />
        </Routes>
    </div>
  );
}

export default App;
