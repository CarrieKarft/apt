import UpdateApplicationForm from "./UpdateApplicaitonForm";

function CompletedAppliction() {
    return (
        <div>
            {/* fetch request will get application info from application#show */}
            {/* How will I get appartment name? */}
            {/* might be accessing applications through appartments instead of user */}
            <h1>CompletedAppliction</h1>
            <h3>Appartment Name</h3>
            <h4>Applicant Email</h4>
            <h4>Applicant Phone</h4>
            <h4>Yearly Income</h4>
            <h4>Current Residence Address</h4>
            <h4>Current Residence Phone</h4>
            <button>Update</button>
            {/* when user hits update render <UpdateApplictionForm */}
            <button>Delete</button>
            <UpdateApplicationForm />
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

export default CompletedAppliction;