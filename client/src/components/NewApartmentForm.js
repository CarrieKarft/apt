import React, {useState} from "react";
import { NavLink } from "react-router-dom";


function NewApartmentForm({onHandleCreatingNewApartment}) {
    const [aptName, setAptName] = useState('')
    const [numberRooms, setnumberRooms] = useState('')
    const [parking, setParking] = useState(false)
    const [monthlyRent, setMonthlyRent] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [pets, setPets] = useState('')
    const [available, setAvailable] = useState(false)

    // const navigate = useNavigate();

    function handleCreatingNewApartmentObj(e) {
        e.preventDefault()
        const newAptObj = {
             name: aptName,
             number_of_rooms: parseInt(numberRooms, 10),
             parking_available: JSON.parse(parking),
             monthly_rent: parseInt(monthlyRent, 10),
             address: address,
             phone: phone,
             pets_allowed: pets,
             available_to_rent: JSON.parse(available)
        }
        onHandleCreatingNewApartment(newAptObj)
        // navigate('/appartment-listings')
    }

 return(
    <div>
        <h1>Create A New Apartment Listing</h1>
        <h2>Please answer a few questions about your apartment complex</h2>
        <NavLink to='/appartment-listings'><button>Return To Apartment Listings</button></NavLink>
    <div className='form'>
        <form onSubmit={e => handleCreatingNewApartmentObj(e)} >
            <label> What is the name of the apartment complex?
                <input
                type='text'
                value={aptName}
                onChange={e => setAptName(e.target.value)}
                ></input>
            </label>
            <label> How many bedrooms does it have?
                <input
                type='text'
                value={numberRooms}
                onChange={e => setnumberRooms(e.target.value)}
                ></input>
            </label>
            <label> Is Parking Available?
                <select type='select' value={parking} onChange={e => setParking(e.target.value)} >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </label>
            <label> How much is rent per month in USD?
                <input
                type='text'
                value={monthlyRent}
                onChange={e => setMonthlyRent(e.target.value)}
                ></input>
            </label>
            <label> What is the address of the apartment complex?
                <input
                type='text'
                value={address}
                onChange={e => setAddress(e.target.value)}
                ></input>
            </label>
            <label> What is the phone number for the complex?
                <input
                type='text'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                ></input>
            </label>
            <label> Are pets allowed, and what type of pets are allowed?
                <input
                type='text'
                value={pets}
                onChange={e => setPets(e.target.value)}
                ></input>
            </label>
            <label> Are there units available to rent in your complex?
                <select type='select' value={available} onChange={e => setAvailable(e.target.value)} >
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </select>
            </label>
        <input type='submit'></input>
        </form>
    </div>
    </div>
 )
}

export default NewApartmentForm;

//    t.string "name"
// t.integer "number_of_rooms"
// t.boolean "parking_available"
// t.integer "monthly_rent"
// t.string "address"
// t.string "phone"
// t.string "pets_allowed"
// t.boolean "available_to_rent"