import {useParams, NavLink} from 'react-router-dom'
import {useState} from 'react';

function NewApplicationForm({ onHandleCreatingNewApplicaiton }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [yearlyIncome, setYearlyIncome] = useState('')
    const [currentResPhone, setCurrentResPhone] = useState('')
    const [currentResAddress, setCurrentResAddress] = useState('')

    const {id} = useParams();

    function creatingApplicaitonObj(e) {
        e.preventDefault()
        const newApplicaitonObj = {
            apartment_id: id,
            applicant_name: fullName,
            current_residence_phone: currentResPhone,
            current_residence_address: currentResAddress,
            yearly_income: yearlyIncome,
            applicant_email: email
        }
        onHandleCreatingNewApplicaiton(newApplicaitonObj)
    }

    return (
        <div>
            <h1>Application Form</h1>
            <NavLink to='/appartment-listings'><button>View Apartment Listing</button></NavLink>
            <NavLink to='/user-profile'><button>View User Profile</button></NavLink>
            <form onSubmit={(e) => creatingApplicaitonObj(e)} className='form'>
            <label> Full Name: 
                    <input type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    ></input>
                </label>
                <label> Email: 
                    <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </label>
                <label> Yearly Income: 
                    <input type="text"
                    value={yearlyIncome}
                    onChange={(e) => setYearlyIncome(e.target.value)}
                    ></input>
                </label>
                <label> Current Residence Phone: 
                    <input type="text"
                    value={currentResPhone}
                    onChange={(e) => setCurrentResPhone(e.target.value)}
                    ></input>
                </label>
                <label> Current Residence Address: 
                    <input className='address' type="text"
                    value={currentResAddress}
                    onChange={e => setCurrentResAddress(e.target.value)}
                    ></input>
                </label>
                <input className='submit' type="submit"></input>
            </form>
        </div>
    )
}


export default NewApplicationForm;