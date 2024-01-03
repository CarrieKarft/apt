import './App.css';
import './index.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import AppartmentsListingPage from './components/ApartmentsListingPage';
import SignupPage from './components/SignupPage';
import LoggedInUserPage from './components/LoggedInUserPage';
import NewApplicationForm from './components/NewApplicationForm';
import CompletedAppliction from './components/CompletedApplication';
import Header from './components/Header';
import NewApartmentForm from './components/NewApartmentForm';
import { ApartmentContext } from './context/ApartmentContext';
import {UserContext} from '../src/context/UserContext'


function App() {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const {apartments, setApartments} = useContext(ApartmentContext);

  const navigate = useNavigate();

  if(!currentUser) return <SignupPage handleSignupUser={handleSignupUser} />


  // console.log(currentUser.apartments)

  function handleSignupUser(newUserObj) {
    fetch('/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserObj)
    }).then(r => {
      if(r.ok) {
          r.json().then(newUserData => setCurrentUser(newUserData))
      } else {
          r.json().then(errorData => alert(errorData.errors))
      }
  })

  }

  function handleUpdatingUserApplication(updatedApplicationObj) {
    fetch(`/applications/${updatedApplicationObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedApplicationObj),
    }).then(r => {
      if(r.ok) {
          r.json().then(updatedAppData => handleUpdatingApplicationInState(updatedAppData))
      } else {
          r.json().then(errorData => alert(errorData.errors))
      }
    })


  }

  function handleUpdatingApplicationInState(updatedAppData){

    const findingApartmentRelatedToApp = apartments.find(apt => apt.id === updatedAppData.apartment_id)
    const mapingAptsAppsToUpdate = findingApartmentRelatedToApp.applications.map(app => app.id === updatedAppData.id ? updatedAppData : app)
    const updatingAptWithNewAppsArray = {...findingApartmentRelatedToApp, applications: mapingAptsAppsToUpdate}
    const mappingAptsArrayToAddUpdatedApt = apartments.map(apt => updatingAptWithNewAppsArray.id === apt.id ? updatingAptWithNewAppsArray : apt)
    setApartments(mappingAptsArrayToAddUpdatedApt)

  }

  function handleCreatingNewApplicaiton(newApplicaitonObj) {
    fetch('/applications', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newApplicaitonObj),
          }).then(r => {
            if(r.ok) {
                r.json().then(newAppData => handleAddingApplicationToState(newAppData))
            } else {
                r.json().then(errorData => alert(errorData.errors))
            }
        })
  }

  function handleAddingApplicationToState(newAppData){

    const findingApartmentRelatedToApp = apartments.find(apt => apt.id === newAppData.apartment_id)
    const addingAppToApartmentApplications = [...findingApartmentRelatedToApp.applications, newAppData]
    const updatingApartmentRelatedToApp = {...findingApartmentRelatedToApp, applications: addingAppToApartmentApplications}
    const addingUpdatedAptToApartments = apartments.map(apt => apt.id === newAppData.apartment_id ? updatingApartmentRelatedToApp : apt) 
    setApartments(addingUpdatedAptToApartments)

    const filteringAptOutOfUniqueApartments = currentUser.unique_apartments.filter(apt => apt.id !== findingApartmentRelatedToApp.id)

    const creatingNewUniqueApartment = {
      address: findingApartmentRelatedToApp.address,
      available_to_rent: findingApartmentRelatedToApp.available_to_rent,
      id: findingApartmentRelatedToApp.id,
      monthly_rent: findingApartmentRelatedToApp.monthly_rent,
      name: findingApartmentRelatedToApp.name,
      number_of_rooms: findingApartmentRelatedToApp.number_of_rooms,
      parking_available: findingApartmentRelatedToApp.parking_available,
      pets_allowed: findingApartmentRelatedToApp.pets_allowed,
      phone: findingApartmentRelatedToApp.phone,
    }

    const addingAptBackInToUniqueApartments = [...filteringAptOutOfUniqueApartments, creatingNewUniqueApartment]
    const addingNewUniqueApartmentArrayToCurrentUser = {...currentUser, unique_apartments: addingAptBackInToUniqueApartments}
    setCurrentUser(addingNewUniqueApartmentArrayToCurrentUser)


    navigate('/user-profile')
  }
  // console.log("after", apartments)
  // console.log("after", currentUser)

  function handleApplicationDelete(id, apartment_id){
    fetch(`/applications/${id}`, {
            method: "DELETE"
        })
        .then(r => {
          if(r.ok) {
            r.json().then(() => filteringDetetedApplicationFromState(id, apartment_id))
        } else {
            r.json().then(errorData => alert(errorData.errors))
        }
    })
  }

  function filteringDetetedApplicationFromState(id, apartment_id) {

    const findingApartmentRelatedToApp = apartments.find(apt => apt.id === apartment_id)
    const filteringOutApplicationForApt = findingApartmentRelatedToApp.applications.filter(app => app.id !== id)
    const updatingAptRelatedToApp = {...findingApartmentRelatedToApp, applications: filteringOutApplicationForApt}
    const addingUpdatedAptBackToApartments = apartments.map(apt => apt.id === updatingAptRelatedToApp.id ? updatingAptRelatedToApp : apt)
    setApartments(addingUpdatedAptBackToApartments)

    const findingApplicationsRelatedToCurrentUser = filteringOutApplicationForApt.filter(app => app.user_id === currentUser.id)


    const appsRelatedToAptAndCurrentUser = findingApplicationsRelatedToCurrentUser.some(app => app.apartment_id === findingApartmentRelatedToApp.id)

    if (!appsRelatedToAptAndCurrentUser) {
      const filteringOutUniqueApt = currentUser.unique_apartments.filter(apt => findingApartmentRelatedToApp.id !== apt.id)
      const updatingCurrentUserWithApts = {...currentUser, unique_apartments: filteringOutUniqueApt}
      setCurrentUser(updatingCurrentUserWithApts)
    }

  }

  function handleCreatingNewApartment(newAptObj) {
    console.log(newAptObj)
    fetch('/apartments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAptObj),
    }).then(r => {
      if(r.ok) {
          r.json().then(newAptData => handleAddingAptToAptsState(newAptData))
      } else {
          r.json().then(errorData => alert(errorData.errors))
      }
  })
  }

  function handleAddingAptToAptsState(newAptData) {
    console.log("before", apartments)
    console.log(newAptData)
    const addingAptToApartments = [...apartments, newAptData]
    console.log(addingAptToApartments)
    setApartments(addingAptToApartments)
    navigate('/appartment-listings')
  }
  console.log("after", apartments)


  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/appartment-listings' element={<AppartmentsListingPage />} />
          <Route path='/apartments/new' element={<NewApartmentForm onHandleCreatingNewApartment={handleCreatingNewApartment} />} />
          <Route path='/appartment/:id/applications' element={<CompletedAppliction handleUpdatingUserApplication={handleUpdatingUserApplication} handleApplicationDelete={handleApplicationDelete}/>} />
          <Route path='/apartment/:id/applications/new' element={<NewApplicationForm onHandleCreatingNewApplicaiton={handleCreatingNewApplicaiton}/>} />
          <Route path='/user-profile' element={<LoggedInUserPage />} />
        </Routes>
    </div>
  );
}

export default App;
