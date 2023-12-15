import {useParams} from 'react-router-dom'
import {useState} from 'react';
// might need to be child of appartment not app do this with reactRouterDom switch?route situation
function NewApplicationForm({ onHandleCreatingNewApplicaiton }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [yearlyIncome, setYearlyIncome] = useState('')
    const [currentResPhone, setCurrentResPhone] = useState('')
    const [currentResAddress, setCurrentResAddress] = useState('')

    const {id} = useParams();
    console.log(id)

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
        // will trigger fetch to applicatons#create onSubmit
        // associated appartment id will be passed down as prop? (used useParams to get it. Is this allowed?)
        // will need to update current user to include new application data and appartment data
        // may also need to update appartments state to include new application in # of applications for given appartment
        // after clicking apply redirct to completed applicatins page
        <div>
            <h1>NewApplicationForm</h1>
            <form onSubmit={(e) => creatingApplicaitonObj(e)}>
            <lable> Full Name: 
                    <input type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    ></input>
                </lable>
                <lable> Email: 
                    <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </lable>
                <lable> Yearly Income: 
                    <input type="text"
                    value={yearlyIncome}
                    onChange={(e) => setYearlyIncome(e.target.value)}
                    ></input>
                </lable>
                <lable> Current Residence Phone: 
                    <input type="text"
                    value={currentResPhone}
                    onChange={(e) => setCurrentResPhone(e.target.value)}
                    ></input>
                </lable>
                <lable> Current Residence Address: 
                    <input type="text"
                    value={currentResAddress}
                    onChange={e => setCurrentResAddress(e.target.value)}
                    ></input>
                </lable>
                <input type="submit"></input>
            </form>
        </div>
    )
}

// t.integer "appartment_id"
//     t.integer "user_id"
//     t.string "applicant_name"
//     t.string "current_residence_phone"
//     t.string "current_residence_address"
//     t.string "yearly_income"
//     t.string "applicant_email"

export default NewApplicationForm;