
// might need to be child of appartment not app do this with reactRouterDom switch?route situation
function NewApplicationForm() {
    return (
        // will trigger fetch to applicatons#create onSubmit
        // associated appartment id will be passed down as prop?
        // will need to update current user to include new application data and appartment data
        // may also need to update appartments state to include new application in # of applications for given appartment
        // after clicking apply redirct to completed applicatins page
        <div>
            <h1>NewApplicationForm</h1>
            <form>
            <lable> Full Name: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Email: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Yearly Income: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Current Residence Phone: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Current Residence Address: 
                    <input type="text"
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